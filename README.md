🎉 Primal Waitlist

A simple, elegant waitlist application built with Next.js 13 (App Router), styled with Tailwind CSS, and powered by EmailJS for capturing user emails.
This project is designed for our upcoming cakes, pastries & flowers platform — letting early users join and get notified at launch.

🚀 Getting Started
1. Clone the repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

2. Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install

3. Configure environment

Create a .env.local file in the project root and add your EmailJS keys:

NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key


These values come from your EmailJS dashboard
.

4. Run the development server
npm run dev


Now open http://localhost:3000
 🎂🌸

✨ Features

📧 Waitlist Form – Collects user emails via EmailJS

✅ Validation – Regex validation with error states

🎨 Styling – Tailwind CSS with responsive design

⚡ Next.js 13 – Built with the App Router (app/ directory)

🚀 Ready to Deploy – Deploy easily to Vercel

📂 Project Structure
app/
 ├── page.tsx         # Main entry page
 ├── components/      
 │    ├── Nav.tsx     # Navigation
 │    ├── Hero.tsx    # Hero section
 │    ├── Main.tsx    # Content / Features
 │    ├── Outro.tsx   # Outro + wrapper
 │    └── WaitlistForm.tsx # Client-side waitlist form (EmailJS)
public/               # Static assets
constants/            # EmailJS constants

📬 Email Flow

User enters email

Email is validated (red border + error message if invalid)

EmailJS sends:

Welcome email to user 🎉

(Optional) Notification email to admin

🔧 Learn More

Next.js Docs

Tailwind CSS Docs

EmailJS Docs

🚀 Deploy

Deploy easily with Vercel
:

vercel

📜 License

MIT License © 2025 Flacko.
