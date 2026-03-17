export const getExperienceData = (t: (key: string) => string) => [
  {
    company: "Proyecto 'Camino de Santiago'",
    role: t('experience.jobs.camino.role'),
    date: "Dic 19 - Presente",
    description: t('experience.jobs.camino.desc'),
    stack: ["React", "Node.js", "Express", "MongoDB"],
    logo: "CS"
  },
  {
    company: "Proyecto Personal",
    role: t('experience.jobs.personal.role'),
    date: "Dic 22 - Dic 30",
    description: t('experience.jobs.personal.desc'),
    stack: ["React", "Node.js", "MongoDB"],
    logo: "PP"
  },
];
