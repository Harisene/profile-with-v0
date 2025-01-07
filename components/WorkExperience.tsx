import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Tech Balance",
    period: "May 2024 - Present",
    location: "United Kingdom",
    logo: "/company/tech-balance.png",
  },
  {
    role: "Software Engineer",
    company: "EdTech Group PVT LTD",
    period: "Feb 2021 - May 2024",
    location: "Australia",
    logo: "/company/edtech.png",
  },
  {
    role: "Trainee Software Engineer",
    company: "Pearson Lanka Pvt LTD",
    period: "Aug 2019 - Feb 2020",
    location: "Sri Lanka",
    logo: "/company/pearson.png",
  },
];

export function WorkExperience() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Working experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 relative rounded-full overflow-hidden border border-gray-100">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-lg">{exp.role}</p>
                    <p className="text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.period}
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {index < experiences.length - 1 && (
              <hr className="border-t border-gray-200 mt-6" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/experience"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          More details
        </Link>
      </div>
    </div>
  );
}
