"use client";

import { Container } from '../ui/container';
import { useState } from 'react';

interface LocationFAQProps {
  locationName: string;
  serviceType: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface LocationFAQs {
  [key: string]: FAQ[];
}

// This data would ideally come from a CMS or API
// For now, we'll hardcode some example data for a few locations
const LOCATION_FAQS: LocationFAQs = {
  'montreal': [
    {
      question: "Combien de temps prend un lavage intérieur complet à Montréal?",
      answer: "Pour un lavage intérieur complet à Montréal, comptez entre 2 et 3 heures selon la taille du véhicule et son état. Nous prenons le temps nécessaire pour assurer un nettoyage minutieux de chaque recoin de votre habitacle."
    },
    {
      question: "Proposez-vous un service à domicile dans tous les arrondissements de Montréal?",
      answer: "Oui, nous offrons notre service à domicile dans tous les arrondissements de Montréal, de Ville-Marie à Saint-Laurent, en passant par le Plateau-Mont-Royal et Rosemont. Nous nous déplaçons chez vous pour plus de commodité."
    },
    {
      question: "Comment protégez-vous les intérieurs en cuir contre le sel en hiver à Montréal?",
      answer: "À Montréal, le sel utilisé sur les routes en hiver peut endommager les intérieurs en cuir. Nous utilisons des produits spécifiques pour nettoyer en profondeur et appliquer un protecteur qui crée une barrière contre le sel et les éléments abrasifs, prolongeant ainsi la durée de vie de vos sièges en cuir."
    },
    {
      question: "Quels sont vos délais d&apos;intervention à Montréal en haute saison?",
      answer: "En haute saison (printemps et automne), nos délais d&apos;intervention à Montréal sont généralement de 2 à 3 jours ouvrables. Nous vous recommandons de réserver à l&apos;avance pour obtenir le créneau qui vous convient le mieux."
    },
    {
      question: "Utilisez-vous des produits écologiques pour vos services à Montréal?",
      answer: "Absolument! À Montréal, nous sommes particulièrement sensibles aux questions environnementales. Nous utilisons des produits biodégradables et écologiques qui sont efficaces tout en respectant l&apos;environnement et la santé de nos clients."
    }
  ],
  'quebec': [
    {
      question: "Combien de temps prend un lavage intérieur complet à Québec?",
      answer: "Pour un lavage intérieur complet à Québec, comptez entre 2 et 3 heures selon la taille du véhicule et son état. Nos équipes locales sont formées pour être efficaces tout en restant minutieuses."
    },
    {
      question: "Proposez-vous un service à domicile dans toute la ville de Québec?",
      answer: "Oui, nous offrons notre service à domicile dans tous les quartiers de Québec, du Vieux-Québec à Sainte-Foy, en passant par Limoilou et Charlesbourg. Notre équipe se déplace chez vous pour plus de commodité."
    },
    {
      question: "Comment traitez-vous les intérieurs face aux conditions hivernales rigoureuses de Québec?",
      answer: "À Québec, les hivers sont particulièrement rigoureux. Nous utilisons des produits spécifiquement formulés pour éliminer les résidus de sel et de calcium, puis appliquons des protecteurs durables qui créent une barrière contre ces éléments corrosifs."
    },
    {
      question: "Quels sont vos délais d&apos;intervention à Québec?",
      answer: "Nos délais d&apos;intervention à Québec sont généralement de 1 à 2 jours ouvrables. Nous avons une équipe locale dédiée qui nous permet d&apos;être réactifs même en période de forte demande."
    },
    {
      question: "Proposez-vous des forfaits spécifiques pour les résidents de Québec?",
      answer: "Oui, nous avons développé des forfaits spécifiques adaptés aux besoins des résidents de Québec, prenant en compte les conditions climatiques locales et les habitudes d&apos;utilisation des véhicules dans la région."
    }
  ],
  'laval': [
    {
      question: "Combien de temps prend un lavage intérieur complet à Laval?",
      answer: "Pour un lavage intérieur complet à Laval, comptez entre 2 et 3 heures selon la taille du véhicule et son état. Notre équipe locale travaille efficacement pour minimiser le temps d&apos;immobilisation de votre véhicule."
    },
    {
      question: "Proposez-vous un service à domicile dans tous les quartiers de Laval?",
      answer: "Oui, nous offrons notre service à domicile dans tous les quartiers de Laval, de Chomedey à Auteuil, en passant par Vimont et Duvernay. Notre équipe se déplace chez vous pour plus de commodité."
    },
    {
      question: "Comment protégez-vous les véhicules contre la pollution due à la proximité des autoroutes à Laval?",
      answer: "À Laval, la proximité des grandes autoroutes expose les véhicules à davantage de particules polluantes. Nous utilisons des produits spécifiques pour éliminer ces particules et appliquons des protecteurs qui facilitent le nettoyage futur et préservent l&apos;aspect de votre véhicule."
    },
    {
      question: "Quels sont vos délais d&apos;intervention à Laval?",
      answer: "Nos délais d&apos;intervention à Laval sont généralement de 1 à 2 jours ouvrables. Notre équipe locale nous permet d&apos;être réactifs et flexibles pour répondre à vos besoins."
    },
    {
      question: "Proposez-vous des services spécifiques pour les résidents de Laval?",
      answer: "Oui, nous avons développé des services spécifiques pour les résidents de Laval, tenant compte des particularités locales comme la proximité des zones industrielles et des autoroutes qui peuvent affecter l&apos;état de votre véhicule."
    }
  ],
  // Default FAQs for other locations
  'default': [
    {
      question: "Combien de temps prend un lavage intérieur complet?",
      answer: "Pour un lavage intérieur complet, comptez entre 2 et 3 heures selon la taille du véhicule et son état. Nous prenons le temps nécessaire pour assurer un nettoyage minutieux de chaque recoin de votre habitacle."
    },
    {
      question: "Proposez-vous un service à domicile?",
      answer: "Oui, nous offrons notre service à domicile dans toute votre région. Notre équipe se déplace chez vous pour plus de commodité, vous évitant ainsi de vous déplacer."
    },
    {
      question: "Comment protégez-vous les intérieurs en cuir?",
      answer: "Nous utilisons des produits spécifiques pour nettoyer en profondeur et appliquer un protecteur qui crée une barrière contre les éléments abrasifs, prolongeant ainsi la durée de vie de vos sièges en cuir."
    },
    {
      question: "Quels sont vos délais d&apos;intervention?",
      answer: "Nos délais d&apos;intervention sont généralement de 2 à 3 jours ouvrables. Nous vous recommandons de réserver à l&apos;avance pour obtenir le créneau qui vous convient le mieux."
    },
    {
      question: "Utilisez-vous des produits écologiques?",
      answer: "Absolument! Nous utilisons des produits biodégradables et écologiques qui sont efficaces tout en respectant l&apos;environnement et la santé de nos clients."
    }
  ]
};

export function LocationFAQ({ locationName, serviceType }: LocationFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Convert location name to lowercase and remove accents for matching
  const normalizedLocation = locationName.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, '');
  
  // Try to find location FAQs, fall back to default if not found
  const locationKey = Object.keys(LOCATION_FAQS).find(key => 
    normalizedLocation.includes(key)) || 'default';
  
  const faqs = LOCATION_FAQS[locationKey];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Questions fréquentes sur {serviceType} à {locationName}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Trouvez les réponses aux questions les plus courantes sur nos services dans votre région
          </p>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {faqs.map((faq, index) => (
            <div key={index} className="px-4 py-6 sm:px-6">
              <button
                className="flex w-full items-start justify-between text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 pr-12">
                  <p className="text-base text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Vous avez d&apos;autres questions sur nos services à {locationName}? N&apos;hésitez pas à nous contacter.
          </p>
        </div>
      </Container>
    </section>
  );
}
