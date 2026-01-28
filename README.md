# Cardora

Create and share beautiful digital business cards with ease.

## Features

- **Create Cards** - Design personalized digital business cards with custom information
- **Share Instantly** - Generate QR codes and shareable links
- **Social Integration** - Share your card directly to Twitter/X
- **Beautiful UI** - Modern, responsive design with crimson gradient theme
- **Secure** - Encrypted card IDs and secure Firebase storage
- **Offline Support** - IndexedDB for local data persistence

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Firebase** - Cloud database and hosting
- **React Hook Form + Zod** - Form validation
- **Axios** - API requests

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
# Create a .env file with your Firebase and API credentials
# See .env.example for required variables

# Start development server
pnpm dev

# Build for production
pnpm build
```

### Environment Variables

Create a `.env` file with:

```env
VITE_APP_BASE_URL=http://localhost:5173
VITE_ENCRYPT_SECRET_KEY=your_secret_key
VITE_IMGBB_API_KEY=your_imgbb_key
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Usage

1. **Create** - Navigate to `/create` and fill in your details
2. **Share** - Generate a shareable link and QR code
3. **Discover** - Browse public cards in the community
4. **Collection** - Manage your saved cards

## Deployment

Deploy to Vercel with one click:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## License

MIT License - feel free to use this project for your own purposes.

## Author

Built with ❤️ by Aman

---

**Cardora** - Your digital identity, simplified.
