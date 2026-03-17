import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Business Manager",
    description:
      "Panel de administración completo con gráficos en tiempo real y gestión de inventario.",
    images: ["/assets/images/projects/dashboard.png"],
    technologies: ["React", "TypeScript", "Tailwind", "Recharts"],
    link: "",
    github: "",
    size: "large",
  },
  {
    id: 2,
    title: "SOLe",
    description: "Aplicación de productividad tipo Trello con drag & drop.",
    images: ["/assets/images/projects/tasks.png"],
    technologies: ["React", "Zustand", "Framer Motion"],
    link: "",
    size: "medium",
  },
  {
    id: 3,
    title: "Weather Widget",
    description: "Consumo de API del tiempo con geolocalización.",
    images: ["/assets/images/projects/weather.png"],
    technologies: ["TypeScript", "OpenWeatherMap"],
    link: "",
    size: "small",
  },
  {
    id: 4,
    title: "Portfolio v1",
    description: "Mi primer sitio web personal minimalista.",
    images: ["/assets/images/projects/portfolio.png"],
    technologies: ["HTML", "CSS", "JS"],
    size: "small",
  },
];
