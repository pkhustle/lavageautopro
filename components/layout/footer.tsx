import Link from 'next/link';
import { Container } from '../ui/container';
import { SERVICES, CONTACT_INFO, SITE_CONFIG } from '../../lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  type FooterSection = {
    title: string;
    links?: { label: string; href: string; }[];
    items?: string[];
  };

  const footerSections: FooterSection[] = [
    {
      title: 'Services',
      links: [
        ...SERVICES.map(service => ({
          label: service.name,
          href: `${SITE_CONFIG.url}/${service.id}`,
        })),
        {
          label: 'Zones desservies',
          href: `${SITE_CONFIG.url}/zones-desservies`,
        },
      ],
    },
    {
      title: 'Horaires',
      items: [
        `Lundi: ${CONTACT_INFO.hours.monday}`,
        `Mardi: ${CONTACT_INFO.hours.tuesday}`,
        `Mercredi: ${CONTACT_INFO.hours.wednesday}`,
        `Jeudi: ${CONTACT_INFO.hours.thursday}`,
        `Vendredi: ${CONTACT_INFO.hours.friday}`,
        `Samedi: ${CONTACT_INFO.hours.saturday}`,
        `Dimanche: ${CONTACT_INFO.hours.sunday}`,
      ],
    },
    {
      title: 'Contact',
      items: [
        CONTACT_INFO.address,
        `${CONTACT_INFO.city}, ${CONTACT_INFO.province}`,
        CONTACT_INFO.postalCode,
      ],
    },
  ];

  return (
    <footer className="mt-auto border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black text-white">
      <Container className="py-16 md:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href={`${SITE_CONFIG.url}/`} className="flex items-center">
              <span className="text-xl font-bold text-white">
                <span className="text-primary">Lavage</span> Auto <span className="text-primary">Pro</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-300">
              {SITE_CONFIG.description}
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title} className="hover-lift">
              <h3 className="text-sm font-bold text-primary">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links ? (
                  section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                      >
                        <svg className="mr-2 h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        {link.label}
                      </Link>
                    </li>
                  ))
                ) : section.items ? (
                  section.items.map((item) => (
                    <li key={item} className="text-sm text-gray-300 flex items-start">
                      <svg className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))
                ) : null}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} <span className="font-medium text-primary">{SITE_CONFIG.name}</span>. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link href="/politique-de-confidentialite" className="text-sm text-gray-400 hover:text-primary transition-colors">Politique de confidentialité</Link>
              <Link href="/conditions-dutilisation" className="text-sm text-gray-400 hover:text-primary transition-colors">Conditions d&apos;utilisation</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
