# Heroic Logo Generator

An AI-powered logo generation tool built with Next.js that helps you create unique and professional logos for your brand.

## 🌟 Features

- AI-powered logo generation
- Real-time logo customization
- Modern and responsive UI
- User authentication with Clerk
- Google's Generative AI integration
- Dark/Light theme support

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 19
- **Styling**: TailwindCSS, Tailwind Merge, Class Variance Authority
- **Authentication**: Clerk
- **AI Integration**: Google Generative AI, Replicate
- **Image Processing**: Sharp
- **UI Components**: Radix UI, Lucide React
- **Notifications**: Sonner
- **Theme**: Next-themes

## 🛠️ Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd heroic-logo-generator
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file with the following variables:
```env
NEXT_PUBLIC_GEMINI_API_KEY=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_FIREBASE_API_KEY=

HUGGING_FACE_API_KEY=

REPLICATE_API_TOKEN=
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

- `/app` - Next.js app router and main components
- `/components` - Reusable UI components
- `/configs` - Configuration files
- `/lib` - Utility functions and helpers
- `/public` - Static assets

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Special Thanks

Special thanks to [TubeGuruji](https://www.youtube.com/@tubeguruji) for the inspiration and guidance in building this project.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
