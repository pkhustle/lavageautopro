import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('fr-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format(price);
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function generateMetaTitle(service: string, location?: string) {
  if (location) {
    return `${service} à ${location} | Service professionnel`;
  }
  return `${service} | Service professionnel`;
}

export function generateMetaDescription(service: string, location?: string) {
  if (location) {
    return `Service professionnel de ${service.toLowerCase()} à ${location}. Expertise locale, satisfaction garantie. Réservez maintenant!`;
  }
  return `Service professionnel de ${service.toLowerCase()}. Expertise et qualité garanties. Contactez-nous dès maintenant!`;
}
