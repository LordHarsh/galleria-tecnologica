export type Badge = {
  _id: string;
  _createdAt: string;
  title: string;
  display: boolean;
  slug: string;
  tagUrl: string;
  skillUrl: string;
  category: "language" | "framework" | "ide" | "algorithm" | "field";
  level: "beginner" | "intermediate" | "professional";
};
