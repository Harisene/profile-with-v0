import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CertificatesDetailed } from "@/components/CertificatesDetailed"

export default function CertificatesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Certificates</h1>
          <CertificatesDetailed />
        </div>
      </main>
      <Footer />
    </div>
  )
}

