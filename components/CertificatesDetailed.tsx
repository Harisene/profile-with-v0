import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const certificates = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 2023",
    link: "https://www.credly.com/badges/b2483e73-8e94-4370-a55a-4a85558ba752/linked_in_profile",
    image: "/certificates/aws.jpeg",
  },
  {
    name: "Mastering Next.js 13 with TypeScript",
    issuer: "Code With Mosh",
    date: "Nov 2024",
    image: "/certificates/mosh.jpeg",
  },
  {
    name: "The Complete React Testing Course",
    issuer: "Code With Mosh",
    date: "Apr 2024",
    image: "/certificates/mosh.jpeg",
  },
  {
    name: "Flutter & Dart - The Complete Guide [2023 Edition]",
    issuer: "Udemy",
    date: "Mar 2023",
    link: "https://www.udemy.com/certificate/UC-18e7d4a2-3f4a-4571-845d-d8aec8bed268/",
    image: "/certificates/udemy.jpeg",
  },
  {
    name: "Javascript Unit Testing - The Practical Guide",
    issuer: "Udemy",
    date: "Jul 2022",
    link: "https://www.udemy.com/certificate/UC-4b2f1b62-7ecb-454e-a636-cf19c6548d80/",
    image: "/certificates/udemy.jpeg",
  },
  {
    name: "React Native - The Practical Guide [2022]",
    issuer: "Udemy",
    date: "May 2022",
    link: "https://ude.my/UC-182e6b8d-6fd2-47e3-a6ca-2d2680cf58cc",
    image: "/certificates/udemy.jpeg",
  },
  {
    name: "Mastering React",
    issuer: "Code With Mosh",
    date: "Jan 2021",
    image: "/certificates/mosh.jpeg",
  },
  {
    name: "Problem Solving (Intermediate) Certificate",
    issuer: "HackerRank",
    date: "Sep 2020",
    link: "https://www.hackerrank.com/certificates/e3e7a6f9a0c0",
    image: "/certificates/hackerrank.jpeg",
  },
  {
    name: "Python (Basic) Certificate",
    issuer: "HackerRank",
    date: "Sep 2020",
    link: "https://www.hackerrank.com/certificates/1dc5528990a5",
    image: "/certificates/hackerrank.jpeg",
  },
  {
    name: "Python (Intermediate) Certificate",
    issuer: "HackerRank",
    date: "Sep 2020",
    link: "https://www.hackerrank.com/certificates/2bce8c6ceb41",
    image: "/certificates/hackerrank.jpeg",
  },
];

export function CertificatesDetailed() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {certificates.map((cert, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col"
        >
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 relative mr-4">
              <Image
                src={cert.image}
                alt={`${cert.issuer} logo`}
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{cert.name}</h2>
              <p className="text-primary">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground">{cert.date}</p>
            </div>
          </div>
          {cert.link && (
            <Link
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto self-end text-primary hover:text-primary-dark transition-colors"
            >
              <ArrowUpRight className="h-6 w-6" />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}