import Link from "next/link";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CollageCard from "../components/collageCard";

const About = () => {
  return (
    <div className="mb-15">
      <h2 className="m-5 text-bold text-gray-700 text-3xl">About Me</h2>

      <div className="bg-white border  rounded-3xl shadow-md p-8 mb-8">
        <p className="text-gray-600">
          Hello! I&apos;m Harsh Banka, and I have a strong interest in AI/ML and
          web development. I enjoy exploring the intersection of these fields
          and applying them to create innovative solutions. In addition to my
          technical pursuits, I am also passionate about continuously learning
          and improving my skills.
        </p>
      </div>

      <h2 className="m-10 text-bold text-gray-700 text-3xl">Education</h2>

      {/* Education Card */}
      <CollageCard/>
    </div>
  );
};

export default About;