import { Container } from '../../components/ui/container';
import { ContactForm } from '../../components/blocks/contact-form';
import { CONTACT_INFO, SITE_CONFIG } from '../../lib/constants';
import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata({
  title: 'Contact | Réservez votre service de lavage auto',
  description: 'Contactez-nous pour réserver votre service de lavage auto professionnel. Service rapide et professionnel, satisfaction garantie.',
  keywords: 'contact, réservation, lavage auto, nettoyage voiture, service automobile',
});

function BusinessHours() {
  return (
    <dl className="space-y-2 text-sm">
      <div className="flex justify-between">
        <dt>Lundi</dt>
        <dd>{CONTACT_INFO.hours.monday}</dd>
      </div>
      <div className="flex justify-between">
        <dt>Mardi</dt>
        <dd>{CONTACT_INFO.hours.tuesday}</dd>
      </div>
      <div className="flex justify-between">
        <dt>Mercredi</dt>
        <dd>{CONTACT_INFO.hours.wednesday}</dd>
      </div>
      <div className="flex justify-between">
        <dt>Jeudi</dt>
        <dd>{CONTACT_INFO.hours.thursday}</dd>
      </div>
      <div className="flex justify-between">
        <dt>Vendredi</dt>
        <dd>{CONTACT_INFO.hours.friday}</dd>
      </div>
      <div className="flex justify-between">
        <dt>Samedi</dt>
        <dd>{CONTACT_INFO.hours.saturday}</dd>
      </div>
      <div className="flex justify-between">
        <dt>Dimanche</dt>
        <dd>{CONTACT_INFO.hours.sunday}</dd>
      </div>
    </dl>
  );
}

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { location?: string };
}) {
  const defaultLocation = searchParams?.location || "";
  return (
    <>
      <Container className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contactez-nous
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Nous sommes là pour répondre à vos questions et vous offrir le meilleur service possible.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-2">
          <div>
            <div className="rounded-lg border bg-white p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Envoyez-nous un message
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>
              <div className="mt-6">
                <ContactForm defaultLocation={defaultLocation} />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-lg border bg-white p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Informations de contact
              </h2>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Adresse</h3>
                  <address className="mt-2 not-italic text-sm text-gray-600">
                    {CONTACT_INFO.address}
                    <br />
                    {CONTACT_INFO.city}, {CONTACT_INFO.province}
                    <br />
                    {CONTACT_INFO.postalCode}
                  </address>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Heures d&apos;ouverture
                  </h3>
                  <div className="mt-2">
                    <BusinessHours />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Notre engagement
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Nous nous engageons à fournir un service de qualité supérieure et une satisfaction garantie. Notre équipe professionnelle est là pour prendre soin de votre véhicule comme s&apos;il s&apos;agissait du nôtre.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
