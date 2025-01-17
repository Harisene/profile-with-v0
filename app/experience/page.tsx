import { Metadata } from 'next'
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { WorkExperienceDetailed } from "@/components/WorkExperienceDetailed"

export const metadata: Metadata = {
  title: 'Haritha Senevirathne - Work Experience',
  description: 'Explore Haritha Senevirathne\'s professional journey and work experience in software engineering.',
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
          <WorkExperienceDetailed />
        </div>
      </main>
      <Footer />
    </div>
  )
}

