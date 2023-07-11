import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-gray-600">
          Hello! I&apos;m Harsh, and I have a strong interest in AI/ML and web development. I enjoy exploring the intersection of these fields and applying them to create innovative solutions. In addition to my technical pursuits, I am also passionate about continuously learning and improving my skills.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <ul className="list-disc list-inside">
          <li>Junior School: [Name of Junior School]</li>
          <li>High School: [Name of High School]</li>
          <li>Current College: [Name of Current College]</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-xl font-bold mb-4">Connect with Me</h2>
        <div className="flex flex-wrap">
          {/* <SocialLink icon="/discord-icon.png" href="[Discord URL]" label="Discord" />
          <SocialLink icon="/linkedin-icon.png" href="[LinkedIn URL]" label="LinkedIn" />
          <SocialLink icon="/github-icon.png" href="[GitHub URL]" label="GitHub" />
          <SocialLink icon="/leetcode-icon.png" href="[LeetCode URL]" label="LeetCode" />
          <SocialLink icon="/email-icon.png" href="mailto:[Your Email]" label="Email" /> */}
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ icon, href, label }) => {
  return (
    <Link href={href}>
      <a
        className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 hover:text-gray-800 transition-colors duration-300 mr-4 mb-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={icon} alt={label} width={24} height={24} />
      </a>
    </Link>
  );
};

export default About;
