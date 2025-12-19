# Video Player Architecture Documentation

## System Overview

The DrawMnemonics Video Player is a React-based component that integrates three key technologies:
1. **OpenAI Responses API** - For generating mnemonic content
2. **OpenAI Image Generation API** - For creating visual scenes
3. **OpenAI Text-to-Speech API** - For audio narration

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        User Interface                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Input Fields │  │ Control Panel│  │ Mnemonic Box │          │
│  │ - Prompts    │  │ - API Key    │  │ - Output     │          │
│  │ - Audionyms  │  │ - Model      │  │ - Image      │          │
│  │              │  │ - Voice      │  │ - [▶ Play]   │          │
│  └──────────────┘  └──────────────┘  └──────┬───────┘          │
└────────────────────────────────────────────┼──────────────────┘
                                              │ Click Play
                                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   VideoPlayerModal Component                    │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    Modal Overlay (z-index: 1000)          │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │              Close Button (×)                       │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │                                                     │  │  │
│  │  │           Image Display Area                       │  │  │
│  │  │           (flex: 1, centered)                      │  │  │
│  │  │                                                     │  │  │
│  │  │     ┌───────────────────────────────┐              │  │  │
│  │  │     │   <img src={imageUrl} />     │              │  │  │
│  │  │     │   Mnemonic Scene Image        │              │  │  │
│  │  │     └───────────────────────────────┘              │  │  │
│  │  │                                                     │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │              Controls Footer                        │  │  │
│  │  │  ┌──────────────────────────────────────────────┐   │  │  │
│  │  │  │      Progress Bar (clickable seek)          │   │  │  │
│  │  │  │  ████████████░░░░░░░░░░░ ⚪ 1:23 / 3:45      │   │  │  │
│  │  │  └──────────────────────────────────────────────┘   │  │  │
│  │  │  [⏪ 10s] [▶/⏸] [10s ⏩]  [Speed▾] [🔊───]      │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  │  <audio ref={audioRef} src={audioUrl} />                 │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Component Hierarchy

```
DrawMnemonicsResponsesOnly (Main App)
│
├── State Management
│   ├── apiKey: string
│   ├── model: string
│   ├── imageModel: string
│   ├── ttsVoice: string
│   ├── boxes: Array<BoxObject>
│   ├── playerOpen: number | null
│   └── audionymInput: string
│
├── UI Sections
│   ├── Left Panel (Mnemonic Boxes)
│   │   ├── Prompt Textarea
│   │   ├── Output Display
│   │   ├── Image Preview
│   │   └── [▶ Play Video] Button
│   │
│   └── Right Panel (Controls)
│       ├── API Key Input
│       ├── Model Selection
│       ├── Image Settings
│       ├── TTS Voice Selector
│       ├── [Generate All] Button
│       └── Export Buttons
│
└── VideoPlayerModal (Conditional Render)
    ├── Props
    │   ├── box: BoxObject
    │   ├── onClose: Function
    │   ├── apiKey: string
    │   └── ttsVoice: string
    │
    ├── State
    │   ├── audioUrl: string | null
    │   ├── isPlaying: boolean
    │   ├── currentTime: number
    │   ├── duration: number
    │   ├── playbackRate: number
    │   ├── volume: number
    │   ├── loading: boolean
    │   └── error: string
    │
    ├── Refs
    │   ├── audioRef: HTMLAudioElement
    │   └── progressRef: HTMLDivElement
    │
    └── Event Handlers
        ├── togglePlayPause()
        ├── skip(seconds)
        ├── handleProgressClick(e)
        ├── handleSpeedChange(e)
        ├── handleVolumeChange(e)
        └── closePlayer()
```

---

## Data Flow Diagram

### Content Generation Flow

