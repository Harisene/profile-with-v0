import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; 2025 Haritha Senevirathne. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/experience" className="text-sm hover:text-gray-300">
              Work Experience
            </Link>
            <Link href="/certificates" className="text-sm hover:text-gray-300">
              Certificates
            </Link>
            <Link href="/skills" className="text-sm hover:text-gray-300">
              Skills
            </Link>
            <Link href="/projects" className="text-sm hover:text-gray-300">
              Personal Projects
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

