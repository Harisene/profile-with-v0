import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'
import { certificates } from '@/data/certificates'

export function CertificatesDetailed() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {certificates.map((cert, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 relative mr-4">
              <Image
                src={cert.image}
                alt={`${cert.issuer} logo`}
                width={64}
                height={64}
                className="rounded-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{cert.name}</h2>
              <p className="text-primary">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground">{cert.date}</p>
            </div>
          </div>
          {cert.link && (
            <Link 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto self-end text-primary hover:text-primary-dark transition-colors"
            >
              <ArrowUpRight className="h-6 w-6" />
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}

