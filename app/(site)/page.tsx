/* eslint-disable @next/next/no-img-element */
import { getProjects, getBadges } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import Tag from "./components/tag";


export default async function Home() {
  const projects = await getProjects();
  const badges = await getBadges();
  const languageBadges = badges.filter(badge => badge.category.includes('language') && badge.display)
  const webDevBadges = badges.filter(badge => badge.category.includes('webdev') && badge.display)
  const ai_mlBadges = badges.filter(badge => badge.category.includes('ai_ml') && badge.display)

  return (
    <div className="pt-5">
      <h1 className="text-5xl font-extrabold text-gray-800">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Harsh
        </span>
        !
      </h1>

      <p className="mt-3 text-xl text-gray-600">
        Ciao Everyone! Check out my projects
      </p>

      <h2 className="mt-24 text-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition duration-300 shadow-lg"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent lg:text-lg">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
      
      {/* Here starts the skill tags */}
      {/* Trying a table */}
      
      
      
      {/* Languages */}
      <div className="flex flex-wrap mt-6">
        {languageBadges.map((badge) => (
          Tag(badge)
        ))}
      </div>

      {/* AI/ML */}
      <div className="flex flex-wrap mt-6">
        {ai_mlBadges.map((badge) => (
          Tag(badge)
        ))}
      </div>

      {/* Web dev */}
      <div className="flex flex-wrap mt-6">
        {webDevBadges.map((badge) => (
          Tag(badge)
        ))}
      </div>
    </div>
  );
}
