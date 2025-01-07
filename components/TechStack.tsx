import Image from 'next/image'

const techStack = [
  { name: 'ReactJS', src: '/tech/react.png' },
  { name: 'NextJS', src: '/tech/next.png' },
  { name: 'React Native', src: '/tech/react-native.png' },
  { name: 'AWS', src: '/tech/aws.png' },
  { name: 'Firebase', src: '/tech/firebase.png' },
  { name: 'NodeJS', src: '/tech/node.png' },
  { name: 'Express', src: '/tech/express.png' },
  { name: 'TypeScript', src: '/tech/typescript.png' },
  { name: 'MySQL', src: '/tech/mysql.png' },
  { name: 'MongoDB', src: '/tech/mongodb.png' },
]

export function TechStack() {
  return (
    <div className="py-12 bg-muted rounded-3xl">
      <h2 className="text-2xl font-bold text-center mb-8">Favorite Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {techStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center group">
            <div className="w-16 h-16 relative transition-transform transform group-hover:scale-110">
              <Image
                src={tech.src}
                alt={tech.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

