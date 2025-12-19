# Video Player Quick Reference Guide

## 🚀 Quick Start

```javascript
// 1. Add state
const [playerOpen, setPlayerOpen] = useState(null);

// 2. Add button
<button onClick={() => setPlayerOpen(0)}>▶ Play Video</button>

// 3. Render modal
{playerOpen !== null && (
  <VideoPlayerModal
    box={boxes[playerOpen]}
    onClose={() => setPlayerOpen(null)}
    apiKey={apiKey}
    ttsVoice="coral"
  />
)}
```

---

## 📋 Props Checklist

| Prop | Type | Example |
|------|------|---------|
| `box` | Object | `{ imageUrl: "data:...", videoScript: "Welcome..." }` |
| `onClose` | Function | `() => setPlayerOpen(null)` |
| `apiKey` | String | `"sk-proj-..."` |
| `ttsVoice` | String | `"coral"` |

---

## 🎙️ Voice Options

```javascript
// Recommended for education
ttsVoice="coral"

// All available voices
["alloy", "coral", "echo", "fable", "nova", "onyx", "sage", "shimmer"]
```

---

## 🎮 User Controls

| Control | Action | Keyboard* |
|---------|--------|-----------|
| Play/Pause | Toggle playback | Space* |
| ⏪ 10s | Skip backward 10 seconds | Left* |
| 10s ⏩ | Skip forward 10 seconds | Right* |
| Progress Bar | Click to seek | - |
| Speed | 0.5x to 2x | - |
| Volume | 0% to 100% | - |
| × Close | Exit player | Esc* |

*Not currently implemented - planned feature

---

## 🔧 Core Functions Reference

### generateTTS()
```javascript
await generateTTS({
  apiKey: "sk-...",
  text: script,
  voice: "coral"
})
// Returns: blob URL string
```

### extractVideoScript()
```javascript
const script = extractVideoScript(aiGeneratedText);
// Returns: cleaned script text
```

### formatTime()
```javascript
formatTime(125.5) // "2:05"
formatTime(65)    // "1:05"
```

---

## 🎨 Video Script Template

```
SECTION 1: HOOK (10-15s)
Welcome to [scene]! Today we're covering [topic]—[brief definition].

SECTION 2: SCENE SETUP (15-20s)
Picture [scene description]. Notice [main prop]—that's our anchor for [concept].

SECTION 3: PROP WALKTHROUGH (60-90s)
Now look at [prop] on [location]. This represents [term] because [reason]. [Clinical fact]. So [prop] = [fact].

SECTION 4: SUMMARY (15-20s)
So remember, in our [scene]: [3-4 key associations]. Next time you see this, these facts will come right back!
```

---

## ⚠️ Error Messages

| Message | Cause | Solution |
|---------|-------|----------|
| "No video script available" | Missing `box.videoScript` | Generate content first |
| "TTS Error: ..." | API failure | Check API key, network |
| Empty output | Missing API key | Enter valid OpenAI key |

---

## 🎯 State Variables

```javascript
const [audioUrl, setAudioUrl] = useState(null);        // Blob URL
const [isPlaying, setIsPlaying] = useState(false);     // Boolean
const [currentTime, setCurrentTime] = useState(0);     // Seconds
const [duration, setDuration] = useState(0);           // Seconds
const [playbackRate, setPlaybackRate] = useState(1);   // 0.5-2
const [volume, setVolume] = useState(1);               // 0-1
const [loading, setLoading] = useState(false);         // Boolean
const [error, setError] = useState("");                // String
```

---

## 📦 Required Dependencies

```json
{
  "react": ">=16.8.0",
  "react-dom": ">=16.8.0"
}
```

**External APIs:**
- OpenAI TTS API: `https://api.openai.com/v1/audio/speech`

---

## 🧹 Cleanup Pattern

```javascript
useEffect(() => {
  // Generate TTS...

  return () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
  };
}, [box?.videoScript, apiKey, ttsVoice]);
```

---

## 🎨 Styling Tokens

```javascript
// Colors
background: "#000"                    // Modal overlay
controls: "rgba(30,30,30,0.95)"       // Footer
progressBar: "#444"                   // Track
progressFill: "#4CAF50"               // Active
playButton: "#4CAF50" / "#f44336"     // Play/Pause
errorText: "#f44336"                  // Errors

// Sizes
closeButton: "44x44px"
playButton: "50x50px"
progressBar: "6px height"
progressThumb: "14x14px"
```

---

## 🔍 Debug Checklist

