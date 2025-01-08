import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'
import { certificates } from '@/data/certificates'

export function Certificates() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Certificates</h2>
      <div className="space-y-6">
        {certificates.slice(0, 4).map((cert, index) => (
          <div key={index}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 relative">
                <Image
                  src={cert.image}
                  alt={`${cert.issuer} logo`}
                  width={48}
                  height={48}
                  className="rounded-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </div>
                  {cert.link && (
                    <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight className="h-5 w-5 text-primary" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {index < certificates.length - 1 && (
              <hr className="my-4 border-t border-gray-200" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/certificates" className="text-sm text-gray-500 hover:text-gray-700">
          See more
        </Link>
      </div>
    </div>
  )
}

