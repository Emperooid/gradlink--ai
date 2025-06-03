# GradLink AI

GradLink AI is an AI-powered academic and career companion platform designed for university students. It helps users analyze their academic performance, explore career paths, discover opportunities, and manage their educational journey—all in one place.

## Features

- **Dashboard:** Overview of CGPA, career suggestions, recent activities, and personalized opportunities.
- **CGPA Analyzer:** Analyze, calculate, and track your CGPA history.
- **Courses:** Manage current and completed courses, view grades, and progress.
- **Careers:** Explore career paths, requirements, and growth statistics.
- **Opportunities:** Find internships, career fairs, and other relevant opportunities.
- **Profile:** Manage your academic profile, achievements, and goals.
- **Settings:** Customize notifications, privacy, and appearance preferences.
- **GradBot:** AI chat assistant for career and academic guidance.

## Tech Stack

- **Next.js** (App Router, Client Components)
- **React** (Hooks, Context)
- **TypeScript**
- **Tailwind CSS** (Custom theme)
- **Radix UI** (Accessible UI primitives)
- **Lucide Icons**
- **Zod** (Form validation)
- **Sonner** (Toasts/Notifications)

## Project Structure

- `/app` — Main application pages (dashboard, profile, chat, etc.)
- `/components` — Reusable UI and feature components
- `/hooks` — Custom React hooks (e.g., mobile detection, toast)
- `/lib` — Utility functions
- `/public` — Static assets
- `/styles` — Global and component styles

## Getting Started

1. **Install dependencies:**
   ```sh
   pnpm install
   ```
2. **Run the development server:**
   ```sh
   pnpm dev
   ```
3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Customization

- Update theme and colors in [`tailwind.config.ts`](tailwind.config.ts).
- Adjust UI components in [`components/`](components/).
- Configure environment variables in `.env.local`.

## License

MIT

---

Made with ❤️ for students by students.