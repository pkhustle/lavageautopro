import { Container } from '../ui/container';

interface LocationTestimonialsProps {
  locationName: string;
}

interface Testimonial {
  content: string;
  author: string;
  role: string;
  vehicle?: string;
  rating: number;
}

interface LocationTestimonials {
  [key: string]: Testimonial[];
}

// This data would ideally come from a CMS or API
// For now, we'll hardcode some example data for a few locations
const LOCATION_TESTIMONIALS: LocationTestimonials = {
  'montreal': [
    {
      content: "J&apos;ai fait appel à leur service de lavage intérieur pour ma BMW après un long hiver à Montréal. Le résultat était impeccable, toute trace de sel et de calcium a disparu. Je recommande vivement!",
      author: "Marc Tremblay",
      role: "Résident de Ville-Marie",
      vehicle: "BMW Série 3",
      rating: 5
    },
    {
      content: "Service exceptionnel à Montréal! Ils ont complètement transformé l&apos;intérieur de mon SUV qui avait souffert des conditions hivernales. Très professionnel et ponctuel.",
      author: "Sophie Lavoie",
      role: "Résidente du Plateau",
      vehicle: "Audi Q5",
      rating: 5
    },
    {
      content: "Excellent rapport qualité-prix pour le nettoyage de ma voiture à Montréal. L&apos;équipe est arrivée à l&apos;heure et a fait un travail minutieux. Je ferai de nouveau appel à leurs services.",
      author: "Jean-Philippe Côté",
      role: "Résident d&apos;Outremont",
      vehicle: "Tesla Model 3",
      rating: 4
    }
  ],
  'quebec': [
    {
      content: "Service impeccable à Québec! Mon véhicule n&apos;avait jamais été aussi propre. L&apos;équipe a pris le temps de s&apos;occuper de chaque détail et le résultat est impressionnant.",
      author: "Lucie Gagnon",
      role: "Résidente de Sainte-Foy",
      vehicle: "Honda CR-V",
      rating: 5
    },
    {
      content: "Très satisfait du service de nettoyage intérieur à Québec. Ils ont réussi à éliminer des taches que je croyais permanentes. Je les recommande sans hésitation!",
      author: "Pierre Bouchard",
      role: "Résident du Vieux-Québec",
      vehicle: "Volkswagen Golf",
      rating: 5
    },
    {
      content: "J&apos;utilise leurs services à Québec depuis plus d&apos;un an maintenant et je suis toujours aussi satisfait. Professionnalisme et qualité sont au rendez-vous à chaque fois.",
      author: "Marie-Ève Simard",
      role: "Résidente de Charlesbourg",
      vehicle: "Mazda CX-5",
      rating: 4
    }
  ],
  'laval': [
    {
      content: "Service de qualité exceptionnelle à Laval. Mon véhicule avait grand besoin d&apos;un nettoyage après un hiver rigoureux et le résultat a dépassé mes attentes.",
      author: "François Lemieux",
      role: "Résident de Chomedey",
      vehicle: "Toyota RAV4",
      rating: 5
    },
    {
      content: "Très impressionné par le professionnalisme et l&apos;efficacité de l&apos;équipe à Laval. Ma voiture semble neuve à nouveau! Je recommande vivement leurs services.",
      author: "Nathalie Bergeron",
      role: "Résidente de Vimont",
      vehicle: "Nissan Rogue",
      rating: 5
    },
    {
      content: "J&apos;ai fait appel à eux pour un nettoyage complet de mon véhicule à Laval et je ne suis pas déçu. Service rapide, efficace et résultat impeccable.",
      author: "Robert Paquette",
      role: "Résident d&apos;Auteuil",
      vehicle: "Ford Escape",
      rating: 4
    }
  ],
  // Default testimonials for other locations
  'default': [
    {
      content: "Service exceptionnel! L&apos;équipe a fait un travail remarquable sur l&apos;intérieur de ma voiture. Je recommande vivement leurs services de nettoyage.",
      author: "Client satisfait",
      role: "Propriétaire de véhicule",
      rating: 5
    },
    {
      content: "Très professionnel et minutieux. Ma voiture n&apos;a jamais été aussi propre. Je ferai certainement appel à leurs services à nouveau.",
      author: "Client régulier",
      role: "Propriétaire de véhicule",
      rating: 5
    },
    {
      content: "Excellent rapport qualité-prix. Le service était rapide et efficace, et le résultat est impressionnant. Je recommande!",
      author: "Nouveau client",
      role: "Propriétaire de véhicule",
      rating: 4
    }
  ]
};

export function LocationTestimonials({ locationName }: LocationTestimonialsProps) {
  // Convert location name to lowercase and remove accents for matching
  const normalizedLocation = locationName.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, '');
  
  // Try to find location testimonials, fall back to default if not found
  const locationKey = Object.keys(LOCATION_TESTIMONIALS).find(key => 
    normalizedLocation.includes(key)) || 'default';
  
  const testimonials = LOCATION_TESTIMONIALS[locationKey];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-900 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ce que nos clients à {locationName} disent
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Découvrez les témoignages de nos clients satisfaits dans votre région
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-sm relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-gray-700">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial content */}
              <p className="text-gray-300 mb-4">&quot;{testimonial.content}&quot;</p>
              
              {/* Author info */}
              <div className="mt-6">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
                {testimonial.vehicle && (
                  <p className="text-sm text-gray-500 mt-1">
                    <span className="inline-flex items-center">
                      <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {testimonial.vehicle}
                    </span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
