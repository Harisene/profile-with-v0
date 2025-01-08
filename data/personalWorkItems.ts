import { Youtube, Pen, Package } from 'lucide-react'

export const personalWorkItems = [
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

