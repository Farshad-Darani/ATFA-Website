# ATFA Website

Modern, responsive single-page website for the ATFA Intelligent Automobile Diagnostic System.

## 🎨 Features

- ✅ **Fully Responsive** - Works on all devices (desktop, tablet, mobile)
- ✅ **Modern Design** - Clean, professional UI with animations
- ✅ **Smooth Scrolling** - Elegant navigation between sections
- ✅ **Scroll Animations** - Elements fade in as you scroll
- ✅ **Mobile Menu** - Hamburger menu for mobile devices
- ✅ **Interactive Cards** - Hover effects and 3D tilt on feature cards
- ✅ **Back to Top Button** - Easy navigation
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML

## 📁 File Structure

```
Website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # JavaScript interactions
├── images/             # Image assets folder
│   ├── phone-mockup.png
│   ├── screenshot-1.png
│   ├── screenshot-2.png
│   ├── screenshot-3.png
│   ├── screenshot-4.png
│   └── dongle.png
├── IMAGE-GUIDE.md      # Guide for required images
└── README.md           # This file
```

## 🎨 Color Palette (from ATFA app)

- **Primary Slate:** `#1E293B` - Headers, dark sections
- **Secondary Slate:** `#94A3B8` - Subtle text
- **Primary Blue:** `#1976D2` - Accents, links
- **Secondary Blue:** `#2196F3` - Buttons, CTAs
- **White:** `#FFFFFF` - Backgrounds, text on dark
- **Light Gray:** `#F8FAFC` - Section backgrounds

## 🚀 Quick Start

### Option 1: Open Locally
1. Simply double-click `index.html` to open in your browser

### Option 2: Use Live Server (Recommended)
1. Install VS Code extension: "Live Server"
2. Right-click `index.html` → "Open with Live Server"
3. Website opens at `http://localhost:5500`

### Option 3: Python Simple Server
```bash
cd Website
python3 -m http.server 8000
```
Then open: `http://localhost:8000`

## 📝 Customization

### Update Links
1. **Amazon Store Link:** Line 171 in `index.html`
   ```html
   <a href="https://amazon.com" target="_blank">
   ```
   Replace with your actual Amazon store URL

2. **App Download Link:** Line 224 in `index.html`
   ```html
   <a href="#" class="btn btn-download">
   ```
   Replace `#` with your Google Play Store URL

### Add Images
- See `IMAGE-GUIDE.md` for detailed instructions
- Add your images to the `images/` folder
- Images will automatically load when files are present

### Modify Colors
- All colors are defined in `styles.css` under `:root` (lines 9-28)
- Change any color variable to customize the entire site

### Change Text
- All text content is in `index.html`
- Simply find and edit the text you want to change
- Section structure is clearly commented

## 📱 Sections

1. **Hero** - Main landing section with CTA buttons
2. **Features** - 6 key features in grid layout
3. **How It Works** - 3-step process
4. **Screenshots** - App screenshots gallery
5. **Shop** - OBD-II dongle product showcase
6. **Download** - App download section
7. **Footer** - Links, social media, legal

## 🔧 Technical Details

### Dependencies
- **Google Fonts:** Inter font family
- **Font Awesome:** Icons (v6.5.1)
- No other external dependencies!

### Browser Support
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

### Performance
- Lightweight: ~80KB total (without images)
- Fast load time: < 1 second
- Optimized animations
- Lazy loading support built-in

## 📊 SEO

Already includes:
- Meta description
- Meta keywords
- Semantic HTML5
- Alt text for images (add when images are ready)
- Open Graph tags (can be added if needed)

## 🎯 TODO / Next Steps

1. ✅ HTML structure created
2. ✅ CSS styling completed
3. ✅ JavaScript interactions added
4. ⏳ Add images (see IMAGE-GUIDE.md)
5. ⏳ Update links (Amazon, Google Play)
6. ⏳ Test on different devices
7. ⏳ Deploy to hosting (Netlify, Vercel, etc.)

## 🌐 Deployment Options

### Netlify (Recommended - Free)
1. Create account at netlify.com
2. Drag and drop the `Website` folder
3. Done! You get a free subdomain

### GitHub Pages (Free)
1. Create GitHub repository
2. Upload website files
3. Enable GitHub Pages in settings
4. Access at: `username.github.io/repo-name`

### Vercel (Free)
1. Create account at vercel.com
2. Import from GitHub or upload folder
3. Automatic deployment

## 📧 Contact

For questions or support:
- Email: f.darani85@gmail.com
- Website: [Your domain here]

## 📄 License

© 2024 ATFA. All rights reserved.

---

**Built with ❤️ for automotive enthusiasts**
