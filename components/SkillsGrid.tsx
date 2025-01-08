import Image from 'next/image'
import { skillCategories } from '@/data/skillCategories'

export function SkillsGrid() {
  return (
    <div className="space-y-12">
      {skillCategories.map((category) => (
        <div key={category.name}>
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {category.skills.map((skill) => (
              <div key={skill.name} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center mb-2">
                  <Image
                    src={skill.image}
                    alt={`${skill.name} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

