export type Badge = {
  _id: string;
  _createdAt: string;
  title: string;
  display: boolean;
  slug: string;
  tagUrl: string;
  skillUrl: string;
  category: string;
  level: "beginner" | "intermediate" | "professional";
};
