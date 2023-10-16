import Link from "next/link";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const CollageCard = () => {
  return (
    <a target="_blank" href="https://www.srmist.edu.in/">
      <div className="bg-white border flex flex-col lg:flex-row rounded-3xl shadow-md p-8 mb-8 gap-6 justyfy-around items-center hover:shadow-lg hover:bg-slate-200 hover:scale-105 transform transition-all duration-300 ease-in-out">
        <div className="lg:w-3/12 rounded-3xl">
          <Image
            src="/srm.jpeg"
            alt="SRM"
            width={750}
            height={300}
            className="rounded-3xl border border-gray-500"
          />
        </div>
        <div className="lg:w-5/12 flex-col text-center">
          <h2 className="font-bold md:text-3xl  text-2xl pb-3 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent bg-gray-300">
            SRM Institute of Science and Technology
          </h2>
          <Link
            href="https://goo.gl/maps/sSgJK5F5XvABVZrQ9"
            target="_blank"
            passHref
            className="flex justify-center items-center"
          >
            <div className="text-purple-600 text-sm font-semibold border border-purple-600 w-fit rounded-3xl p-1">
              <LocationOnIcon sx={{ color: "#9333EA" }} /> Chennai
            </div>
          </Link>
        </div>
        <div className="lg:w-4/12 flex-col text-center">
          <p className="lg:text-2xl text-lg text-gray-600 font-bold">
            Bachelor of Technology in CSE w/s in Big Data Analytics
          </p>
          <p className="lg:text-2xl text-lg text-gray-500">
            II<sup>nd</sup> Year
          </p>
        </div>
      </div>
    </a>
  );
};

export default CollageCard;
