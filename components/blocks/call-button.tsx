'use client';

import { CONTACT_INFO } from '../../lib/constants';
import { CLARITY_EVENTS, trackEvent } from '../../lib/analytics';

interface CallButtonProps {
  className?: string;
  children?: React.ReactNode;
  /** Shown before the number, e.g. "Appelez 24/7". Optional. */
  label?: string;
}

/**
 * Tap-to-call link. Renders a real tel: anchor (works with no JS) and fires the
 * PHONE_CLICK analytics event on tap so we can measure call intent from each
 * landing page.
 */
export function CallButton({ className, children, label }: CallButtonProps) {
  return (
    <a
      href={`tel:${CONTACT_INFO.phoneE164}`}
      onClick={() => trackEvent(CLARITY_EVENTS.PHONE_CLICK)}
      className={className}
      aria-label={`Appeler le ${CONTACT_INFO.phone}`}
    >
      {children ?? (
        <>
          <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>
            {label ? <span className="font-normal opacity-90">{label} </span> : null}
            {CONTACT_INFO.phone}
          </span>
        </>
      )}
    </a>
  );
}
