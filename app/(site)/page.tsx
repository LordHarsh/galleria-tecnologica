/* eslint-disable @next/next/no-img-element */
import { getProjects, getBadges } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import Tag from "./components/tag";
import badge from "@/sanity/schemas/badge-schema";
import AutoAwesomeSharpIcon from "@mui/icons-material/AutoAwesomeSharp";
import StarHalfIcon from "@mui/icons-material/StarHalf";

export default async function Home() {
  const projects = await getProjects();
  const badges = await getBadges();
  const categories = [
    {
      name: "Languages",
      title: "language",
    },
    {
      name: "Web Development",
      title: "webdev",
    },
    {
      name: "AI/ML",
      title: "ai_ml",
    },
    {
      name: "Databases",
      title: "database",
    },
  ];

  return (
    <div className="py-5">
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
      <h2 className="mt-24 mb-10 text-bold text-gray-700 text-3xl">
        Skills & Technoligies
      </h2>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <div className="flex flex-col gap-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border border-slate-200 bg-slate-100 lg:bg-white items-center flex flex-col lg:flex-row h-full rounded-3xl overflow-clip font-semibold hover:font-bold hover:scale-101 hover:bg-gray-200 transition duration-100 shadow-lg"
          >
            <div className="lg:w-2/12 min-w-min w-11/12 lg:border border-slate-300 m-2 p-2 rounded-3xl text-center bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg lg:text-2xl bg-gray-300">
              {category.name}
            </div>
            <div className="w-full lg:w-7/12 flex flex-row justify-center">
              <div className="box-content border-slate-300 m-2 p-2 rounded-3xl flex-initial">
                <AutoAwesomeSharpIcon sx={{ color: "#FFD700", height: "100%" }} />
              </div>
              <div className="grow justify-center flex flex-wrap gap-3 h-full">
                {badges
                  .filter(
                    (badge) =>
                      badge.category.includes(category.title) &&
                      badge.display &&
                      (badge.level === "professional" ||
                        badge.level === "intermediate")
                  )
                  .map((badge) => (
                    <div 
                    key={badge._id} 
                    className="min-w-min"
                    >
                      {Tag(badge)}
                    </div>
                    ))}
              </div>
            </div>
            <div className="w-full lg:w-3/12 flex flex-row justify-center">
              <div className="box-content border-slate-300 m-2 p-2 rounded-3xl flex-initial">
                <StarHalfIcon sx={{ color: "#4169E1", height: "100%" }} />
              </div>
              <div className="grow justify-center flex flex-wrap gap-3 h-full">
                {badges
                  .filter(
                    (badge) =>
                      badge.category.includes(category.title) &&
                      badge.display &&
                      badge.level === "beginner"
                  )
                  .map((badge) => (
                    <div 
                    key={badge._id} 
                    className="min-w-min"
                    >
                      {Tag(badge)}
                    </div>
                    ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
