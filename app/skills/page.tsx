import { Metadata } from 'next'
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { SkillsGrid } from "@/components/SkillsGrid"

export const metadata: Metadata = {
  title: 'Haritha Senevirathne - Skills',
  description: 'Discover the wide range of technical skills possessed by Haritha Senevirathne, including React, AWS, and more.',
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Skills</h1>
          <SkillsGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}

