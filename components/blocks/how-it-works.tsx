import { Container } from '../ui/container';

const steps = [
  {
    number: '1',
    title: 'Réservation',
    description: 'Prenez rendez-vous en ligne ou par téléphone. Choisissez la date et l\'heure qui vous conviennent.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Service à domicile',
    description: 'Notre équipe se déplace chez vous avec tout l\'équipement nécessaire pour un nettoyage professionnel.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Transformation',
    description: 'Nous effectuons un nettoyage complet et minutieux pour redonner à votre véhicule son éclat d\'origine.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <Container>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Comment ça marche</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Un processus simple et efficace pour un service de qualité
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <div className="text-primary">{step.icon}</div>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-8">{step.title}</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