```
User Input
    │
    ├─→ Prompt Text
    └─→ Audionym List
         │
         ▼
    buildSystemPrompt(audionymInput)
         │
         ├─→ Replace [[AUDIONYM_LIST_HERE]]
         └─→ Build full system prompt
              │
              ▼
    callLLM({ apiKey, model, systemPrompt, userPrompt })
         │
         ├─→ POST /v1/responses
         ├─→ Parse response
         └─→ Extract sections:
              │
              ├─→ extractClozeText() → Anki card
              ├─→ extractBackExtra() → Key concepts
              ├─→ extractImageExplanation() → Image prompt
              └─→ extractVideoScript() → Narration
                   │
                   ▼
    generateImage({ apiKey, prompt, quality, size })
         │
         ├─→ POST /v1/images/generations
         └─→ Return base64 image
              │
              ▼
    boxObject = {
        aiOutput,
        imageDescription,
        imageUrl,
        videoScript,
        ...
    }
```

### Video Player Flow

```
User clicks [▶ Play Video]
    │
    ▼
setPlayerOpen(boxIndex)
    │
    ▼
VideoPlayerModal mounts
    │
    ├─→ Check box.videoScript exists?
    │   ├─ No → Show error
    │   └─ Yes → Continue
    │
    ├─→ Check apiKey exists?
    │   ├─ No → Show error
    │   └─ Yes → Continue
    │
    ▼
useEffect triggers on mount
    │
    ├─→ setLoading(true)
    │
    ▼
generateTTS({ apiKey, text: videoScript, voice: ttsVoice })
    │
    ├─→ POST /v1/audio/speech
    │   │
    │   ├─ Request Body:
    │   │   {
    │   │     model: "gpt-4o-mini-tts",
    │   │     voice: ttsVoice,
    │   │     input: videoScript,
    │   │     response_format: "mp3"
    │   │   }
    │   │
    │   └─→ Response: Binary MP3 data
    │
    ├─→ Convert to Blob
    ├─→ URL.createObjectURL(blob)
    │
    ▼
setAudioUrl(blobUrl)
setLoading(false)
    │
    ▼
<audio> element loads
    │
    ├─→ Event: loadedmetadata
    │   └─→ setDuration(audio.duration)
    │
    ├─→ Event: timeupdate
    │   └─→ setCurrentTime(audio.currentTime)
    │
    └─→ Event: ended
        └─→ setIsPlaying(false)
    │
    ▼
User interactions update state
    │
    ├─→ Play/Pause → audio.play() / audio.pause()
    ├─→ Skip → audio.currentTime += seconds
    ├─→ Seek → audio.currentTime = clickPosition
    ├─→ Speed → audio.playbackRate = rate
    └─→ Volume → audio.volume = vol
    │
    ▼
User clicks Close
    │
    ├─→ audio.pause()
    ├─→ URL.revokeObjectURL(audioUrl)
    └─→ onClose()
         │
         ▼
    setPlayerOpen(null)
         │
         ▼
    VideoPlayerModal unmounts
```

---

## State Machine Diagram

### Player State Transitions

```
┌──────────┐
│  CLOSED  │
└─────┬────┘
      │ User clicks Play
      ▼
┌─────────────┐
│   OPENING   │ (playerOpen !== null)
└─────┬───────┘
      │ Component mounts
      ▼
┌─────────────┐
│  LOADING    │ (loading = true)
└─────┬───────┘
      │ TTS API call
      │
      ├─ Success ──────────┐
      │                    ▼
      │              ┌──────────┐
      │              │  READY   │ (audioUrl set, loading = false)
      │              └─────┬────┘
      │                    │ User clicks play
      │                    ▼
      │              ┌──────────┐
      │              │ PLAYING  │ (isPlaying = true, audio.play())
      │              └─────┬────┘
      │                    │
      │                    ├─ User clicks pause ──┐
      │                    │                      ▼
      │                    │                ┌──────────┐
      │                    │                │  PAUSED  │ (isPlaying = false)
      │                    │                └─────┬────┘
      │                    │                      │ User clicks play
      │                    │                      │
      │                    ├──────────────────────┘
      │                    │
      │                    ├─ Playback ends ──────┐
      │                    │                      ▼
      │                    │                ┌──────────┐
      │                    │                │ FINISHED │ (currentTime = duration)
      │                    │                └─────┬────┘
      │                    │                      │ Replay
      │                    │                      │
      │                    ├──────────────────────┘
      │                    │
      │                    └─ User clicks close
      │                              │
      └─ Error ─────────┐            │
                        ▼            ▼
                  ┌──────────┐  ┌──────────┐
                  │  ERROR   │  │  CLOSING │
                  └─────┬────┘  └─────┬────┘
                        │             │ Cleanup
                        │             ▼
                        │       ┌──────────┐
                        └──────→│  CLOSED  │
                                └──────────┘
```

