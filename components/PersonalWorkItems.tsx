import Image from 'next/image'
import Link from 'next/link'
import { SkillTag } from './SkillTag'
import { ExternalLink, Youtube, Pen, Package } from 'lucide-react'

const workItems = [
  {
    name: "Vocabulary Pool",
    link: "https://vocabularypool.com",
    logo: "/work/vocabularypool.png",
    description: "A space to store all your newly found words.",
    skills: ["NextJS", "Typescript", "Prisma ORM", "Mongodb", "Tailwind"],
    period: "Sept 2024 - Dec 2024"
  },
  {
    name: "Practise Prescription",
    description: "This mobile application will improve your reading skill of Doctors' handwritten Prescriptions. This is more suitable for the Pharmacists and the Students to improve their experiences and knowledge.",
    skills: ["Javascript", "React Native", "Redux", "Firebase", "Adobe XD"],
    period: "Nov 2018 - Jan 2020",
    logo: "/work/practise.png",
    images: [
      "/work/practise-01.png",
      "/work/practise-02.png",
      "/work/practise-03.png",
      "/work/practise-04.png",
      "/work/practise-05.png",
      "/work/practise-06.png"
    ]
  },
  {
    name: "UniFoods",
    description: "Using the UniFoods app, you can quickly get the meal of your choice to your doorstep. If you encounter any errors or problems while using this app, please let us know.",
    skills: ["JavaScript", "React Native", "Redux", "Firebase", "Node.js", "MongoDB", "Adobe XD"],
    period: "Jan 2019 - Aug 2019",
    logo: "/work/unifoods.png",
    images: [
      "/work/unifoods-01.png",
      "/work/unifoods-02.png",
      "/work/unifoods-03.png",
      "/work/unifoods-04.png",
      "/work/unifoods-05.png"
    ]
  },
  {
    name: "Youtuber",
    link: "https://www.youtube.com/@codewithharitha",
    description: "I am running my own YouTube channel to help the community with the React/React Native knowledge I have. I mainly talk about React Native animations in this channel.",
    logo: "/work/youtube.png",
    icon: Youtube
  },
  {
    name: "Medium Writer",
    description: "I am writing articles on Medium to share my knowledge with the community. I mainly write about React/React Native. I have a good number of followers and views on my articles.",
    link: "https://harithsenevi4.medium.com/",
    logo: "/work/medium.png",
    icon: Pen,
    stats: [
      { label: "Followers", value: "85+" },
      { label: "Views", value: "60k+" }
    ]
  },
  {
    name: "npm Package Creator",
    link: "https://www.npmjs.com/~harisene",
    description: "I have created a npm package for React Native community to help them with the animations.",
    logo: "/work/npm.png",
    icon: Package
  }
]

export function PersonalWorkItems() {
  return (
    <div className="space-y-16">
      {workItems.map((item, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 p-6">
              <Image
                src={item.logo}
                alt={`${item.name} logo`}
                width={100}
                height={100}
                className="h-24 w-24 object-contain"
              />
            </div>
            <div className="p-8 flex-grow">
              <div className="flex items-center justify-between">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.period}</div>
                {item.link && (
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                    {item.icon ? <item.icon className="h-5 w-5" /> : <ExternalLink className="h-5 w-5" />}
                  </Link>
                )}
              </div>
              <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{item.name}</h2>
              <p className="mt-2 text-gray-500">{item.description}</p>
              {item.skills && (
                <div className="mt-4">
                  {item.skills.map((skill, skillIndex) => (
                    <SkillTag key={skillIndex} skill={skill} />
                  ))}
                </div>
              )}
              {item.stats && (
                <div className="mt-4 flex space-x-4">
                  {item.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-sm">
                      <span className="font-medium text-gray-900">{stat.value}</span>
                      <span className="text-gray-500"> {stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {item.images && (
            <div className="p-8">
              <h3 className="text-lg font-semibold mb-4">Project Screenshots</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {item.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={img}
                      alt={`${item.name} screenshot ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

