import Link from "next/link";
import Image from "next/image";
interface ContactCardProps {
  name: string;
  href: string;
  image: string;
  description: string;
  isExternal?: boolean;
};
const ContactCard = ({
  name,
  href,
  image,
  description,
  isExternal=true,
}: ContactCardProps) => {
  return (
    <a
      target={isExternal ? "_blank" : undefined}
      href={href}
      className="bg-white border  rounded-3xl shadow-md p-8 mx-3 mb-8 flex flex-col lg:flex-row gap-6 justyfy-around items-center hover:shadow-lg hover:bg-slate-200 hover:scale-105 transform transition-all duration-300 ease-in-out"
    >
      <div className="lg:w-3/12 rounded-3xl">
        <Image
          src={image}
          alt={name}
          width={750}
          height={300}
          className="rounded-3xl p-4 cover border border-gray-500"
        />
      </div>
      <div className="lg:w-5/12 flex-col">
        <h2 className="font-bold md:text-3xl  text-2xl pb-3 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent bg-gray-300">
          {name}
        </h2>
      </div>
      <div className="lg:w-4/12 flex-col text-center">
        <p className="lg:text-2xl text-lg text-gray-600 font-bold">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ContactCard;
