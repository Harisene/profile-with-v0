import Image from 'next/image'

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", image: "/skills/typescript.png" },
      { name: "JavaScript", image: "/skills/javascript.png" },
    ]
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", image: "/skills/react.png" },
      { name: "React Native", image: "/skills/react-native.png" },
      { name: "Expo", image: "/skills/expo.png" },
      { name: "Next.js", image: "/skills/nextjs.png" },
      { name: "Redux", image: "/skills/redux.png" },
      { name: "Redux Toolkit", image: "/skills/redux-toolkit.png" },
      { name: "Redux Saga", image: "/skills/redux-saga.png" },
      { name: "HTML", image: "/skills/html.png" },
      { name: "CSS", image: "/skills/css.png" },
      { name: "Tailwind CSS", image: "/skills/tailwind.png" },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "AWS", image: "/skills/aws.png" },
      { name: "Firebase", image: "/skills/firebase.png" },
      { name: "Node.js", image: "/skills/nodejs.png" },
      { name: "Express", image: "/skills/express.png" },
    ]
  },
  {
    name: "Database",
    skills: [
      { name: "DynamoDB", image: "/skills/dynamodb.png" },
      { name: "MongoDB", image: "/skills/mongodb.png" },
      { name: "MySQL", image: "/skills/mysql.png" },
    ]
  },
  {
    name: "CI/CD Tools",
    skills: [
      { name: "AWS CloudFormation", image: "/skills/cloudformation.png" },
      { name: "Vercel", image: "/skills/vercel.png" },
      { name: "App Center", image: "/skills/appcenter.png" },
      { name: "EAS", image: "/skills/eas.png" },
      { name: "Fastlane", image: "/skills/fastlane.png" },
    ]
  },
  {
    name: "Other Tools",
    skills: [
      { name: "Git", image: "/skills/git.png" },
      { name: "Bitbucket", image: "/skills/bitbucket.png" },
      { name: "Jira", image: "/skills/jira.png" },
      { name: "Instabug", image: "/skills/instabug.png" },
      { name: "Postman", image: "/skills/postman.png" },
      { name: "Confluence", image: "/skills/confluence.png" },
    ]
  },
]

export function SkillsGrid() {
  return (
    <div className="space-y-12">
      {skillCategories.map((category) => (
        <div key={category.name}>
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {category.skills.map((skill) => (
              <div key={skill.name} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 relative mb-2">
                  <Image
                    src={skill.image}
                    alt={`${skill.name} logo`}
                    layout="fill"
                    objectFit="contain"
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

