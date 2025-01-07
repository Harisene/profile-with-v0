import Image from "next/image"
import { MapPin, Calendar } from 'lucide-react'
import { SkillTag } from "./SkillTag"

const experiences = [
  {
    role: "Software Engineer",
    company: "Tech Balance",
    location: "United Kingdom",
    period: "May 2024 - Present",
    logo: "/company/tech-balance.png",
    responsibilities: [
      "Developing new features for the mobile application in **React Native** and **Firebase**.",
      "Contributing to product prioritisation meetings to align development efforts with business goals.",
      "Building development roadmaps and release plans to ensure timely delivery of features.",
      "Building unit test suits."
    ],
    skills: ["React", "React Native", "Firebase", "TypeScript"]
  },
  {
    role: "Software Engineer",
    company: "EdTech Group PVT LTD",
    location: "Australia",
    period: "Feb 2021 - May 2024",
    logo: "/company/edtech.png",
    responsibilities: [
      "Increased app crash-free rate from 82% to 99% by redesigning the **React Native** mobile app for improved stability and accessibility, enhancing the UI/UX for over 500,000 users.",
      "Implemented a white-labeled mobile app distribution mechanism using **Fastlane** and **NodeJS**, increasing company sales by over 10% through efficient, scalable deployment of customized app versions.",
      "Reduced data response time to 2 milliseconds by re-architecting **DynamoDB** data records for a specific feature, achieving an 80% improvement in response time.",
      "Refactored and optimized the existing **React Native** codebase, for better code quality. Built custom hooks to decouple the presentation layer from the business layer.",
      "Managed **AWS** cloud infrastructure with **NodeJS**, including **S3** storage, **API Gateway**, **Cognito**, **AppSync**, **SNS**, **SQS**, **Lambda**, and **CloudFormation** to maintain high availability, scalability, and security."
    ],
    skills: ["React", "React Native", "TypeScript", "AWS", "Lambda", "S3", "DynamoDB", "AppSync", "Cognito", "CloudWatch", "API Gateway", "SNS", "SQS", "CloudFormation", "GraphQL", "NodeJS", "Fastlane", "App Center", "Instabug", "Google Analytics"]
  },
  {
    role: "Trainee Software Engineer",
    company: "Pearson Lanka Pvt LTD",
    location: "Sri Lanka",
    period: "Aug 2019 - Feb 2020",
    logo: "/company/pearson.png",
    responsibilities: [
      "Aided in developing new features for a project in **ReactJS**.",
      "Researched and developed multiple mobile and web applications with **React**/**React Native** as part of a research team."
    ],
    skills: ["React", "React Native", "JavaScript", "Node"]
  }
]

export function WorkExperienceDetailed() {
  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 mr-4">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{exp.role}</h2>
              <p className="text-xl text-primary">{exp.company}</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{exp.location}</span>
            <Calendar className="w-4 h-4 ml-4 mr-2" />
            <span>{exp.period}</span>
          </div>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: resp.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Skills Used:</h3>
            <div>
              {exp.skills.map((skill, idx) => (
                <SkillTag key={idx} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

