export type Project = {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  link?: string;
  github?: string;
  githubBackend?: string; // <-- ¡ESTA ES LA LÍNEA CLAVE!
  size?: "small" | "medium" | "large";
};