---

## API Integration Architecture

### OpenAI API Endpoints

```
┌────────────────────────────────────────────────────────────┐
│                    OpenAI Platform                         │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  /v1/responses (LLM Content Generation)             │ │
│  │  ────────────────────────────────────────────────────│ │
│  │  Request:                                            │ │
│  │    - model: "gpt-5-pro-2025-10-06"                   │ │
│  │    - input: [system, user messages]                  │ │
│  │    - max_output_tokens: 131072                       │ │
│  │  Response:                                           │ │
│  │    - output_text: Full mnemonic structure            │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  /v1/images/generations (Image Creation)            │ │
│  │  ────────────────────────────────────────────────────│ │
│  │  Request:                                            │ │
│  │    - model: "gpt-image-1.5"                          │ │
│  │    - prompt: Image description from LLM              │ │
│  │    - size: "1536x1024"                               │ │
│  │    - quality: "medium"                               │ │
│  │  Response:                                           │ │
│  │    - data[0].b64_json: Base64 PNG image             │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  /v1/audio/speech (Text-to-Speech)                  │ │
│  │  ────────────────────────────────────────────────────│ │
│  │  Request:                                            │ │
│  │    - model: "gpt-4o-mini-tts"                        │ │
│  │    - voice: "coral"                                  │ │
│  │    - input: Video narration script                   │ │
│  │    - response_format: "mp3"                          │ │
│  │  Response:                                           │ │
│  │    - Binary MP3 audio data                           │ │
│  └──────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────┘
```

### Request/Response Flow

```
Client (Browser)
    │
    │ 1. Content Generation Request
    ├─────────────────────────────────→ OpenAI /v1/responses
    │                                         │
    │                                   Process with LLM
    │                                         │
    │ ←─────────────────────────────────────┘
    │   Response: Structured mnemonic text
    │
    │ 2. Image Generation Request
    ├─────────────────────────────────→ OpenAI /v1/images/generations
    │                                         │
    │                                   Generate image
    │                                         │
    │ ←─────────────────────────────────────┘
    │   Response: Base64 PNG image
    │
    │ [User clicks Play Video]
    │
    │ 3. TTS Generation Request
    ├─────────────────────────────────→ OpenAI /v1/audio/speech
    │                                         │
    │                                   Convert text → MP3
    │                                         │
    │ ←─────────────────────────────────────┘
    │   Response: Binary MP3 data
    │
    ├─ URL.createObjectURL(mp3Blob)
    │
    └─→ <audio src={blobUrl} />
```

---

## Memory Management

### Resource Lifecycle

```
Component Mount
    │
    ▼
┌─────────────────────────────────────┐
│  Allocate Resources                 │
│  - Create state variables           │
│  - Create refs (audioRef)           │
│  - No memory allocated yet          │
└───────────┬─────────────────────────┘
            │
            ▼
┌─────────────────────────────────────┐
│  TTS Generation                     │
│  - Fetch MP3 from API               │
│  - Create Blob in memory            │
│  - Generate blob URL                │
│  Memory: ~500KB - 2MB per audio     │
└───────────┬─────────────────────────┘
            │
            ▼
┌─────────────────────────────────────┐
│  Active Playback                    │
│  - Audio element holds blob ref     │
│  - State updates ~60fps             │
│  - Event listeners active           │
│  Memory: Stable                     │
└───────────┬─────────────────────────┘
            │
            ▼
┌─────────────────────────────────────┐
│  Component Unmount                  │
│  - audio.pause()                    │
│  - URL.revokeObjectURL(audioUrl) ✓  │
│  - Event listeners removed          │
│  - Blob released from memory        │
│  Memory: Freed                      │
└─────────────────────────────────────┘
```

