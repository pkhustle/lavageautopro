import { PriceEstimator } from '../../components/blocks/price-estimator';
import { Container } from '../../components/ui/container';
import { Button } from '../../components/ui/button';
import { Breadcrumbs } from '../../components/ui/breadcrumbs';
import { SITE_CONFIG } from '../../lib/constants';
import { generateBreadcrumbSchema } from '../../lib/seo';
import Link from 'next/link';

export const metadata = {
  title: `Prix lavage auto: tarifs intérieur et extérieur | ${SITE_CONFIG.name}`,
  description:
    'Combien coûte un lavage auto? Tarifs clairs pour le lavage à la main, le nettoyage intérieur et le service à domicile: de 80$ à 150$ selon le véhicule. Devis gratuit.',
  keywords:
    'prix lavage auto, lavage auto à la main prix, prix nettoyage intérieur voiture, lavage auto à domicile prix, tarif lave-auto',
  alternates: {
    canonical: `${SITE_CONFIG.url}/tarifs`,
  },
  openGraph: {
    title: `Prix lavage auto: tarifs intérieur et extérieur | ${SITE_CONFIG.name}`,
    description:
      'Tarifs clairs pour le lavage à la main, le nettoyage intérieur et le service à domicile: de 80$ à 150$ selon le véhicule.',
    url: `${SITE_CONFIG.url}/tarifs`,
    images: [
      {
        url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
        width: 1280,
        height: 853,
        alt: SITE_CONFIG.name,
      },
    ],
  },
};

const BASE_PRICES = [
  { vehicle: 'Compacte', price: '80$', example: 'Honda Civic, Toyota Corolla' },
  { vehicle: 'Berline', price: '100$', example: 'Toyota Camry, Honda Accord' },
  { vehicle: 'SUV', price: '120$', example: 'Toyota RAV4, Honda CR-V' },
  { vehicle: 'Fourgonnette', price: '150$', example: 'Dodge Grand Caravan, Toyota Sienna' },
];

const ADDONS = [
  { name: 'Lavage de base extérieur', price: 'Inclus' },
  { name: 'Lavage premium (cirage et finition)', price: '+30$' },
  { name: 'Nettoyage intérieur complet', price: '+50$' },
  { name: 'Protection céramique', price: '+100$' },
];

const PRICING_FAQS = [
  {
    question: 'Combien coûte un lavage auto à la main?',
    answer:
      "Le prix d'un lavage auto à la main commence à 80$ pour une voiture compacte, 100$ pour une berline, 120$ pour un SUV et 150$ pour une fourgonnette. Ce tarif inclut le lavage extérieur complet à la main avec rinçage et séchage sans traces.",
  },
  {
    question: 'Quel est le prix d’un nettoyage intérieur de voiture?',
    answer:
      "Le nettoyage intérieur complet s'ajoute au forfait de base pour 50$. Il comprend l'aspiration complète, le nettoyage des tapis, des sièges, des plastiques et des vitres intérieures, ainsi que la déodorisation de l'habitacle.",
  },
  {
    question: 'Le lavage auto à domicile coûte-t-il plus cher?',
    answer:
      "Non, nos tarifs de base restent les mêmes pour le service à domicile dans notre zone de couverture régulière. Notre unité mobile se déplace chez vous, à la maison ou au travail, sans frais supplémentaires dans la région de Québec. Des frais de déplacement peuvent s'appliquer pour les secteurs plus éloignés: ils sont toujours confirmés avant le rendez-vous.",
  },
  {
    question: 'Pourquoi le prix varie-t-il selon le véhicule?',
    answer:
      "Plus le véhicule est grand, plus la surface à laver et le temps de travail sont importants. Une fourgonnette demande environ deux fois plus de temps qu'une compacte, ce qui explique la différence de tarif. L'état du véhicule (poils d'animaux, taches importantes) peut aussi influencer le prix final, toujours confirmé avant de commencer.",
  },
  {
    question: 'Comment obtenir un prix exact pour mon véhicule?',
    answer:
      "Utilisez notre estimateur en ligne pour obtenir un prix indicatif immédiat, puis contactez-nous pour un devis gratuit et sans engagement. Le prix est confirmé avant le début du service: aucune surprise à la facturation.",
  },
];

export default function TarifsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: PRICING_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumbSchema([
            { name: 'Accueil', url: SITE_CONFIG.url },
            { name: 'Tarifs', url: `${SITE_CONFIG.url}/tarifs` },
          ]),
        }}
      />

      <Breadcrumbs
        items={[
          { name: 'Accueil', href: '/' },
          { name: 'Tarifs' },
        ]}
      />

      <section className="relative py-16 md:py-24 overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90 z-0"></div>
        <div
          className="absolute inset-0 opacity-30 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/washing-car-1397382_1280.jpg')` }}
        ></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Prix et tarifs de nos services de lavage auto
            </h1>
            <p className="text-xl mb-8">
              Des tarifs clairs et sans surprise, de 80$ à 150$ selon votre véhicule.
              Le prix est toujours confirmé avant le début du service.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Obtenir un devis gratuit</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tarifs de base par type de véhicule</h2>
            <p className="text-lg text-gray-600">
              Le forfait de base comprend le lavage extérieur complet à la main.
            </p>
          </div>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="py-4 px-4 font-semibold">Type de véhicule</th>
                  <th className="py-4 px-4 font-semibold">Exemples</th>
                  <th className="py-4 px-4 font-semibold text-right">Prix de base</th>
                </tr>
              </thead>
              <tbody>
                {BASE_PRICES.map((row) => (
                  <tr key={row.vehicle} className="border-b border-gray-200">
                    <td className="py-4 px-4 font-medium">{row.vehicle}</td>
                    <td className="py-4 px-4 text-gray-600">{row.example}</td>
                    <td className="py-4 px-4 text-right text-primary font-bold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Services additionnels</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Personnalisez votre forfait selon les besoins de votre véhicule.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {ADDONS.map((addon) => (
                <div
                  key={addon.name}
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-5"
                >
                  <span className="font-medium">{addon.name}</span>
                  <span className="text-primary font-bold whitespace-nowrap ml-4">{addon.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500 text-center">
              *Prix indicatifs pouvant varier selon l&apos;état du véhicule. Devis exact confirmé avant le service.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50">
        <PriceEstimator />
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Questions fréquentes sur nos prix</h2>
            <div className="space-y-6">
              {PRICING_FAQS.map((faq) => (
                <div key={faq.question} className="rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-primary">
        <Container>
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">
                Besoin d&apos;un prix exact pour votre véhicule?
              </h2>
              <p className="text-white/90 text-lg">
                Contactez-nous pour un devis gratuit et sans engagement, confirmé avant le rendez-vous.
              </p>
            </div>
            <div>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
