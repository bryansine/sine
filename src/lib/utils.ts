import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navlinks = ['case studies', 'contact']

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