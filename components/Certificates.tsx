import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'

const certificates = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 2023",
    link: "https://www.credly.com/badges/b2483e73-8e94-4370-a55a-4a85558ba752/linked_in_profile"
  },
  {
    name: "Mastering Next.js 13 with TypeScript",
    issuer: "Code With Mosh",
    date: "Nov 2024"
  },
  {
    name: "The Complete React Testing Course",
    issuer: "Code With Mosh",
    date: "Apr 2024"
  },
  {
    name: "Flutter & Dart - The Complete Guide [2023 Edition]",
    issuer: "Udemy",
    date: "Mar 2023",
    link: "https://www.udemy.com/certificate/UC-18e7d4a2-3f4a-4571-845d-d8aec8bed268/"
  }
]

export function Certificates() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Certificates</h2>
      <div className="space-y-6">
        {certificates.map((cert, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xs">{cert.issuer[0]}</span>
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

