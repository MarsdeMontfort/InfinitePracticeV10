# Video Player API Documentation

## Overview

The DrawMnemonics Video Player is a Pixorize-style educational video component that combines static mnemonic images with AI-generated narration. This component creates an interactive learning experience by synchronizing visual mnemonics with audio explanations.

---

## Table of Contents

1. [Component Architecture](#component-architecture)
2. [API Functions](#api-functions)
3. [Component Props](#component-props)
4. [State Management](#state-management)
5. [User Controls](#user-controls)
6. [Integration Guide](#integration-guide)
7. [TTS Integration](#tts-integration)
8. [Error Handling](#error-handling)
9. [Code Examples](#code-examples)

---

## Component Architecture

### VideoPlayerModal

The main video player component that renders as a full-screen modal overlay.

**Location**: Lines 498-808 in the main component file

**Purpose**: Displays a mnemonic image with synchronized audio narration, providing playback controls and progress tracking.

---

## API Functions

### 1. `generateTTS()`

Generates text-to-speech audio from a narration script.

**Signature**:
```javascript
async function generateTTS({ apiKey, text, voice })
```

**Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `apiKey` | string | Yes | OpenAI API key for authentication |
| `text` | string | Yes | The narration script to convert to speech |
| `voice` | string | Yes | Voice ID for TTS (e.g., "coral", "alloy") |

**Returns**:
- `Promise<string>` - A blob URL pointing to the generated MP3 audio file

**API Endpoint**: `https://api.openai.com/v1/audio/speech`

**Request Body**:
```javascript
{
  model: "gpt-4o-mini-tts",
  voice: voice,              // e.g., "coral"
  input: text,               // narration script
  response_format: "mp3",
  instructions: "Speak clearly and engagingly, like an educational narrator explaining a visual scene. Use a warm, friendly tone with good pacing."
}
```

**Error Handling**:
- Throws error if API request fails
- Error message format: `TTS Error: ${errorMessage}`

**Example**:
```javascript
const audioUrl = await generateTTS({
  apiKey: "sk-...",
  text: "Welcome to the medieval apothecary! Today we're covering ACE inhibitors...",
  voice: "coral"
});
```

---

### 2. `extractVideoScript()`

Extracts the video narration script from the AI-generated full text response.

**Signature**:
```javascript
function extractVideoScript(fullText)
```

**Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fullText` | string | Yes | Complete AI-generated response containing all sections |

**Returns**:
- `string` - Cleaned video script text without section headers

**Extraction Logic**:
1. Searches for section marker: `8[\.\)\-:]*\s*Video Narration`
2. Captures all text from that marker to end of document
3. Filters out the section header line
4. Returns trimmed, cleaned script text

**Example**:
```javascript
const aiResponse = `
...
8. Video Narration Script
Welcome to the medieval apothecary! Today we're covering ACE inhibitors...
`;

const script = extractVideoScript(aiResponse);
// Returns: "Welcome to the medieval apothecary!..."
```

---

## Component Props

### VideoPlayerModal Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `box` | Object | Yes | Data object containing image and script information |
| `box.imageUrl` | string | No | Base64 or URL of the mnemonic image to display |
| `box.videoScript` | string | Yes | Narration script for TTS generation |
| `onClose` | Function | Yes | Callback function to close the modal |
| `apiKey` | string | Yes | OpenAI API key for TTS generation |
| `ttsVoice` | string | Yes | Voice ID for text-to-speech |

**Box Object Structure**:
```javascript
{
  imageUrl: "data:image/png;base64,iVBORw0KG...",  // Optional
  videoScript: "Welcome to the scene...",          // Required
  imageFilename: "mnemonic_123.png",              // Optional
  // ... other properties
}
```

---

## State Management

### Internal Component State

| State Variable | Type | Initial Value | Description |
|----------------|------|---------------|-------------|
| `audioUrl` | string \| null | null | Blob URL of generated audio file |
| `isPlaying` | boolean | false | Whether audio is currently playing |
| `currentTime` | number | 0 | Current playback position in seconds |
| `duration` | number | 0 | Total audio duration in seconds |
| `playbackRate` | number | 1 | Playback speed multiplier (0.5x - 2x) |
| `volume` | number | 1 | Audio volume (0.0 - 1.0) |
| `loading` | boolean | false | Whether TTS generation is in progress |
| `error` | string | "" | Error message if TTS generation fails |

### State Flow Diagram

```
Component Mount
    ↓
Check for videoScript & apiKey
    ↓
Set loading = true
    ↓
Call generateTTS()
    ↓
Success? → Set audioUrl, loading = false
    ↓
Failure? → Set error, loading = false
    ↓
User Interactions → Update state
    ↓
Component Unmount → Cleanup (revoke blob URL, pause audio)
```

---

## User Controls

### Playback Controls

#### 1. Play/Pause Button
- **Visual**: Large circular button (50x50px)
- **Color**: Green (#4CAF50) when paused, Red (#f44336) when playing
- **Icon**: ▶️ (play) or ⏸ (pause)
- **Disabled**: When loading or no audio available

**Implementation**:
```javascript
const togglePlayPause = async () => {
  const audio = audioRef.current;
  if (!audio) return;

  if (isPlaying) {
    audio.pause();
    setIsPlaying(false);
  } else {
    try {
      await audio.play();
      setIsPlaying(true);
    } catch (e) {
      console.error("Play error:", e);
    }
  }
};
```

#### 2. Skip Buttons
- **Skip Backward**: ⏪ 10s - Jumps back 10 seconds
- **Skip Forward**: 10s ⏩ - Jumps forward 10 seconds

**Implementation**:
```javascript
const skip = (seconds) => {
  const audio = audioRef.current;
  if (!audio) return;
  audio.currentTime = Math.max(0, Math.min(duration, audio.currentTime + seconds));
};
```

#### 3. Progress Bar
- **Interactive**: Click anywhere to seek to that position
- **Visual Feedback**:
  - Gray background (#444)
  - Green progress bar (#4CAF50)
  - White circular thumb indicator
- **Height**: 6px

**Implementation**:
```javascript
const handleProgressClick = (e) => {
  const audio = audioRef.current;
  const bar = progressRef.current;
  if (!audio || !bar || !duration) return;

  const rect = bar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const newTime = (clickX / rect.width) * duration;
  audio.currentTime = Math.max(0, Math.min(duration, newTime));
};
```

#### 4. Playback Speed Control
- **Options**: 0.5x, 0.75x, 1x (default), 1.25x, 1.5x, 2x
- **Type**: Dropdown select

**Implementation**:
```javascript
const handleSpeedChange = (e) => {
  const rate = parseFloat(e.target.value);
  setPlaybackRate(rate);
  if (audioRef.current) {
    audioRef.current.playbackRate = rate;
  }
};
```

#### 5. Volume Control
- **Type**: Range slider (0.0 - 1.0)
- **Visual**: Horizontal slider with speaker icon 🔊
- **Width**: 80px

**Implementation**:
```javascript
const handleVolumeChange = (e) => {
  const vol = parseFloat(e.target.value);
  setVolume(vol);
  if (audioRef.current) {
    audioRef.current.volume = vol;
  }
};
```

#### 6. Close Button
- **Position**: Top-right corner (absolute positioning)
- **Visual**: White circular button with × symbol
- **Size**: 44x44px
- **Action**: Pauses audio, revokes blob URL, calls onClose()

---

## Integration Guide

### Basic Integration

**Step 1**: Import the component (already included in main file)

**Step 2**: Add state for player control
```javascript
const [playerOpen, setPlayerOpen] = useState(null);
```

**Step 3**: Add trigger button in your UI
```javascript
{box.videoScript && (
  <button onClick={() => setPlayerOpen(boxIndex)}>
    ▶ Play Video
  </button>
)}
```

**Step 4**: Render the modal conditionally
```javascript
{playerOpen !== null && (
  <VideoPlayerModal
    box={boxes[playerOpen]}
    onClose={() => setPlayerOpen(null)}
    apiKey={apiKey}
    ttsVoice={ttsVoice}
  />
)}
```

### Full Integration Example

```javascript
function MyComponent() {
  const [apiKey, setApiKey] = useState("");
  const [ttsVoice, setTtsVoice] = useState("coral");
  const [playerOpen, setPlayerOpen] = useState(null);
  const [boxes, setBoxes] = useState([
    {
      imageUrl: "data:image/png;base64,...",
      videoScript: "Welcome to the scene...",
      imageFilename: "mnemonic.png"
    }
  ]);

  return (
    <>
      {/* Your content */}
      <button onClick={() => setPlayerOpen(0)}>
        ▶ Play Video
      </button>

      {/* Video Player */}
      {playerOpen !== null && (
        <VideoPlayerModal
          box={boxes[playerOpen]}
          onClose={() => setPlayerOpen(null)}
          apiKey={apiKey}
          ttsVoice={ttsVoice}
        />
      )}
    </>
  );
}
```

---

## TTS Integration

### Supported Voices

The component supports all OpenAI TTS voices:

| Voice ID | Characteristics | Best For |
|----------|-----------------|----------|
| `alloy` | Neutral, balanced | General narration |
| `coral` | **Recommended** - Warm, engaging | Educational content |
| `echo` | Clear, friendly | Professional narration |
| `fable` | Expressive, dynamic | Storytelling |
| `nova` | Bright, energetic | Upbeat content |
| `onyx` | Deep, authoritative | Formal content |
| `sage` | Calm, wise | Explanatory content |
| `shimmer` | Soft, gentle | Soothing narration |

### Voice Selection UI

```javascript
<select value={ttsVoice} onChange={(e) => setTtsVoice(e.target.value)}>
  <option value="alloy">Alloy</option>
  <option value="coral">Coral (Recommended)</option>
  <option value="echo">Echo</option>
  <option value="fable">Fable</option>
  <option value="nova">Nova</option>
  <option value="onyx">Onyx</option>
  <option value="sage">Sage</option>
  <option value="shimmer">Shimmer</option>
</select>
```

### TTS Generation Flow

```
User clicks "Play Video"
    ↓
Modal opens with loading state
    ↓
Check if videoScript exists
    ↓
Call generateTTS() with:
  - apiKey
  - videoScript text
  - selected voice
    ↓
API returns MP3 blob
    ↓
Create blob URL with URL.createObjectURL()
    ↓
Set audioUrl state
    ↓
Audio element loads with src={audioUrl}
    ↓
Audio ready for playback
```

### TTS Request Optimization

The TTS generation includes optimized instructions for educational narration:

```javascript
instructions: "Speak clearly and engagingly, like an educational narrator explaining a visual scene. Use a warm, friendly tone with good pacing."
```

This ensures:
- Clear enunciation of medical terms
- Appropriate pacing for learning
- Engaging, warm tone
- Good pronunciation of technical vocabulary

---

## Error Handling

### Error States

#### 1. Missing Video Script
```javascript
if (!script || !apiKey) {
  setError("No video script available. Generate content first.");
  return;
}
```

**User sees**: Red error message in player controls area

#### 2. TTS Generation Failure
```javascript
generateTTS({ apiKey, text: script, voice: ttsVoice })
  .catch((e) => {
    setError(`TTS Error: ${e.message}`);
    setLoading(false);
  });
```

**User sees**: Error message with specific failure reason

#### 3. Audio Playback Failure
```javascript
try {
  await audio.play();
  setIsPlaying(true);
} catch (e) {
  console.error("Play error:", e);
}
```

**Behavior**: Error logged to console, playback state not updated

### Error Display

Errors are displayed in the player controls footer:

```javascript
{error && (
  <div style={{
    color: "#f44336",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 14
  }}>
    {error}
  </div>
)}
```

---

## Code Examples

### Example 1: Opening the Video Player

```javascript
// In your component
const handlePlayVideo = (boxIndex) => {
  // Check if video script exists
  if (!boxes[boxIndex].videoScript) {
    alert("Generate content first to create video narration");
    return;
  }

  // Check if API key is set
  if (!apiKey) {
    alert("Please enter your OpenAI API key");
    return;
  }

  // Open player
  setPlayerOpen(boxIndex);
};

// In JSX
<button onClick={() => handlePlayVideo(0)}>
  ▶ Play Video
</button>
```

### Example 2: Custom Video Script Generation

```javascript
const customVideoScript = `
Welcome to the neurology lab! Today we're covering cranial nerves.

Look at the colorful chart on the wall. Each nerve is represented by a unique character.

Starting from the top, see the olfactory nerve represented by a nose emoji. This helps you remember that cranial nerve I is all about smell.

Below that is the optic nerve, shown as a pair of glasses. Cranial nerve II handles vision.

So remember: nose for smell, glasses for vision!
`;

const box = {
  imageUrl: "data:image/png;base64,...",
  videoScript: customVideoScript,
  imageFilename: "cranial_nerves.png"
};
```

### Example 3: Programmatic Player Control

```javascript
// Access the player's audio element
const audioRef = useRef(null);

// Play from start
const playFromStart = () => {
  const audio = audioRef.current;
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
};

// Pause at specific time
const pauseAt = (seconds) => {
  const audio = audioRef.current;
  if (audio) {
    audio.currentTime = seconds;
    audio.pause();
  }
};

// Set specific playback rate
const setSpeed = (rate) => {
  const audio = audioRef.current;
  if (audio) {
    audio.playbackRate = rate;
  }
};
```

### Example 4: Multiple Video Players

```javascript
function MultiVideoComponent() {
  const [players, setPlayers] = useState({
    scene1: false,
    scene2: false,
    scene3: false
  });

  const openPlayer = (sceneId) => {
    setPlayers({ ...players, [sceneId]: true });
  };

  const closePlayer = (sceneId) => {
    setPlayers({ ...players, [sceneId]: false });
  };

  return (
    <>
      <button onClick={() => openPlayer('scene1')}>Play Scene 1</button>
      <button onClick={() => openPlayer('scene2')}>Play Scene 2</button>
      <button onClick={() => openPlayer('scene3')}>Play Scene 3</button>

      {players.scene1 && (
        <VideoPlayerModal
          box={scenes[0]}
          onClose={() => closePlayer('scene1')}
          apiKey={apiKey}
          ttsVoice="coral"
        />
      )}
      {/* Additional players... */}
    </>
  );
}
```

### Example 5: Audio Event Listeners

```javascript
useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  const onTimeUpdate = () => {
    setCurrentTime(audio.currentTime);

    // Custom logic: highlight different parts of image based on time
    if (audio.currentTime >= 10 && audio.currentTime < 20) {
      highlightProp('prop1');
    } else if (audio.currentTime >= 20 && audio.currentTime < 30) {
      highlightProp('prop2');
    }
  };

  const onLoadedMetadata = () => {
    setDuration(audio.duration);
    console.log(`Audio loaded: ${audio.duration}s`);
  };

  const onEnded = () => {
    setIsPlaying(false);
    console.log('Playback completed');
    // Optional: auto-advance to next scene
  };

  audio.addEventListener("timeupdate", onTimeUpdate);
  audio.addEventListener("loadedmetadata", onLoadedMetadata);
  audio.addEventListener("ended", onEnded);

  return () => {
    audio.removeEventListener("timeupdate", onTimeUpdate);
    audio.removeEventListener("loadedmetadata", onLoadedMetadata);
    audio.removeEventListener("ended", onEnded);
  };
}, [audioUrl]);
```

---

## Video Script Format Specification

### Required Structure (8 Sections)

The video script follows a specific Pixorize-style format:

#### Section 1: Hook + Topic Intro (10-15 seconds)
```
Welcome to the [setting]! Today we're covering [medical topic]—[brief definition].
```

#### Section 2: Scene Establishment (15-20 seconds)
```
Picture yourself in [scene description]. Right in the center, notice [main anchor prop]—that's our anchor for [main concept]. [Explain why it represents the concept].
```

#### Section 3: Prop Walkthrough (60-90 seconds)
```
For each prop:
- Point: "Now look at the [prop] on the [location]..."
- Connect: "This represents [medical term]..."
- Explain: "...because [sound-alike/visual reason]."
- Clinical context: [One sentence of medical relevance]
- Reinforce: "So [prop] = [key fact]."
```

#### Section 4: Summary + Closing (15-20 seconds)
```
So remember, in our [scene]: [list 3-4 main associations]. Next time you see this image, these facts will come right back to you!
```

### Tone Requirements
- Conversational, like explaining to a classmate
- Short sentences (8-15 words, TTS-friendly)
- Use "you" and "we" to engage
- Include "should help you remember" at least twice
- No filler words ("um", "like")

---

## Performance Considerations

### Memory Management

1. **Blob URL Cleanup**: Always revoke blob URLs when component unmounts
```javascript
useEffect(() => {
  return () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
  };
}, [audioUrl]);
```

2. **Audio Element Cleanup**: Pause audio before unmounting
```javascript
const closePlayer = () => {
  if (audioRef.current) audioRef.current.pause();
  if (audioUrl) URL.revokeObjectURL(audioUrl);
  onClose();
};
```

### Network Optimization

- **TTS Generation**: Only generates once per modal open
- **Caching**: Audio blob URL remains valid during modal lifetime
- **Preload**: Audio element uses `preload="auto"` for smooth playback

### Rendering Performance

- **Modal Overlay**: Full-screen fixed positioning (`position: fixed`)
- **Image Optimization**: Uses `object-fit: contain` for responsive scaling
- **CSS Transitions**: Smooth progress bar updates with `transition: width 0.1s`

---

## Styling Reference

### Modal Container
```javascript
style={{
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "#000",
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
}}
```

### Image Display Area
```javascript
style={{
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
  overflow: "hidden",
}}
```

### Controls Footer
```javascript
style={{
  background: "rgba(30,30,30,0.95)",
  padding: "12px 20px",
  borderTop: "1px solid #333",
}}
```

### Progress Bar
```javascript
// Container
style={{
  height: 6,
  background: "#444",
  borderRadius: 3,
  cursor: "pointer",
  marginBottom: 12,
  position: "relative",
}}

// Fill
style={{
  height: "100%",
  background: "#4CAF50",
  borderRadius: 3,
  width: `${progress}%`,
  transition: "width 0.1s",
}}

// Thumb
style={{
  position: "absolute",
  top: -4,
  left: `${progress}%`,
  transform: "translateX(-50%)",
  width: 14,
  height: 14,
  background: "#fff",
  borderRadius: "50%",
  boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
}}
```

---

## Accessibility Considerations

### Keyboard Navigation
Currently not implemented. Recommended additions:
- Space bar: Play/Pause
- Arrow keys: Skip forward/backward
- Escape: Close modal

### Screen Reader Support
Recommended ARIA labels:
```javascript
<button
  aria-label="Play video narration"
  aria-pressed={isPlaying}
  onClick={togglePlayPause}
>
  {isPlaying ? "⏸" : "▶️"}
</button>

<div
  role="progressbar"
  aria-valuenow={currentTime}
  aria-valuemin={0}
  aria-valuemax={duration}
  aria-label="Audio playback progress"
>
```

---

## Browser Compatibility

### Required Features
- **Blob URLs**: `URL.createObjectURL()` - Supported in all modern browsers
- **Audio Element**: HTML5 `<audio>` - Universal support
- **Fetch API**: For TTS generation - IE11 requires polyfill
- **Async/Await**: Modern JavaScript syntax - Transpile for older browsers

### Tested Browsers
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## Troubleshooting

### Issue: No audio plays
**Possible Causes**:
1. Missing API key
2. Empty video script
3. Network error during TTS generation
4. Browser autoplay policy

**Solutions**:
- Verify API key is valid
- Check console for errors
- Ensure user interaction before playback (browsers block autoplay)

### Issue: Audio cuts off early
**Cause**: TTS generation timeout or incomplete response

**Solution**: Check network tab for API response, increase timeout if needed

### Issue: Progress bar doesn't respond to clicks
**Cause**: Audio duration not loaded yet

**Solution**: Wait for `loadedmetadata` event before enabling seeking

---

## Future Enhancements

### Planned Features
1. **Subtitle Display**: Show synchronized text during playback
2. **Prop Highlighting**: Highlight image regions as they're mentioned
3. **Playback Bookmarks**: Save positions for later review
4. **Speed Presets**: Quick buttons for common speeds (0.75x, 1x, 1.25x)
5. **Keyboard Shortcuts**: Full keyboard control
6. **Mobile Gestures**: Swipe to skip, pinch to zoom image
7. **Analytics**: Track completion rates and replay sections

### Extensibility
The component is designed for easy extension:
- Add custom controls via additional buttons in footer
- Inject middleware into TTS generation pipeline
- Override styles with CSS-in-JS or styled-components
- Add event callbacks for tracking (onPlay, onPause, onComplete)

---

## Version History

### Current Version: 1.0.0
- Initial release with core video player functionality
- TTS generation via OpenAI API
- Full playback controls (play/pause, skip, speed, volume)
- Progress bar with seek functionality
- Multiple voice support
- Error handling and loading states

---

## License & Credits

This component is part of the DrawMnemonics educational tool.

**API Credits**:
- OpenAI TTS API (`gpt-4o-mini-tts`)
- OpenAI Image Generation API

**Inspired by**: Pixorize and SketchyMedical educational platforms

---

## Support & Contact

For issues or questions about the Video Player API:
1. Check this documentation thoroughly
2. Review error messages in browser console
3. Verify API key and network connectivity
4. Check OpenAI API status page for service issues

**Code Location**: Lines 498-808 in main component file
**Component Name**: `VideoPlayerModal`
**Dependencies**: React 16.8+, OpenAI API access
