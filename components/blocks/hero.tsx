import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/container';
import { Button } from '../ui/button';
import { SITE_CONFIG } from '../../lib/constants';

interface HeroProps {
  title: string;
  description: string;
  cta?: {
    text: string;
    href: string;
  };
  showPattern?: boolean;
}

export function Hero({ title, description, cta, showPattern = true }: HeroProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/auto-2179220_1280.jpg"
          alt="Car detailing background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl py-20 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-balance animate-fade-up text-4xl font-bold tracking-tight text-white sm:text-6xl [text-shadow:_0_1px_12px_rgb(0_0_0_/_20%)]">
              {title}
            </h1>
            <p className="mt-6 text-balance animate-fade-up text-lg leading-8 text-white/90 delay-100 [text-shadow:_0_1px_8px_rgb(0_0_0_/_20%)]">
              {description}
            </p>
            {cta && (
              <div className="mt-10 flex justify-center gap-4 animate-fade-up delay-200">
                <Button 
                  asChild 
                  size="lg"
                  variant="outline-secondary"
                  className="shadow-lg hover:bg-primary/90 hover:shadow-primary/30"
                >
                  <Link href={cta.href.startsWith('/') ? `${SITE_CONFIG.url}${cta.href}` : cta.href}>{cta.text}</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="secondary"
                  className="border border-white shadow-lg bg-black/50 text-white hover:bg-primary/20 hover:border-primary/80"
                >
                  <Link href={`${SITE_CONFIG.url}/services`}>Voir nos services</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
