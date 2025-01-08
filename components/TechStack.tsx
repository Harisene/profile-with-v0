import Image from 'next/image'
import { techStack } from '@/data/techStack'

export function TechStack() {
  return (
    <div className="py-12 bg-muted rounded-3xl">
      <h2 className="text-2xl font-bold text-center mb-8">Favorite Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {techStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center group">
            <div className="w-16 h-16 flex items-center justify-center transition-transform transform group-hover:scale-110">
              <Image
                src={tech.src}
                alt={tech.name}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

