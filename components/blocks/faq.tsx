"use client";

import { Container } from '../ui/container';
import { useState } from 'react';

const faqs = [
  {
    question: "Quels sont les services offerts ?",
    answer: "Nous offrons une gamme complète de services d&apos;esthétique automobile, incluant le lavage extérieur, le nettoyage intérieur, le polissage, la protection céramique, et le traitement du cuir. Nos services sont personnalisés selon vos besoins et l&apos;état de votre véhicule."
  },
  {
    question: "Où offrez-vous vos services ?",
    answer: "Nous sommes un service mobile qui se déplace directement chez vous, que ce soit à votre domicile ou votre lieu de travail. Nous couvrons toute la région métropolitaine et les environs."
  },
  {
    question: "Dois-je faire quelque chose avant mon rendez-vous ?",
    answer: "Pour un service optimal, nous recommandons simplement de retirer vos effets personnels du véhicule avant notre arrivée. Cela nous permet d&apos;effectuer un nettoyage plus approfondi et efficace."
  },
  {
    question: "En quoi êtes-vous différent des services traditionnels d&apos;esthétique automobile près de chez moi ?",
    answer: "GrAuto se distingue par son service mobile de haute qualité, notre expertise professionnelle, et notre engagement envers la satisfaction client. Nous utilisons des produits haut de gamme et des techniques avancées pour garantir les meilleurs résultats."
  },
  {
    question: "Pourquoi est-il important de faire nettoyer sa voiture?",
    answer: "Un nettoyage régulier protège votre investissement en préservant la peinture, en prévenant la rouille, et en maintenant la valeur de revente de votre véhicule. De plus, un intérieur propre contribue à un environnement plus sain et plus agréable."
  },
  {
    question: "Comment fonctionne votre service mobile d&apos;esthétique automobile?",
    answer: "Après votre réservation, nous nous déplaçons à l&apos;endroit de votre choix avec tout l&apos;équipement nécessaire. Notre équipe professionnelle s&apos;occupe de tout, vous n&apos;avez qu&apos;à nous fournir un accès à de l&apos;eau et de l&apos;électricité."
  },
  {
    question: "Combien de temps dure le processus d&apos;esthétique automobile?",
    answer: "La durée varie selon le service choisi et l&apos;état du véhicule. Un nettoyage complet intérieur/extérieur prend généralement entre 2 et 4 heures. Pour des services plus spécialisés comme la protection céramique, cela peut prendre une journée entière."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <span className="ml-6 flex-shrink-0">
          <svg
            className={`h-6 w-6 transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="pb-6 text-gray-400">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <Container>
      <div id="faq" className="py-24 sm:py-32 bg-gray-900 text-white rounded-xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Questions <span className="text-primary">fréquentes</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Trouvez les réponses à vos questions sur nos services d&apos;esthétique automobile
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-700">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </Container>
  );
}
