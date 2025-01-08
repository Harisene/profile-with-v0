import { Metadata } from 'next'
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PersonalWorkItems } from "@/components/PersonalWorkItems"

export const metadata: Metadata = {
  title: 'Haritha Senevirathne - Personal Work',
  description: 'Explore Haritha Senevirathne\'s personal projects and contributions to the software development community.',
}

export default function PersonalWorkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Personal Work</h1>
          <PersonalWorkItems />
        </div>
      </main>
      <Footer />
    </div>
  )
}

