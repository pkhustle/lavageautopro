import { Container } from '../../components/ui/container';
import { Breadcrumbs } from '../../components/ui/breadcrumbs';
import { CONTACT_INFO, SITE_CONFIG } from '../../lib/constants';
import { generateMetadata as buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité de Lavage Auto Pro: renseignements recueillis, utilisation, conservation et vos droits.',
  path: 'politique-de-confidentialite',
});

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Accueil', href: '/' },
          { name: 'Politique de confidentialité' },
        ]}
      />
      <section className="bg-white py-16">
        <Container>
          <div className="prose prose-gray mx-auto max-w-3xl">
            <h1>Politique de confidentialité</h1>
            <p>
              {SITE_CONFIG.name} accorde une grande importance à la protection de vos
              renseignements personnels. La présente politique décrit quels renseignements nous
              recueillons par l&apos;entremise du site {SITE_CONFIG.url}, comment nous les
              utilisons et quels sont vos droits.
            </p>

            <h2>Renseignements recueillis</h2>
            <p>
              Lorsque vous remplissez notre formulaire de contact, nous recueillons les
              renseignements suivants: prénom et nom, adresse courriel, numéro de téléphone,
              ville, service demandé et le contenu de votre message.
            </p>
            <p>
              Nous ne recueillons aucun renseignement personnel à votre insu lors de la simple
              consultation du site.
            </p>

            <h2>Utilisation des renseignements</h2>
            <ul>
              <li>Répondre à vos demandes de renseignements et de soumission;</li>
              <li>Planifier et fournir les services demandés;</li>
              <li>
                Vous transmettre, avec votre consentement, des communications au sujet de nos
                services. Vous pouvez retirer ce consentement à tout moment via le lien de
                désabonnement présent dans chaque courriel.
              </li>
            </ul>

            <h2>Communication à des tiers</h2>
            <p>
              Vos renseignements ne sont ni vendus ni loués. Pour l&apos;envoi de nos
              communications, votre adresse courriel peut être traitée par notre fournisseur
              d&apos;infolettre (MailerLite), qui agit comme prestataire de services et est tenu
              de protéger vos renseignements.
            </p>

            <h2>Conservation et sécurité</h2>
            <p>
              Nous conservons vos renseignements uniquement le temps nécessaire aux fins décrites
              ci-dessus ou tel que requis par la loi. Des mesures raisonnables sont mises en place
              pour protéger vos renseignements contre l&apos;accès, l&apos;utilisation ou la
              divulgation non autorisés.
            </p>

            <h2>Vos droits</h2>
            <p>
              Conformément aux lois applicables au Québec, vous pouvez demander l&apos;accès aux
              renseignements personnels que nous détenons à votre sujet, en demander la
              rectification ou la suppression, et retirer votre consentement à leur utilisation.
              Pour exercer ces droits, contactez-nous par l&apos;entremise de notre{' '}
              <a href="/contact">page de contact</a> ou par la poste à l&apos;adresse ci-dessous.
            </p>

            <h2>Responsable de la protection des renseignements personnels</h2>
            <p>
              {SITE_CONFIG.name}
              <br />
              {CONTACT_INFO.address}
              <br />
              {CONTACT_INFO.city} ({CONTACT_INFO.province}) {CONTACT_INFO.postalCode}
            </p>

            <h2>Modifications</h2>
            <p>
              Nous pouvons mettre à jour la présente politique au besoin. La version en vigueur
              est celle publiée sur cette page.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
