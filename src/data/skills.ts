export type SkillItem = {
  name: string;
  slug: string;
  cdn?: 'devicon' | 'simpleicons';
};

export type SkillCategory = {
  titleKey: string;
  iconName: string;
  items: SkillItem[];
};

export const getSkillsData = (t: (key: string) => string): SkillCategory[] => [
  {
    titleKey: 'skills.categories.languages',
    iconName: 'Code2',
    items: [
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3", cdn: "devicon" },
    ]
  },
  {
    titleKey: 'skills.categories.frameworks',
    iconName: 'LayoutTemplate',
    items: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Tailwind", slug: "tailwindcss" },
      { name: "Framer", slug: "framer" },
      { name: "Express", slug: "express" },
      { name: "Mongoose", slug: "mongoose" },
    ]
  },
  {
    titleKey: 'skills.categories.cloud',
    iconName: 'Cloud',
    items: [ { name: "Git", slug: "git", cdn: "devicon" } ]
  },
  {
    titleKey: 'skills.categories.database',
    iconName: 'Database',
    items: [ { name: "MongoDB", slug: "mongodb" } ]
  },
  {
    titleKey: 'skills.categories.tools',
    iconName: 'Wrench',
    items: [
      { name: "GitHub", slug: "github" },
      { name: "VS Code", slug: "vscode", cdn: "devicon" },
      { name: "Clean Code", slug: "" },
      { name: "Postman", slug: "postman", cdn: "devicon" },
    ]
  },
  {
    titleKey: 'skills.categories.certifications',
    iconName: 'Award',
    items: [ { name: "Neoland-Full Stack Bootcamp", slug: "" } ]
  }
];