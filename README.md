# TechM4India Frontend

India's First Experiential Learning Ecosystem - Frontend Application

## 🚀 Tech Stack

- **React 18** with **TypeScript**
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **GSAP** - Animations
- **Framer Motion** - Motion library
- **Three.js** & **OGL** - 3D graphics

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Backend API running (for authentication and API calls)

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://your-api-url.com/api
```

For production deployment (Vercel), set the environment variable in your Vercel project settings:
- Variable name: `VITE_API_URL`
- Value: Your production API URL

**Note:** If `VITE_API_URL` is not set, the app defaults to `http://localhost:4000/api` (development mode).

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts (Auth)
├── pages/         # Page components
├── utils/         # Utility functions
└── index.css      # Global styles
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Set environment variable `VITE_API_URL` in Vercel dashboard
4. Deploy!

The `vercel.json` is already configured for SPA routing.

### Other Platforms

The build output is in the `dist/` folder. Configure your hosting platform to:
- Serve `index.html` for all routes (SPA routing)
- Set the `VITE_API_URL` environment variable

## 🎨 Features

- ✅ Authentication (Login/Register)
- ✅ Responsive Design
- ✅ Advanced Animations (GSAP, Framer Motion)
- ✅ Multiple Divisions (Schools, Engineering, Solutions, Space)
- ✅ Tech Stack Pages
- ✅ Contact Forms
- ✅ Toast Notifications

## 📝 Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔐 Authentication

The app uses JWT tokens stored in localStorage. Make sure your backend API:
- Has `/api/auth/login` endpoint
- Has `/api/auth/register` endpoint
- Has `/api/auth/me` endpoint for session validation
- Has `/api/auth/logout` endpoint

## 📞 Support

For issues or questions, contact: techm4india@gmail.com

---

Built with ❤️ for India's Innovation Ecosystem

