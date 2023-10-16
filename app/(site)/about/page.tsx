import Link from "next/link";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CollageCard from "../components/collageCard";

const About = () => {
  return (
    <div className="mb-15">
      

      <h2 className="m-10 text-bold text-gray-700 text-3xl">Education</h2>

      {/* Education Card */}
      <CollageCard/>
    </div>
  );
};

export default About;