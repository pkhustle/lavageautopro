import { SITE_CONFIG } from '../../lib/constants';

interface LocationFAQSchemaProps {
  locationName: string;
  serviceType: string;
  serviceId: string;
  locationId: string;
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
// This should match the visible FAQs in the LocationFAQ component
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
  'brossard': [
    {
      question: "Combien coûte un nettoyage intérieur de voiture à Brossard?",
      answer: "Le nettoyage intérieur complet s'ajoute pour 50$ au forfait de base, qui varie de 80$ à 150$ selon le type de véhicule (compacte, berline, SUV ou fourgonnette). Le prix exact est toujours confirmé avant le rendez-vous, sans surprise."
    },
    {
      question: "Desservez-vous tous les secteurs de Brossard?",
      answer: "Oui, nous desservons l'ensemble de Brossard, du Quartier DIX30 aux secteurs résidentiels B, C, M, N, O, P, R et S, ainsi que les villes voisines de la Rive-Sud comme Saint-Lambert, La Prairie et Longueuil."
    },
    {
      question: "Pouvez-vous enlever les poils d'animaux et les taches sur les sièges?",
      answer: "Oui, c'est l'une des demandes les plus fréquentes à Brossard. Nous utilisons des outils spécialisés pour extraire les poils d'animaux incrustés dans les tissus, puis un shampoing en profondeur pour traiter les taches sur les sièges et tapis."
    },
    {
      question: "Proposez-vous le service à domicile à Brossard?",
      answer: "Oui, notre unité mobile se déplace à votre domicile ou à votre lieu de travail à Brossard. Vous n'avez qu'à nous donner accès au véhicule: nous apportons l'équipement et les produits nécessaires."
    },
    {
      question: "Combien de temps prend un nettoyage intérieur complet à Brossard?",
      answer: "Comptez entre 2 et 3 heures pour un nettoyage intérieur complet, selon la taille du véhicule et son état. Un véhicule familial avec sièges pour enfants ou poils d'animaux peut demander un peu plus de temps."
    }
  ],
  'sherbrooke': [
    {
      question: "Offrez-vous le lavage auto à domicile à Sherbrooke?",
      answer: "Oui, le service à domicile est disponible partout à Sherbrooke: Fleurimont, Mont-Bellevue, Rock Forest–Saint-Élie–Deauville, Jacques-Cartier, Brompton et Lennoxville. Notre équipe se déplace chez vous ou à votre travail avec tout l'équipement nécessaire."
    },
    {
      question: "Combien coûte un lavage auto intérieur et extérieur à Sherbrooke?",
      answer: "Le forfait de base (lavage extérieur à la main) va de 80$ pour une compacte à 150$ pour une fourgonnette. Le nettoyage intérieur complet s'ajoute pour 50$. Un devis exact et gratuit est confirmé avant chaque rendez-vous."
    },
    {
      question: "Comment traitez-vous le calcium et le sel des routes de l'Estrie en hiver?",
      answer: "Les traces blanches de calcium sur les tapis et le bas de caisse sont fréquentes à Sherbrooke en hiver. Nous utilisons des produits conçus pour dissoudre le calcium sans abîmer les tissus, puis nous appliquons une protection qui facilite l'entretien jusqu'au printemps."
    },
    {
      question: "Combien de temps prend un nettoyage complet à Sherbrooke?",
      answer: "Un lavage extérieur à la main prend environ 1 heure; avec le nettoyage intérieur complet, comptez de 2 à 3 heures selon la taille et l'état du véhicule. Le temps estimé vous est communiqué lors de la réservation."
    },
    {
      question: "Faut-il réserver longtemps d'avance à Sherbrooke?",
      answer: "Nous recommandons de réserver quelques jours à l'avance, surtout au printemps et à l'automne qui sont les périodes les plus achalandées. Contactez-nous pour connaître les prochaines disponibilités dans votre secteur."
    }
  ],
  'rimouski': [
    {
      question: "Pourquoi le lavage auto est-il particulièrement important à Rimouski?",
      answer: "À Rimouski, la proximité du fleuve expose les véhicules à l'air salin en plus du sel de déglaçage en hiver, deux facteurs qui accélèrent la corrosion. Un lavage régulier avec rinçage du bas de caisse et une protection de la peinture aident à préserver la carrosserie."
    },
    {
      question: "Desservez-vous tous les secteurs de Rimouski?",
      answer: "Oui, nous desservons l'ensemble de Rimouski, incluant Saint-Germain, Nazareth, Sacré-Cœur, Pointe-au-Père, Sainte-Odile et Le Bic, ainsi que les municipalités voisines du Bas-Saint-Laurent sur demande."
    },
    {
      question: "Quel est le prix d'un lavage auto à la main à Rimouski?",
      answer: "Le forfait de base commence à 80$ pour une compacte et va jusqu'à 150$ pour une fourgonnette. Le nettoyage intérieur complet s'ajoute pour 50$, et le cirage protecteur pour 30$. Le prix est confirmé avant le début du service."
    },
    {
      question: "Combien de temps prend un lavage complet à Rimouski?",
      answer: "Comptez environ 1 heure pour le lavage extérieur à la main et de 2 à 3 heures si vous ajoutez le nettoyage intérieur complet, selon la taille et l'état du véhicule."
    },
    {
      question: "Comment réserver un lavage auto à Rimouski?",
      answer: "Vous pouvez réserver via notre formulaire de contact en ligne: indiquez votre type de véhicule et le service souhaité, et nous vous confirmons rapidement un rendez-vous avec le prix exact, sans engagement."
    }
  ],
  'victoriaville': [
    {
      question: "Quelle est la différence avec un lave-auto libre-service à Victoriaville?",
      answer: "Contrairement au libre-service, notre lavage à la main est réalisé entièrement par notre équipe: prélavage, lavage au gant, rinçage et séchage sans traces. C'est plus doux pour la peinture qu'un lave-auto automatique et plus complet qu'un libre-service, sans effort de votre part."
    },
    {
      question: "Desservez-vous tous les secteurs de Victoriaville?",
      answer: "Oui, nous desservons l'ensemble de Victoriaville, incluant le centre-ville, le secteur Arthabaska et Sainte-Victoire-d'Arthabaska, ainsi que les municipalités voisines des Bois-Francs sur demande."
    },
    {
      question: "Quel est le prix d'un lavage auto à Victoriaville?",
      answer: "Le forfait de base commence à 80$ pour une compacte et va jusqu'à 150$ pour une fourgonnette. Vous pouvez ajouter le nettoyage intérieur complet (+50$), le cirage (+30$) ou une protection céramique (+100$). Devis gratuit confirmé avant le rendez-vous."
    },
    {
      question: "Proposez-vous l'esthétique automobile (polissage, cirage) à Victoriaville?",
      answer: "Oui, en plus du lavage à la main, nous offrons le polissage esthétique pour atténuer les micro-rayures légères, le cirage protecteur et la protection céramique pour conserver le lustre de la peinture plus longtemps."
    },
    {
      question: "Combien de temps prend un lavage à la main à Victoriaville?",
      answer: "Comptez environ 1 heure pour le lavage extérieur à la main, et de 2 à 3 heures pour un forfait complet intérieur et extérieur, selon la taille et l'état de votre véhicule."
    }
  ],
  'shawinigan': [
    {
      question: "Desservez-vous tous les secteurs de Shawinigan?",
      answer: "Oui, nous desservons l'ensemble de Shawinigan, incluant Shawinigan-Sud, Grand-Mère, Saint-Georges-de-Champlain, Saint-Gérard-des-Laurentides et Lac-à-la-Tortue, ainsi que les environs en Mauricie sur demande."
    },
    {
      question: "Quel est le prix d'un lavage auto à Shawinigan?",
      answer: "Le forfait de base (lavage extérieur à la main) va de 80$ pour une compacte à 150$ pour une fourgonnette. Le nettoyage intérieur complet s'ajoute pour 50$. Le prix exact est confirmé avant le rendez-vous, sans surprise."
    },
    {
      question: "Pouvez-vous nettoyer un véhicule utilisé en plein air ou au chalet?",
      answer: "Oui, c'est une demande fréquente en Mauricie: sable, boue, aiguilles de conifères et odeurs d'humidité. Nous faisons une aspiration en profondeur, un shampoing des tissus et un traitement anti-odeurs pour remettre l'habitacle à neuf après la saison du chalet."
    },
    {
      question: "Combien de temps prend un nettoyage complet à Shawinigan?",
      answer: "Comptez environ 1 heure pour le lavage extérieur à la main et de 2 à 3 heures pour un forfait complet intérieur et extérieur, selon la taille et l'état du véhicule."
    },
    {
      question: "Comment réserver un lavage auto à Shawinigan?",
      answer: "Réservez via notre formulaire de contact en indiquant votre type de véhicule et le service souhaité. Nous confirmons rapidement le rendez-vous et le prix exact, sans engagement de votre part."
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

export function LocationFAQSchema({ locationName, serviceType, serviceId, locationId }: LocationFAQSchemaProps) {
  // Convert location name to lowercase and remove accents for matching
  const normalizedLocation = locationName.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, '');
  
  // Only emit FAQPage schema for cities with their own FAQ content.
  // The default Q&A set is shared across many pages; marking it up on each
  // page would duplicate identical FAQPage markup site-wide.
  const locationKey = Object.keys(LOCATION_FAQS).find(key =>
    normalizedLocation.includes(key));

  const faqs = locationKey ? LOCATION_FAQS[locationKey] : null;

  const faqSchema = faqs && {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  // Create breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Accueil',
        'item': SITE_CONFIG.url
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': serviceType,
        'item': `${SITE_CONFIG.url}/${serviceId}`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': `${serviceType} à ${locationName}`,
        'item': `${SITE_CONFIG.url}/${serviceId}/${locationId}`
      }
    ]
  };

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  );
}
