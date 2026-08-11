import Image from 'next/image';
import { Container } from '../ui/container';
import { CallButton } from './call-button';
import { LeadForm } from './lead-form';

interface LeadHeroProps {
  /** Keyword-matched H1 (e.g. "Lavage auto intérieur à Lévis"). */
  headline: string;
  /** Supporting sentence under the headline. */
  subhead: string;
  /** Above-the-fold background photo. */
  backgroundImage?: string;
  /** Preselected service id for the lead form. */
  defaultService?: string;
  /** City id sent with the lead. */
  defaultLocation?: string;
}

const trustPoints = [
  'Service en atelier ou à domicile',
  'Équipe locale de Québec',
  'Devis gratuit, sans engagement',
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.364 1.118l1.287 3.958c.3.922-.755 1.688-1.54 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.784.57-1.838-.196-1.539-1.118l1.286-3.958a1 1 0 00-.363-1.118L2.075 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.286-3.958z" />
        </svg>
      ))}
    </div>
  );
}

/**
 * Above-the-fold hero for every landing page, carrying the 5 elements a
 * home-service page needs before the fold: tap-to-call phone, a keyword H1,
 * a real photo, social proof, and a 3-field lead form.
 */
export function LeadHero({
  headline,
  subhead,
  backgroundImage = '/images/auto-2179220_1280.jpg',
  defaultService,
  defaultLocation,
}: LeadHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Real photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Lavage et détailing automobile à Québec"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <Container className="relative z-10">
        {/* Tap-to-call bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-white/80">
            Lavage Auto Pro
          </span>
          <CallButton className="group inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 text-white ring-1 ring-white/30 backdrop-blur transition-colors hover:bg-white/20">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] font-medium uppercase tracking-wide text-white/80">
                Appelez 7j/7
              </span>
              <span className="text-2xl font-extrabold sm:text-3xl">(581) 503-2505</span>
            </span>
          </CallButton>
        </div>

        <div className="grid items-start gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          {/* Left: headline, social proof, trust, tap-to-call */}
          <div className="text-white">
            <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl [text-shadow:_0_1px_12px_rgb(0_0_0_/_25%)]">
              {headline}
            </h1>
            <p className="mt-4 text-balance text-lg leading-8 text-white/90 [text-shadow:_0_1px_8px_rgb(0_0_0_/_25%)]">
              {subhead}
            </p>

            {/* Social proof — generic trust signal, no fabricated numbers */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-lg bg-white/10 px-4 py-2 ring-1 ring-white/20">
              <Stars />
              <span className="text-sm font-medium text-white">
                Satisfaction garantie · Service local à Québec
              </span>
            </div>

            <ul className="mt-6 space-y-2">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-white/90">
                  <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <CallButton className="mt-8 inline-flex items-center gap-3 rounded-md bg-primary px-6 py-4 text-white shadow-lg transition-colors hover:bg-primary/90">
              <svg className="h-6 w-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-xs font-medium uppercase tracking-wide text-white/80">
                  Appelez maintenant
                </span>
                <span className="text-2xl font-extrabold">(581) 503-2505</span>
              </span>
            </CallButton>
          </div>

          {/* Right: 3-field lead form */}
          <div className="rounded-xl bg-white p-6 shadow-2xl sm:p-8">
            <h2 className="text-xl font-bold text-gray-900">Obtenez votre soumission</h2>
            <p className="mt-1 text-sm text-gray-600">
              Laissez vos coordonnées, on vous rappelle rapidement.
            </p>
            <div className="mt-5">
              <LeadForm defaultService={defaultService} defaultLocation={defaultLocation} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
