import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { socialLinks } from '@/data/socialLinks'

export function HeroSection() {
  return (
    <div className="mb-20">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <Image
              src="/profile.png"
              alt="Haritha Senevirathne"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-2">
            Hello! I&apos;m Haritha Senevirathne
          </h1>
          <p className="text-xl text-muted-foreground mb-6 text-center md:text-left">Software Engineer</p>
          <div className="flex space-x-4">
            {socialLinks.map((item, index) => (
              <Link 
                key={index} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FontAwesomeIcon icon={item.icon} className="w-5 h-5 text-gray-600 hover:text-gray-900" />
              </Link>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 space-y-4 flex flex-col justify-center">
          <div className="flex items-start">
            <span className="text-6xl font-bold text-primary mr-4">4</span>
            <div className="flex flex-col">
              <span className="text-2xl font-semibold">Years of</span>
              <span className="text-2xl font-semibold">experience</span>
            </div>
          </div>
          <p className="text-muted-foreground">
            Experienced Software Engineer with 4+ years of expertise in React, React Native, Next.js, Node.js, AWS, and
            TypeScript. Skilled in developing scalable, high-performance applications and managing cloud infrastructure to deliver impactful solutions.
          </p>
          <div className="flex gap-4 mt-6">
            <Link href="/experience">
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                See work experience
              </button>
            </Link>
            <Link href="/skills">
              <button className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors">
                See my skills
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

