import { IconCloud } from "../ui/IconCloud";

const slugs = [
  "React",
  "Figma",
  "JavaScript",
  "Git",
  "tailwindcss",
  "Vercel",
  "TypeScript",
  "GSAP",
  "HTML5",
  "GitHub",
  "Framer",
  "CSS",
  "Laravel",

  "GSAP",
  "TypeScript",
  "CSS",
  "React",
  "refinedgithub",
  "HTML5",
  "Framer",
  "JavaScript",
  "tailwindcss",
  "Figma",
  "vercel",
  "Git",
  "Laravel",
];

export function SkillCloud() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex items-center sm:ml-10 justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
