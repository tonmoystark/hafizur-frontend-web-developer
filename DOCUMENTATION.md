# 💼 Portfolio - Hafizur Tonmoy

Welcome to my personal portfolio repository! This project showcases my skills, projects, and experience as a frontend web developer. It's built with modern web technologies and features a clean, responsive design with smooth animations.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio.vercel.app) <!-- Replace with your Vercel URL after deployment -->

## ✨ Features

- **Fully Responsive** — Works seamlessly on all devices.
- **Smooth Animations** — Powered by Framer Motion, GSAP, and custom CSS.
- **Interactive UI Components** — Includes a magic card, lens effect, icon cloud, and confetti fireworks.
- **Contact Form** — Functional form using EmailJS with success feedback and confetti.
- **Project Showcase** — Displays projects with zoom lens effect and links to live demos and GitHub.
- **Skills Section** — Visual proficiency bars and an interactive icon cloud.
- **Mobile-Friendly Navigation** — Sidebar with animated social links.

## 🛠️ Tech Stack

- **Framework:** [React](https://reactjs.org/) (with TypeScript)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** Framer Motion, GSAP, Custom CSS
- **Email Service:** [EmailJS](https://www.emailjs.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## 📁 Project Structure

src/
├── assets/ # Images and static assets (webp format)
├── components/
│ ├── containers/ # Main page sections (About, Contact, Skills, etc.)
│ ├── others/ # Reusable buttons and small components
│ └── ui/ # Custom UI components (MagicCard, Lens, IconCloud, etc.)
├── App.tsx # Main app layout with routing/sections
└── main.tsx # Entry point

## 🔧 Local Development Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/tonmoystark/your-portfolio.git
   cd your-portfolio

   Install dependencies
   npm install

   Set up environment variables
   Create a .env file in the root and add your EmailJS credentials:

   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

Run the development server
npm run dev

Visit http://localhost:5173 to view the project.

Build for production
npm run build

📬 Contact
Feel free to reach out via the contact form on the website or connect with me on social media.

Portfolio: https://your-portfolio.vercel.app

GitHub: @tonmoystark

Email: your-email@example.com

📄 License
This project is open source and available under the MIT License.
