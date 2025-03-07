import { Container } from '../ui/container';
import Image from 'next/image';

const galleryImages = [
  {
    src: "/images/automobile-2875254_1280.jpg",
    alt: "Polissage professionnel d'une voiture de luxe",
  },
  {
    src: "/images/dashboard-3510327_1280.jpg",
    alt: "Nettoyage intérieur détaillé",
  },
  {
    src: "/images/car-7291166_1280.jpg",
    alt: "Application de protection céramique",
  },
  {
    src: "/images/wash-5144822_1280.jpg",
    alt: "Nettoyage des jantes et pneus",
  },
  {
    src: "/images/gearstick-7740670_1280.jpg",
    alt: "Traitement des cuirs de luxe",
  },
  {
    src: "/images/car-63930_1280.jpg",
    alt: "Finition miroir après polissage",
  },
  {
    src: "/images/auto-2179220_1280.jpg",
    alt: "Nettoyage professionnel du moteur",
  },
  {
    src: "/images/red-255110_1280.jpg",
    alt: "Restauration des phares",
  },
  {
    src: "/images/wash-a-car-1822415_1280.jpg",
    alt: "Nettoyage des vitres et rétroviseurs",
  },
  {
    src: "/images/washing-car-1397382_1280.jpg",
    alt: "Décontamination de la peinture",
  },
  {
    src: "/images/cleaning-1837328_1280.jpg",
    alt: "Nettoyage des tapis et moquettes",
  },
  {
    src: "/images/cleaning-1837331_1280.jpg",
    alt: "Protection des plastiques extérieurs",
  },
  {
    src: "/images/dashboard-3510327_1280.jpg",
    alt: "Nettoyage du tableau de bord",
  },
  {
    src: "/images/wash-5144822_1280.jpg",
    alt: "Application de cire de protection",
  },
  {
    src: "/images/gearstick-7740670_1280.jpg",
    alt: "Nettoyage des sièges en tissu",
  },
  {
    src: "/images/automobile-2875254_1280.jpg",
    alt: "Polissage des surfaces chromées",
  },
  {
    src: "/images/car-63930_1280.jpg",
    alt: "Nettoyage des joints et interstices",
  },
  {
    src: "/images/red-255110_1280.jpg",
    alt: "Traitement anti-pluie des vitres",
  },
  {
    src: "/images/auto-2179220_1280.jpg",
    alt: "Nettoyage du coffre",
  },
  {
    src: "/images/car-7291166_1280.jpg",
    alt: "Finition et contrôle qualité",
  },
];

export function Gallery() {
  return (
    <Container>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Notre galerie
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Découvrez la qualité de notre travail à travers nos réalisations
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[3/2] overflow-hidden rounded-lg bg-gray-100"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={533}
                className="h-full w-full object-cover object-center transition duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
