'use client';

import { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { LOCATIONS } from '../../lib/constants';
import { CLARITY_EVENTS, trackEvent, trackTag } from '../../lib/analytics';

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  defaultLocation?: string;
}

export function ContactForm({ onSubmit, defaultLocation }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const hasStarted = useRef(false);

  // Fired once, on first interaction with any field. `form_started` minus
  // `lead_form_submitted` is the form abandonment rate.
  const handleFirstFocus = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackEvent(CLARITY_EVENTS.FORM_STARTED);
  };

  const trackSuccess = (data: FormData) => {
    trackTag('lead_service', String(data.get('service') || ''));
    trackTag('lead_city', String(data.get('city') || ''));
    trackEvent(CLARITY_EVENTS.LEAD_FORM_SUBMITTED);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      if (onSubmit) {
        await onSubmit(formData);
        trackSuccess(formData);
        form.reset();
        setFormStatus({
          type: 'success',
          message: 'Message envoyé avec succès!',
        });
      } else {
        // Submit to our API endpoint
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Une erreur est survenue');
        }

        trackSuccess(formData);
        form.reset();
        setFormStatus({
          type: 'success',
          message: 'Message envoyé avec succès!',
        });
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer.';
      trackTag('form_error', message);
      trackEvent(CLARITY_EVENTS.LEAD_FORM_ERROR);
      setFormStatus({
        type: 'error',
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} onFocusCapture={handleFirstFocus} className="space-y-6">
      {formStatus.type && (
        <div
          className={`p-4 rounded-md ${
            formStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          {formStatus.message}
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            Prénom
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Nom
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Téléphone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700"
        >
          Service souhaité
        </label>
        <select
          name="service"
          id="service"
          required
            className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        >
          <option value="">Sélectionnez un service</option>
          <option value="lavage-interieur">Lavage intérieur</option>
          <option value="lavage-exterieur">Lavage extérieur</option>
          <option value="detailing-complet">Détailing complet</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          Ville
        </label>
        <select
          name="city"
          id="city"
          defaultValue={defaultLocation || ""}
          className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        >
          <option value="">Sélectionnez une ville</option>
          {[...LOCATIONS]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
            className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
      </div>

      <Button
      variant="outline"
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
      </Button>
    </form>
  );
}
