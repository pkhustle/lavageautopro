'use client';

import { useRef, useState } from 'react';
import { LOCATIONS, SERVICES } from '../../lib/constants';
import { CLARITY_EVENTS, trackEvent, trackTag } from '../../lib/analytics';

interface LeadFormProps {
  /** Preselected service id (e.g. on a service landing page). */
  defaultService?: string;
  /** Preselected city id (e.g. on a city landing page). */
  defaultLocation?: string;
}

const inputClass =
  'form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary';
const selectClass =
  'form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary';

/**
 * Above-the-fold lead form. Collects the full set of fields (two per line where
 * it fits) while keeping only name, phone and service required so the barrier to
 * submit stays low. Posts to /api/contact, which accepts partial leads.
 */
export function LeadForm({ defaultService, defaultLocation }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });
  const hasStarted = useRef(false);

  const handleFirstFocus = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackEvent(CLARITY_EVENTS.FORM_STARTED);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', { method: 'POST', body: formData });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Une erreur est survenue');

      trackTag('lead_service', String(formData.get('service') || ''));
      trackTag('lead_city', String(formData.get('city') || ''));
      trackEvent(CLARITY_EVENTS.LEAD_FORM_SUBMITTED);
      form.reset();
      setStatus({ type: 'success', message: 'Merci! Nous vous rappelons rapidement.' });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer.';
      trackTag('form_error', message);
      trackEvent(CLARITY_EVENTS.LEAD_FORM_ERROR);
      setStatus({ type: 'error', message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} onFocusCapture={handleFirstFocus} className="space-y-3">
      {status.type && (
        <div
          className={`rounded-md p-3 text-sm ${
            status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-firstName" className="mb-1 block text-sm font-medium text-gray-700">
            Prénom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lead-firstName"
            name="firstName"
            required
            autoComplete="given-name"
            placeholder="Prénom"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lead-lastName" className="mb-1 block text-sm font-medium text-gray-700">
            Nom
          </label>
          <input
            type="text"
            id="lead-lastName"
            name="lastName"
            autoComplete="family-name"
            placeholder="Nom"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="lead-phone" className="mb-1 block text-sm font-medium text-gray-700">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="lead-phone"
            name="phone"
            required
            autoComplete="tel"
            placeholder="(581) 000-0000"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lead-email" className="mb-1 block text-sm font-medium text-gray-700">
            Courriel
          </label>
          <input
            type="email"
            id="lead-email"
            name="email"
            autoComplete="email"
            placeholder="courriel@exemple.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="lead-service" className="mb-1 block text-sm font-medium text-gray-700">
            Service souhaité <span className="text-red-500">*</span>
          </label>
          <select
            id="lead-service"
            name="service"
            required
            defaultValue={defaultService || ''}
            className={selectClass}
          >
            <option value="">Sélectionnez…</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
            <option value="autre">Autre / je ne sais pas</option>
          </select>
        </div>
        <div>
          <label htmlFor="lead-city" className="mb-1 block text-sm font-medium text-gray-700">
            Ville
          </label>
          <select
            id="lead-city"
            name="city"
            defaultValue={defaultLocation || ''}
            className={selectClass}
          >
            <option value="">Sélectionnez…</option>
            {[...LOCATIONS]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="lead-message" className="mb-1 block text-sm font-medium text-gray-700">
            Message (optionnel)
          </label>
          <textarea
            id="lead-message"
            name="message"
            rows={3}
            placeholder="Type de véhicule, disponibilités, précisions…"
            className="form-textarea block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-green-600 px-4 py-3.5 text-center text-lg font-bold text-white shadow-md transition-colors hover:bg-green-700 disabled:opacity-60"
      >
        {isSubmitting ? 'Envoi…' : 'Obtenir ma soumission'}
      </button>

      <p className="text-center text-xs text-gray-500">
        Réponse rapide · Devis gratuit · Sans engagement
      </p>
    </form>
  );
}
