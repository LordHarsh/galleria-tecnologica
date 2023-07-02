import { getProjects, getBadges } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  const badges = await getBadges();
  return (
    <div>
      <h1 className="text-7xl font-extrabold text-gray-800">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Harsh
        </span>
        !
      </h1>

      <p className="mt-3 text-xl text-gray-600 shadow-sm">
        Ciao Everyone! Check out my projects
      </p>
      <div className="flex flex-wrap mt-6">
        {badges.map((badge) => (
          <a
            href={badge.skillUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={badge._id}
            >
            <img
            className="h-10 m-2 font-medium text-white transition-colors duration-300 hover:scale-105 hover:border-blue-500 transition duration-300 rounded-full shadow-md"
              src={badge.tagUrl}
              alt={badge.title}
              // width={100}
              // height={28}
            />
          </a>
        ))}
      </div>

      <h2 className="mt-24 text-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
