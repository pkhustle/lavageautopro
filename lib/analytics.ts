import Clarity from '@microsoft/clarity';
import { CLARITY_PROJECT_ID } from './constants';

/**
 * Microsoft Clarity wrapper. Every call is guarded so that a blocked, failed or
 * not-yet-loaded Clarity tag can never throw inside a component — in particular
 * inside the contact form submit handler, where a throw would cost us a lead.
 */

export const CLARITY_EVENTS = {
  FORM_STARTED: 'form_started',
  LEAD_FORM_SUBMITTED: 'lead_form_submitted',
  LEAD_FORM_ERROR: 'lead_form_error',
  PHONE_CLICK: 'phone_click',
  CONTACT_CTA_CLICK: 'contact_cta_click',
} as const;

export type ClarityEvent = (typeof CLARITY_EVENTS)[keyof typeof CLARITY_EVENTS];

let initialized = false;

export function initClarity() {
  // reactStrictMode double-invokes effects in dev; init must only run once.
  if (typeof window === 'undefined' || initialized) return;
  initialized = true;

  try {
    Clarity.init(CLARITY_PROJECT_ID);
    Clarity.consentV2({ ad_Storage: 'denied', analytics_Storage: 'granted' });
  } catch {
    // Clarity unavailable — analytics is best-effort, never fatal.
  }
}

export function trackEvent(name: ClarityEvent) {
  if (typeof window === 'undefined') return;

  try {
    Clarity.event(name);
  } catch {
    // no-op
  }
}

export function trackTag(key: string, value: string) {
  if (typeof window === 'undefined' || !value) return;

  try {
    Clarity.setTag(key, value);
  } catch {
    // no-op
  }
}