### Cleanup Pattern

```javascript
useEffect(() => {
  // Allocation phase
  generateTTS(...).then(url => {
    setAudioUrl(url);  // Blob URL created
  });

  // Cleanup phase
  return () => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);  // Free blob memory
    }
  };
}, [dependencies]);
```

---

## Performance Optimization

### Rendering Optimization

```
Parent Component (DrawMnemonicsResponsesOnly)
    │
    ├─→ useMemo(normalizedAudionyms)
    │   └─ Prevents re-processing on every render
    │
    ├─→ Conditional Rendering
    │   └─ {playerOpen !== null && <VideoPlayerModal />}
    │       └─ Modal only mounted when needed
    │
    └─→ State Locality
        └─ Player state isolated in VideoPlayerModal
            └─ Parent re-renders don't affect player
```

### Network Optimization

```
Sequential API Calls (per box):
    │
    ├─→ Step 1: Generate content (LLM)
    │   └─ Wait for completion
    │       │
    │       ├─→ Step 2: Generate image
    │       │   └─ Wait for completion
    │       │
    │       └─→ Step 3: (On play) Generate TTS
    │           └─ Only when user requests

Parallel Processing (multiple boxes):
    │
    ├─→ Box 1: LLM → Image
    ├─→ Box 2: LLM → Image
    └─→ Box 3: LLM → Image
         │
         └─→ Process sequentially in loop
             (Could be parallelized in future)
```

---

## Security Considerations

### Current Implementation

```
┌────────────────────────────────────────┐
│  Client-Side Architecture              │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │  Browser (React App)             │  │
│  │                                  │  │
│  │  API Key: Stored in state ⚠️     │  │
│  │  └─→ Visible in memory/devtools │  │
│  │                                  │  │
│  │  Direct API Calls:               │  │
│  │  ├─→ fetch('openai.com')        │  │
│  │  ├─→ Authorization: Bearer key   │  │
│  │  └─→ Exposed in Network tab ⚠️  │  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘

⚠️  Security Issues:
- API key visible in browser
- No rate limiting
- No usage tracking
- CORS restrictions may apply
```

### Recommended Production Architecture

```
┌────────────────────────────────────────┐
│  Client (Browser)                      │
│  - No API keys stored                  │
│  - Session token only                  │
└───────────┬────────────────────────────┘
            │
            │ HTTPS
            ▼
┌────────────────────────────────────────┐
│  Backend Server (Node.js/Python)       │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │  API Routes                      │  │
│  │  ├─ POST /api/generate-content  │  │
│  │  ├─ POST /api/generate-image    │  │
│  │  └─ POST /api/generate-tts      │  │
│  └──────────────────────────────────┘  │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │  Security Layer                  │  │
│  │  ├─ Authentication (JWT)         │  │
│  │  ├─ Rate limiting                │  │
│  │  ├─ Usage tracking               │  │
│  │  └─ Input validation             │  │
│  └──────────────────────────────────┘  │
│                                        │
│  API Key: process.env.OPENAI_KEY ✓    │
└───────────┬────────────────────────────┘
            │
            │ Server-to-Server
            ▼
┌────────────────────────────────────────┐
│  OpenAI API                            │
└────────────────────────────────────────┘
```

---

## Error Handling Architecture

### Error Propagation

