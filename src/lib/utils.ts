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
  window.location.href = 'mailto:bryansine1738@gmail.com';
};

export const handleOpenPdf = () => {
  window.open('Resume.pdf', '_blank');
};

export const tech = [
  {
    title: 'languages',
    items: ['python', 'Javascript', 'C']
  },
  {
    title: 'frameworks',
    items: ['Django', 'React', 'Flask', 'FastAPI']
  },
  {
    title: 'database',
    items: ['PostgreSQL','Redis', 'mySQL', 'MongoDB', ]
  },
]