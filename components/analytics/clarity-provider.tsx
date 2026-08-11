'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SERVICES, SITE_CONFIG } from '../../lib/constants';
import { CLARITY_EVENTS, initClarity, trackEvent, trackTag } from '../../lib/analytics';

const STATIC_PAGE_TYPES: Record<string, string> = {
  '/': 'home',
  '/contact': 'contact',
  '/tarifs': 'tarifs',
  '/services': 'services',
  '/zones-desservies': 'zones',
  '/conditions-dutilisation': 'legal',
  '/politique-de-confidentialite': 'legal',
};

const SERVICE_IDS = new Set(SERVICES.map((service) => service.id));

const CANONICAL_HOST = new URL(SITE_CONFIG.url).host;

// Most CTAs are written as absolute URLs (`${SITE_CONFIG.url}/contact`) rather than
// relative paths, so they carry the production host even on localhost and preview
// deploys. Accept the canonical host alongside the current one, otherwise those CTAs
// would only ever be tracked in production.
function isContactLink(link: HTMLAnchorElement) {
  try {
    const destination = new URL(link.href, window.location.origin);
    const sameSite =
      destination.host === window.location.host || destination.host === CANONICAL_HOST;
    return sameSite && destination.pathname === '/contact';
  } catch {
    return false;
  }
}

/**
 * Mounted once in the root layout. Renders nothing.
 *
 * Besides booting Clarity, it attaches a single delegated click listener rather
 * than an onClick per CTA: the ~12 CTA links and both tel: links live in server
 * components, so this keeps them untouched.
 */
export function ClarityProvider() {
  const pathname = usePathname();

  useEffect(() => {
    initClarity();
  }, []);

  // Session tags describing the current page, refreshed on every route change.
  useEffect(() => {
    if (!pathname) return;

    const segments = pathname.split('/').filter(Boolean);
    const staticType = STATIC_PAGE_TYPES[pathname];

    if (staticType) {
      trackTag('page_type', staticType);
      return;
    }

    if (segments.length === 1 && SERVICE_IDS.has(segments[0])) {
      trackTag('page_type', 'service');
      trackTag('service', segments[0]);
    } else if (segments.length === 2 && SERVICE_IDS.has(segments[0])) {
      trackTag('page_type', 'city');
      trackTag('service', segments[0]);
      trackTag('city', segments[1]);
    } else {
      trackTag('page_type', 'other');
    }
  }, [pathname]);

  // Delegated tracking for phone links and every CTA pointing at /contact.
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      if (href.startsWith('tel:')) {
        trackTag('phone_click_source', window.location.pathname);
        trackEvent(CLARITY_EVENTS.PHONE_CLICK);
        return;
      }

      if (isContactLink(link)) {
        trackTag('cta_source', window.location.pathname);
        trackTag('cta_label', (link.textContent || '').trim().slice(0, 50));
        trackEvent(CLARITY_EVENTS.CONTACT_CTA_CLICK);
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
}