```
API Call
    │
    ├─ Network Error
    │   └─→ fetch() throws
    │       └─→ catch block
    │           └─→ setError(message)
    │               └─→ UI displays error
    │
    ├─ HTTP Error (4xx/5xx)
    │   └─→ !resp.ok
    │       └─→ throw new Error(await resp.text())
    │           └─→ catch block
    │               └─→ setError(message)
    │
    ├─ Parsing Error
    │   └─→ parseResponsesPayload() returns ""
    │       └─→ throw new Error("Empty output")
    │           └─→ catch block
    │               └─→ setError(message)
    │
    └─ Success
        └─→ Update state with data
```

### Retry Logic (Future Enhancement)

```
async function callLLMWithRetry(params, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await callLLM(params);
        } catch (error) {
            if (attempt === maxRetries) throw error;

            if (needsTokenBump(error)) {
                // Try with more tokens
                params.maxOutputTokens *= 2;
            }

            // Exponential backoff
            await sleep(2 ** attempt * 1000);
        }
    }
}
```

---

## Testing Architecture

### Unit Test Structure (Recommended)

```
tests/
├── VideoPlayerModal.test.js
│   ├── Rendering tests
│   │   ├─ Renders with valid props
│   │   ├─ Shows loading state
│   │   ├─ Shows error state
│   │   └─ Shows player controls when ready
│   │
│   ├── State management tests
│   │   ├─ Initial state is correct
│   │   ├─ TTS generation updates state
│   │   └─ User interactions update state
│   │
│   ├── Event handler tests
│   │   ├─ togglePlayPause() works
│   │   ├─ skip() updates currentTime
│   │   ├─ handleProgressClick() seeks
│   │   └─ closePlayer() cleans up
│   │
│   └── Integration tests
│       ├─ Full playback cycle
│       └─ Error recovery
│
├── api.test.js
│   ├── generateTTS()
│   │   ├─ Returns blob URL on success
│   │   ├─ Throws on API error
│   │   └─ Handles network timeout
│   │
│   └── extractVideoScript()
│       ├─ Extracts from valid text
│       └─ Returns empty on missing section
│
└── integration.test.js
    └── End-to-end flow
        ├─ Generate content
        ├─ Open player
        ├─ Play audio
        └─ Close player
```

---

## Deployment Architecture

### Development Environment

```
Local Machine
    ├─ Node.js v16+
    ├─ React Dev Server (port 3000)
    ├─ Hot Module Replacement
    └─ API calls → OpenAI (direct)
```

### Production Environment

```
CDN (Static Assets)
    ├─ HTML, CSS, JS bundles
    ├─ Optimized images
    └─ Service worker (optional)
         │
         ▼
User Browser
    ├─ React App
    └─ API calls → Backend Proxy
                    │
                    ▼
Backend Server
    ├─ Authentication
    ├─ Rate limiting
    └─ API calls → OpenAI
```

---

## Monitoring & Observability

### Key Metrics to Track

```
Performance Metrics:
├─ TTS Generation Time (avg, p95, p99)
├─ Audio Load Time
├─ Time to First Play
├─ Modal Open Latency
└─ Memory Usage

User Engagement:
├─ Play/Pause actions
├─ Average listen duration
├─ Skip usage frequency
├─ Speed adjustments
└─ Completion rate

Error Rates:
├─ TTS generation failures
├─ Audio playback errors
├─ Network timeouts
└─ API rate limits hit

Resource Usage:
├─ API token consumption
├─ Bandwidth (audio downloads)
└─ Peak concurrent players
```

### Logging Strategy

```javascript
// Structured logging example
const logPlayerEvent = (event, data) => {
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    component: 'VideoPlayerModal',
    event: event,
    data: data,
    sessionId: getSessionId(),
    userId: getUserId()
  }));
};

// Usage
logPlayerEvent('tts_generation_start', { scriptLength: text.length });
logPlayerEvent('tts_generation_success', { duration: audioElement.duration });
logPlayerEvent('playback_started', { playbackRate: 1.0 });
logPlayerEvent('playback_completed', { totalDuration: duration });
```

