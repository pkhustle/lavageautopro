import Image from 'next/image';
import { Container } from '../ui/container';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface TeamProps {
  title?: string;
  description?: string;
  members: TeamMember[];
}

export function Team({ title = "Notre équipe", description, members }: TeamProps) {
  return (
    <section className="bg-white py-24 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {description}
            </p>
          )}
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative h-56 w-56 rounded-full overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm font-semibold leading-6 text-primary">
                {member.role}
              </p>
              <p className="mt-4 text-base leading-7 text-gray-600 text-center">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