- [ ] API key is valid and starts with `sk-`
- [ ] `box.videoScript` exists and has content
- [ ] Network request to OpenAI succeeds (check Network tab)
- [ ] Browser console shows no errors
- [ ] Audio file blob URL is created
- [ ] `audioRef.current` is not null
- [ ] User has interacted with page (autoplay policy)

---

## 📊 Component Lifecycle

```
1. Component mounts
2. Check videoScript & apiKey ✓
3. Set loading=true
4. Call generateTTS()
5. Receive MP3 blob
6. Create blob URL
7. Set audioUrl, loading=false
8. Audio element loads
9. User controls available
10. On unmount: cleanup blob URL
```

---

## 🚨 Common Gotchas

1. **Autoplay Blocked**: Browsers require user interaction before audio plays
2. **Blob Memory Leak**: Always revoke URLs in cleanup
3. **Missing Duration**: Wait for `loadedmetadata` event
4. **API Rate Limits**: OpenAI TTS has usage limits
5. **Large Scripts**: Very long scripts may timeout

---

## 💡 Pro Tips

1. **Use "coral" voice** for best educational narration
2. **Keep scripts 90-120 seconds** for optimal engagement
3. **Test on mobile** - controls adapt to touch
4. **Preload images** before opening player
5. **Cache audio** - don't regenerate on every open
6. **Add analytics** - track completion rates

---

## 🔗 API Endpoints

```javascript
// TTS Generation
POST https://api.openai.com/v1/audio/speech
Headers: { Authorization: "Bearer sk-..." }
Body: {
  model: "gpt-4o-mini-tts",
  voice: "coral",
  input: "...",
  response_format: "mp3",
  instructions: "..."
}

// Returns: Binary MP3 data
```

---

## 📱 Responsive Behavior

```javascript
// Image scaling
maxWidth: "100%"
maxHeight: "100%"
objectFit: "contain"

// Controls wrap on narrow screens
flexWrap: "wrap"
gap: 16

// Mobile-friendly tap targets
button minHeight: 44px
```

---

## 🧪 Testing Scenarios

```javascript
// 1. Normal playback
const box = {
  videoScript: "Test script...",
  imageUrl: "data:image/png;base64,..."
};

// 2. Missing script
const box = { imageUrl: "..." };
// Expected: Error message

// 3. No image
const box = { videoScript: "..." };
// Expected: Placeholder, audio works

// 4. Empty API key
apiKey = "";
// Expected: Error on mount
```

---

## 🎯 Performance Metrics

| Metric | Target | Notes |
|--------|--------|-------|
| TTS Generation | < 5s | Depends on script length |
| Audio Load | < 2s | Depends on connection |
| Seek Response | < 100ms | Near-instant |
| Modal Open | < 50ms | Instant |

---

## 📝 Minimal Working Example

```javascript
function MinimalPlayer() {
  const [open, setOpen] = useState(false);

  const box = {
    videoScript: "Welcome! This is a test.",
    imageUrl: "data:image/png;base64,iVBORw0KG..."
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Play</button>

      {open && (
        <VideoPlayerModal
          box={box}
          onClose={() => setOpen(false)}
          apiKey="sk-proj-..."
          ttsVoice="coral"
        />
      )}
    </>
  );
}
```

---

## 🔐 Security Notes

- **API Key**: Never commit to version control
- **Environment Variables**: Use `.env` file
- **Client-Side**: API key is exposed in browser (acceptable for MVP)
- **Production**: Move TTS generation to backend server

---

## 📚 Related Documentation

- [Full API Documentation](./VIDEO_PLAYER_API.md)
- [OpenAI TTS API Docs](https://platform.openai.com/docs/guides/text-to-speech)
- [React Hooks Reference](https://react.dev/reference/react)

---

## ⚡ Quick Troubleshooting

```javascript
// Audio won't play?
console.log('audioUrl:', audioUrl);        // Should be blob:http...
console.log('audio element:', audioRef.current);
console.log('loading:', loading);          // Should be false
console.log('error:', error);              // Should be empty

// Click play button manually (bypass autoplay policy)

// Still stuck?
// 1. Check Network tab for 4xx/5xx errors
// 2. Verify API key in Headers
// 3. Check browser console for errors
// 4. Try a shorter script (< 100 words)
```

---

## 🎓 Learning Resources

**Video Script Writing:**
- Keep sentences 8-15 words
- Use "you" and "we"
- Describe visual locations
- Connect props to concepts
- Reinforce key facts

**TTS Best Practices:**
- Avoid abbreviations (write out "ACE inhibitors")
- Use simple punctuation
- Short paragraphs for natural pauses
- Test different voices for your content

---

Last Updated: 2025-12-19
Version: 1.0.0
Component: VideoPlayerModal (Lines 498-808)
