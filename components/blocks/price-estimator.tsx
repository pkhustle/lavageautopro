'use client';

import { useState } from 'react';
import { Container } from '../ui/container';
import { Button } from '../ui/button';
import Image from 'next/image';

const vehicleTypes = [
  { id: 'compact', name: 'Compacte', basePrice: 80 },
  { id: 'sedan', name: 'Berline', basePrice: 100 },
  { id: 'suv', name: 'SUV', basePrice: 120 },
  { id: 'van', name: 'Fourgonnette', basePrice: 150 },
];

const services = [
  { id: 'basic', name: 'Lavage de base', price: 0 },
  { id: 'premium', name: 'Lavage premium', price: 30 },
  { id: 'interior', name: 'Nettoyage intérieur', price: 50 },
  { id: 'ceramic', name: 'Protection céramique', price: 100 },
];

export function PriceEstimator() {
  const [vehicleType, setVehicleType] = useState('compact');
  const [selectedServices, setSelectedServices] = useState(['basic']);

  const calculateTotal = () => {
    const basePrice = vehicleTypes.find((v) => v.id === vehicleType)?.basePrice || 0;
    const servicesPrice = services
      .filter((s) => selectedServices.includes(s.id))
      .reduce((total, service) => total + service.price, 0);
    return basePrice + servicesPrice;
  };

  const toggleService = (serviceId: string) => {
    if (serviceId === 'basic') return; // Basic service always selected
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 w-full h-full bg-gradient-to-b from-background via-white/50 to-background" />
        <div 
          className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)',
            backgroundSize: '24px 24px' 
          }} 
        />
      </div>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Estimez le prix du service
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground">
            Sélectionnez votre type de véhicule et les services souhaités
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl glass-effect border border-white/20 p-8 shadow-xl">
          <div className="space-y-8">
            {/* Vehicle Type Selection */}
            <div>
              <h3 className="text-lg font-medium text-foreground">Type de véhicule</h3>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {vehicleTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setVehicleType(type.id)}
                    className={`rounded-lg border p-4 text-center transition-all duration-300 ${
                      vehicleType === type.id
                        ? 'border-primary bg-blue-100 text-primary font-semibold shadow-lg'
                        : 'border-gray-200 hover:bg-blue-50/50 hover:border-primary hover:-translate-y-0.5 hover:shadow-md'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Image
                        src={`/icons/${
                          type.id === 'compact' ? 'voiture-compacte.png' :
                          type.id === 'sedan' ? 'modele-de-voiture-berline.png' :
                          type.id === 'suv' ? 'jeep.png' :
                          'voiture-de-livraison.png'
                        }`}
                        alt={type.name}
                        width={48}
                        height={48}
                        className={`${vehicleType === type.id ? 'opacity-100' : 'opacity-80'}`}
                      />
                      <div className="font-medium">{type.name}</div>
                    </div>
                    <div className="mt-1 text-sm">
                      {vehicleType === type.id ? 'Sélectionné' : `$${type.basePrice}`}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Services Selection */}
            <div>
              <h3 className="text-lg font-medium text-foreground">Services additionnels</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    disabled={service.id === 'basic'}
                    className={`flex items-center justify-between rounded-lg border p-4 transition-all duration-300 ${
                      selectedServices.includes(service.id)
                        ? 'border-primary bg-emerald-100 text-primary font-semibold shadow-lg'
                        : 'border-gray-200 hover:bg-emerald-50/50 hover:border-primary hover:-translate-y-0.5 hover:shadow-md'
                    }`}
                  >
                    <span className="font-medium">{service.name}</span>
                    <span className="text-sm">
                      {service.price === 0 ? 'Inclus' : `+$${service.price}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="rounded-lg bg-violet-50/50 p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-foreground">Total estimé</span>
                <span className="text-2xl font-bold text-primary">
                  ${calculateTotal()}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                *Prix indicatif pouvant varier selon l'état du véhicule
              </p>
            </div>

            <div className="text-center">
              <Button 
              variant="outline-accent"
                asChild 
                className="w-full sm:w-auto bg-primary shadow-lg hover:bg-primary/90"
              >
                <a href="/contact">Réserver maintenant</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
