# ATFA Website - Image Requirements

## Images Needed

### 1. Hero Section
**File: `phone-mockup.png`**
- A phone mockup showing the ATFA app (preferably the Live Data or Connect page)
- Recommended size: 800x1600px (portrait)
- Format: PNG with transparent background or minimal background
- Should show the app in action

**Background Image (Optional):**
- If you want a background image, add it to the CSS `.hero-background` section
- Recommended: Car dashboard, OBD-II port, or automotive theme
- Format: JPG, size: 1920x1080px

---

### 2. App Screenshots (4 images)
**Files: `screenshot-1.png`, `screenshot-2.png`, `screenshot-3.png`, `screenshot-4.png`**

Suggested screenshots:
1. Connect page - showing device pairing
2. Live Data page - showing gauges and real-time data
3. Diagnostics page - showing health cards and data
4. Settings page - showing customization options

- Recommended size: 1080x2340px (phone aspect ratio)
- Format: PNG
- Can take these directly from your Android emulator or device

---

### 3. Product Image
**File: `dongle.png`**
- Photo of the ATFA OBD-II Bluetooth dongle
- Recommended size: 800x800px
- Format: PNG with transparent or white background
- Professional product shot (front view or 3/4 angle)

---

## How to Add Images

1. Save your images in the `/Website/images/` folder
2. Use the exact filenames mentioned above, or update the HTML accordingly
3. For best results, optimize images before uploading:
   - Use TinyPNG.com or similar for compression
   - Target file size: < 500KB per image

## Alternative: Temporary Placeholders

If you don't have images ready yet:
1. Use placeholder services like:
   - https://placehold.co/800x1600/1E293B/2196F3?text=Phone+Mockup
   - https://via.placeholder.com/1080x2340/1E293B/2196F3?text=Screenshot
2. Or create simple placeholder images with text in any design tool

## Taking Screenshots from the App

### Android (Physical Device):
1. Open the ATFA app
2. Press Power + Volume Down simultaneously
3. Find screenshots in Gallery/Photos
4. Transfer to computer

### Android Studio Emulator:
1. Run the app in emulator
2. Click camera icon in emulator toolbar
3. Screenshots saved in: `~/Library/Android/sdk/screenshots/`

---

## Notes
- All images are currently pointing to the `images/` folder
- The website will work without images (shows placeholders)
- Replace images one by one as they become available
- For hero background, you can also use a gradient (already set up) instead of an image
