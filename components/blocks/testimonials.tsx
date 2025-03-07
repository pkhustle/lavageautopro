import Image from 'next/image';
import { Container } from '../ui/container';

const testimonials = [
  {
    quote: "Service impeccable ! Mon véhicule n'a jamais été aussi propre. Je recommande vivement !",
    author: "Marie Dubois",
    role: "Cliente satisfaite",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200"
  },
  {
    quote: "Une équipe professionnelle et minutieuse. Le résultat dépasse mes attentes.",
    author: "Jean Martin",
    role: "Client régulier",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200"
  },
  {
    quote: "Excellent rapport qualité-prix. Le service à domicile est vraiment pratique !",
    author: "Sophie Laurent",
    role: "Cliente",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200"
  }
];

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ce que nos clients disent
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Découvrez les expériences de nos clients satisfaits
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between rounded-2xl bg-white p-8 shadow-lg"
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  sizes="(max-width: 768px) 100vw, 200px"
                  className="object-cover"
                />
              </div>
              <blockquote className="mt-8 text-center text-lg font-medium text-gray-900">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="mt-4 text-center">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
