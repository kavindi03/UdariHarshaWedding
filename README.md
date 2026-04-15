# 💕 Wedding Invitation Website

A beautiful, modern, and animated wedding invitation website built with Next.js and TypeScript. This digital invitation features an interactive envelope design, countdown timer, RSVP functionality, photo gallery, and social sharing capabilities.

## ✨ Features

- 🎨 **Modern Design**: Beautiful gradient backgrounds and smooth animations
- 💌 **Interactive Envelope**: Click-to-open envelope with wax seal animation
- ⏰ **Countdown Timer**: Real-time countdown to the wedding day
- 📸 **Photo Gallery**: Showcase couple photos and engagement pictures
- 📝 **RSVP System**: Allow guests to confirm their attendance
- 📱 **Responsive Design**: Perfect on both mobile and desktop
- 🎵 **Background Music**: Romantic wedding music player
- 🔗 **Social Sharing**: Easy sharing on WhatsApp and Messenger
- 🎭 **Multiple Events**: Display all wedding events (Mehendi, Sangeet, etc.)

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Customization

### 1. Update Wedding Information

Edit `src/config/wedding-config.ts` to customize:

- Couple names and parents' names
- Wedding date, time, and venue
- Multiple wedding events
- Contact information
- Color themes

### 2. Add Photos

Replace placeholder images in the `public/images/` folder:

- `couple-1.jpg`, `couple-2.jpg`, etc. for couple photos
- `engagement-1.jpg`, `engagement-2.jpg`, etc. for engagement photos

### 3. Add Music

Replace `public/wedding-music.mp3` with your preferred wedding song.

### 4. Customize Colors

Modify the color scheme in the config file:

```typescript
colors: {
  primary: "pink",      // Main theme color
  secondary: "purple",  // Secondary accent
  accent: "rose",       // Highlight color
}
```

## 📁 Project Structure

```
wedding-invitation/
├── src/
│   ├── app/
│   │   └── page.tsx              # Main page component
│   ├── components/
│   │   ├── Envelope.tsx          # Interactive envelope
│   │   ├── WeddingInvitation.tsx # Main invitation
│   │   ├── CountdownTimer.tsx    # Countdown component
│   │   └── MusicPlayer.tsx       # Background music
│   └── config/
│       └── wedding-config.ts     # Wedding configuration
├── public/
│   ├── images/                   # Wedding photos
│   └── wedding-music.mp3         # Background music
└── README.md
```

## 🎨 Design Features

- **Envelope Animation**: Beautiful pink envelope with wax seal that opens when clicked
- **Smooth Transitions**: All elements feature smooth animations using Framer Motion
- **Interactive Elements**: Hover effects, click animations, and micro-interactions
- **Modern UI**: Clean, minimalist design with gradient backgrounds
- **Mobile First**: Fully responsive design optimized for all devices

## 🔧 Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons

## 📱 Mobile Optimization

The website is fully responsive and works perfectly on:

- 📱 Smartphones (iOS & Android)
- 💻 Tablets
- 🖥️ Desktop computers
- 💻 Laptops

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Deploy on Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Deploy on GitHub Pages

1. Build the project: `npm run build`
2. Deploy the `out` folder to GitHub Pages

## 💌 Share Your Invitation

Once deployed, share your wedding invitation using:

- **WhatsApp**: Use the built-in WhatsApp sharing button
- **Messenger**: Use the Facebook Messenger sharing feature
- **Direct Link**: Share the website URL directly

## 🎊 Wedding Events

The invitation supports multiple events:

- Mehendi Ceremony
- Sangeet Night  
- Wedding Ceremony
- Reception Party

Each event can have its own date, time, and venue.

## 💝 RSVP System

Guests can easily RSVP with:

- **Attending**: Confirm they will be present
- **Not Attending**: Decline the invitation
- **Thank You Message**: Automatic response based on selection

## 🎵 Background Music

- Romantic wedding music plays automatically
- Music controls for play/pause
- Respects browser autoplay policies
- Loop functionality for continuous playback

## 📸 Photo Gallery

- **Couple Photos**: Beautiful pictures of the couple
- **Engagement Photos**: Special moments from the engagement
- **Expandable Gallery**: Click to view/hide photos
- **Smooth Animations**: Elegant photo transitions

## 🎨 Customization Tips

1. **Color Theme**: Change the gradient colors to match your wedding theme
2. **Fonts**: Modify font families in `tailwind.config.js`
3. **Animations**: Adjust animation speeds and effects
4. **Layout**: Reorganize sections based on your preferences
5. **Content**: Update all text to match your wedding details

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Created with ❤️ for Kavindi's Wedding Celebration 🎉
