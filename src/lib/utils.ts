import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navlinks = ['case studies', 'about', 'contact']

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  } else {
      console.warn(`Section "${sectionId}" not found.`);
  }
};

/* HANDLING EMAIL */
export const handleEmailClick = () => {
  window.location.href = 'mailto:developedbyrobbie@gmail.com';
};

export const handleOpenPdf = () => {
  window.open('robert_muchiri_CV.pdf', '_blank');
};

export const tech = [
  {
    title: 'languages',
    items: ['Javascript/Typescript', 'Python', 'C', 'SQL']
  },
  {
    title: 'frameworks',
    items: ['React', 'Node Js', 'Next Js', 'Express']
  },
  {
    title: 'database',
    items: ['PostgreSQL', 'MongoDB', 'Redis']
  },
]