import { Metadata } from 'next'
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { TechStack } from "@/components/TechStack"
import { WorkExperience } from "@/components/WorkExperience"
import { Certificates } from "@/components/Certificates"

export const metadata: Metadata = {
  title: 'Haritha Senevirathne - Home',
  description: 'Skilled Software Engineer specializing in React, React Native, AWS, Node and Typescript',
  openGraph: {
    title: "Haritha Senevirathne",
    description: "Skilled Software Engineer specializing in React, React Native, AWS, Node and Typescript",
    url: "https://profile-haritha-beige.vercel.app/",
    siteName: "Haritha Senevirathne",
    images: [
      { url: `https://profile-haritha-beige.vercel.app/opengraph-image.png`, width: 1200, height: 630 },
    ],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 sm:px-6 lg:px-8 mt-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <HeroSection />
          <TechStack />
          <div className="bg-muted rounded-3xl p-8 sm:p-12 mt-12">
            <div className="grid md:grid-cols-2 gap-12">
              <WorkExperience />
              <Certificates />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

