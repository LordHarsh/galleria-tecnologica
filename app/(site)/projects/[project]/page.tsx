import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div className="pt-5 flex flex-col md:flex-row md:gap-10 lg:gap-20">
      <div className="basis-2/3 overflow-y-auto">
        <div className="flex items-center justify-between">
          <h1 className="pb-2 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
            {project.name}
          </h1>
          <a
            href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-purple-500 hover:text-purple-100 transition"
          >
            View in GitHub 
          </a>
        </div>
        {/* Content goes here */}
        <div className="prose mt-5">
          <PortableText value={project.content} />
        </div>
      </div>

      <div className="basis-1/3 h-fit">
        {/* Image goes here */}
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          //layout="responsive"
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl sticky"
        />
      </div>
    </div>
  );
}
