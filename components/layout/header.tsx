'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '../ui/container';
import { SERVICES, SITE_CONFIG } from '../../lib/constants';
import { cn } from '../../lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigation = [
    { name: 'Acceuil', href: `${SITE_CONFIG.url}/` },
    { name: 'Services', href: '#', dropdown: true },
    { name: 'Nous contacter', href: `${SITE_CONFIG.url}/contact` },
    { name: 'FAQ', href: `${SITE_CONFIG.url}/#faq` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black text-white shadow-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href={`${SITE_CONFIG.url}/`} className="flex items-center">
              <span className="text-xl font-bold text-white">
                <span className="text-primary">Lavage</span> Auto <span className="text-primary">Pro</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => 
              item.dropdown ? (
                <div key={item.name} className="relative inline-block" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={cn(
                      'text-sm font-medium transition-all duration-300 hover:text-primary flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-900',
                      (pathname.startsWith('/lavage') || pathname.startsWith('/nettoyage') || pathname.startsWith('/lave'))
                        ? 'text-primary bg-gray-900'
                        : 'text-white'
                    )}
                  >
                    {item.name}
                    <svg
                      className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div 
                      className="absolute left-0 mt-1 w-72 rounded-md bg-gray-900 shadow-lg ring-1 ring-primary ring-opacity-20 z-50"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <div className="py-1" role="menu">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            href={`${SITE_CONFIG.url}/${service.id}`}
                            className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-primary transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-all duration-300 hover:text-primary px-3 py-2 rounded-md',
                    pathname === item.href
                      ? 'text-primary bg-gray-900'
                      : 'text-white hover:bg-gray-900'
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href={`${SITE_CONFIG.url}/contact`}
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-white shadow-sm hover:shadow-md hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Réserver <span className="ml-1" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => 
                item.dropdown ? (
                  <div key={item.name} className="px-3 py-2">
                    <div className="font-medium text-white">{item.name}</div>
                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        href={`${SITE_CONFIG.url}/${service.id}`}
                        className="block px-3 py-2 text-sm text-white hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block px-3 py-2 text-base font-medium',
                      pathname === item.href
                        ? 'text-primary'
                        : 'text-white hover:text-primary'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
