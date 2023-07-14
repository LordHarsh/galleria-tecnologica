import { Badge } from "@/types/Badge";
const Tag = (badge: Badge) => {
  return (
    <a
      href={badge.skillUrl}
      target="_blank"
      rel="noopener noreferrer"
      key={badge._id}
    >
      <img
        className="h-10 m-2 font-medium text-white transition-colors duration-300 hover:scale-105 hover:border-blue-500 transition  rounded-full shadow-md"
        src={badge.tagUrl}
        alt={badge.title}
      />
    </a>
  );
};

export default Tag;
