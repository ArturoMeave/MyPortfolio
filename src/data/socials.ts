import { Github, Linkedin, Mail, Smartphone, MapPin } from "lucide-react";

export const socials = [
  {
    id: "email",
    icon: Mail,
    href: "mailto:arturomeave.dev@gmail.com",
    label: "arturomeave.dev@gmail.com",
    color: "text-orange-500",
    titleKey: "contact.form.email"
  },
  {
    id: "phone",
    icon: Smartphone,
    href: "tel:+34664539243",
    label: "+34 664 539 243",
    color: "text-orange-500",
    titleKey: "contact.form.phone"
  },
  {
    id: "location",
    icon: MapPin,
    href: null,
    label: "Madrid, España (Remoto)",
    color: "text-orange-500",
    titleKey: "contact.form.location"
  },
  {
    id: "github",
    icon: Github,
    href: "https://github.com/arturo54535345",
    label: "GitHub",
    color: "text-orange-500"
  },
  {
    id: "linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/arturo-meave/",
    label: "LinkedIn",
    color: "text-orange-500"
  }
];
