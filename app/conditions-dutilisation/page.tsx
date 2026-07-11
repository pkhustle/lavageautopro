import { Container } from '../../components/ui/container';
import { Breadcrumbs } from '../../components/ui/breadcrumbs';
import { CONTACT_INFO, SITE_CONFIG } from '../../lib/constants';
import { generateMetadata as buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  title: "Conditions d'utilisation",
  description:
    "Conditions d'utilisation du site de Lavage Auto Pro: usage du site, soumissions, propriété intellectuelle et limitation de responsabilité.",
  path: 'conditions-dutilisation',
});

export default function ConditionsUtilisationPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Accueil', href: '/' },
          { name: "Conditions d'utilisation" },
        ]}
      />
      <section className="bg-white py-16">
        <Container>
          <div className="prose prose-gray mx-auto max-w-3xl">
            <h1>Conditions d&apos;utilisation</h1>
            <p>
              En consultant le site {SITE_CONFIG.url}, vous acceptez les présentes conditions
              d&apos;utilisation. Si vous n&apos;êtes pas d&apos;accord avec celles-ci, veuillez
              ne pas utiliser le site.
            </p>

            <h2>Objet du site</h2>
            <p>
              Ce site présente les services de lavage et de détailing automobile offerts par{' '}
              {SITE_CONFIG.name} et permet de nous transmettre des demandes de renseignements ou
              de soumission.
            </p>

            <h2>Soumissions et tarifs</h2>
            <p>
              Les prix et estimations affichés sur le site sont fournis à titre indicatif
              seulement. Une soumission définitive est établie après évaluation du véhicule et
              confirmation de la disponibilité du service dans votre secteur.
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              Le contenu du site (textes, images, logos et mise en page) appartient à{' '}
              {SITE_CONFIG.name} ou à ses concédants. Toute reproduction ou utilisation sans
              autorisation écrite préalable est interdite.
            </p>

            <h2>Limitation de responsabilité</h2>
            <p>
              Nous nous efforçons de maintenir les renseignements du site exacts et à jour, mais
              nous ne garantissons pas qu&apos;ils soient exempts d&apos;erreurs.{' '}
              {SITE_CONFIG.name} ne peut être tenue responsable des dommages indirects découlant
              de l&apos;utilisation du site.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Les présentes conditions sont régies par les lois applicables au Québec et au
              Canada. Tout litige sera soumis aux tribunaux compétents du district de Québec.
            </p>

            <h2>Nous joindre</h2>
            <p>
              {SITE_CONFIG.name}
              <br />
              {CONTACT_INFO.address}
              <br />
              {CONTACT_INFO.city} ({CONTACT_INFO.province}) {CONTACT_INFO.postalCode}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