---

## Scalability Considerations

### Current Limitations

```
Single User / Local Processing:
├─ No concurrent user support
├─ No caching layer
├─ Direct API calls from client
└─ No request queuing

Memory Constraints:
├─ All audio blobs in browser memory
├─ Multiple players = multiple blobs
└─ No disk caching

API Rate Limits:
├─ OpenAI TTS: Rate limited by account
└─ No request throttling
```

### Scaling Strategy

```
Phase 1: Backend Proxy
├─ Move API calls to server
├─ Implement authentication
├─ Add basic caching (Redis)
└─ Rate limiting per user

Phase 2: Asset Storage
├─ Store generated audio in S3/Cloud Storage
├─ Generate once, serve many times
├─ CDN distribution
└─ Pre-signed URLs for access

Phase 3: Queue System
├─ Async TTS generation
├─ Job queue (Bull/RabbitMQ)
├─ WebSocket for status updates
└─ Batch processing

Phase 4: Microservices
├─ Separate TTS service
├─ Separate image generation service
├─ Load balancing
└─ Horizontal scaling
```

---

## Technology Stack Summary

```
┌─────────────────────────────────────────────────────────┐
│                   Technology Stack                      │
├─────────────────────────────────────────────────────────┤
│  Frontend Framework                                     │
│  └─ React 16.8+ (Hooks)                                 │
│                                                         │
│  State Management                                       │
│  └─ React useState, useEffect, useRef, useMemo         │
│                                                         │
│  UI Libraries                                           │
│  └─ None (Pure React + inline styles)                  │
│                                                         │
│  API Clients                                            │
│  └─ Native Fetch API                                    │
│                                                         │
│  Media APIs                                             │
│  ├─ HTML5 Audio Element                                │
│  ├─ URL.createObjectURL()                              │
│  └─ Blob API                                            │
│                                                         │
│  External Services                                      │
│  ├─ OpenAI Responses API (gpt-5-pro)                   │
│  ├─ OpenAI Image Generation (gpt-image-1.5)            │
│  └─ OpenAI TTS API (gpt-4o-mini-tts)                   │
│                                                         │
│  File Formats                                           │
│  ├─ MP3 (audio)                                         │
│  ├─ PNG (images, base64)                               │
│  └─ TSV (Anki export)                                  │
│                                                         │
│  Browser APIs                                           │
│  ├─ FileReader (audionym upload)                       │
│  ├─ Blob / URL                                          │
│  └─ Audio Events (timeupdate, ended, etc.)             │
└─────────────────────────────────────────────────────────┘
```

---

## Future Architecture Enhancements

### Proposed Improvements

1. **Offline Support**
```
Service Worker
├─ Cache generated audio
├─ Cache images
└─ Offline playback mode
```

2. **Real-time Collaboration**
```
WebSocket Connection
├─ Share mnemonic sessions
├─ Collaborative editing
└─ Live playback sync
```

3. **Advanced Analytics**
```
Event Tracking
├─ Learning patterns
├─ Replay heatmaps
└─ Effectiveness metrics
```

4. **Progressive Enhancement**
```
Adaptive Quality
├─ Auto-adjust based on bandwidth
├─ Lower quality for slow connections
└─ Progressive audio loading
```

---

## Conclusion

This architecture provides a solid foundation for an educational video player with AI-generated content. The modular design allows for incremental improvements while maintaining backward compatibility.

**Key Strengths:**
- Simple, maintainable component structure
- Clear separation of concerns
- Efficient resource management
- Extensible design

**Areas for Improvement:**
- Security (move API calls to backend)
- Scalability (add caching and queuing)
- Accessibility (keyboard navigation, ARIA)
- Error recovery (retry logic, fallbacks)

---

**Document Version:** 1.0.0
**Last Updated:** 2025-12-19
**Component Version:** VideoPlayerModal v1.0.0
