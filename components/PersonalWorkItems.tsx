import Image from "next/image";
import Link from "next/link";
import { SkillTag } from "./SkillTag";
import { ExternalLink } from "lucide-react";
import { personalWorkItems } from "@/data/personalWorkItems";

export function PersonalWorkItems() {
  return (
    <div className="space-y-16">
      {personalWorkItems.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
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
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {item.period}
                </div>
                {item.link && (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {item.icon ? (
                      <item.icon className="h-5 w-5" />
                    ) : (
                      <ExternalLink className="h-5 w-5" />
                    )}
                  </Link>
                )}
              </div>
              <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                {item.name}
              </h2>
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
                      <span className="font-medium text-gray-900">
                        {stat.value}
                      </span>
                      <span className="text-gray-500"> {stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {item.images && (
            <div className="p-8">
              <h3 className="text-lg font-semibold mb-4">
                Project Screenshots
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {item.images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative aspect-[9/19] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <Image
                      src={img}
                      alt={`${item.name} screenshot ${imgIndex + 1}`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
