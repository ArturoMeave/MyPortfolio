import { FadeIn } from "../../components/animations/FadeIn";
import { TypewriterText } from "../../components/animations/TypewriterText";
import { Code2, LayoutTemplate, Cloud, Database, Wrench, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getSkillsData } from "../../data/skills";
import type { SkillItem } from "../../data/skills";

const IconMap: Record<string, LucideIcon> = {
  Code2,
  LayoutTemplate,
  Cloud,
  Database,
  Wrench,
  Award
};

const SkillIcon = ({ item }: { item: SkillItem }) => {
  if (!item.slug) {
    return (
      <div className="w-6 h-6 shrink-0 flex items-center justify-center text-gray-400/60 group-hover/item:text-gray-400 transition-colors">
        <span className="w-2 h-2 rounded-full bg-current"></span>
      </div>
    );
  }

  const isDevicon = item.cdn === 'devicon';
  const iconUrl = isDevicon 
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.slug}/${item.slug}-original.svg`
    : `https://cdn.simpleicons.org/${item.slug}`;

  const placeholderIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTNhM2FmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBvbHlnb24gcG9pbnRzPSIxNiAzIDIxIDggOCAyMSA3IDIxIDEwIDE4IDE2IDMiPjwvcG9seWdvbj48L3N2Zz4=';

  return (
    <div className="w-6 h-6 shrink-0 flex items-center justify-center">
      <img 
        src={iconUrl} 
        alt={item.name}
        className="w-full h-full object-contain filter grayscale opacity-60 transition-all duration-300 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-110"
        onError={(e) => { (e.target as HTMLImageElement).src = placeholderIcon; }}
      />
    </div>
  );
};

export const Skills = () => {
  const { t } = useTranslation();
  const categories = getSkillsData(t);

  return (
    <section id="skills" className="space-y-12">
      <FadeIn>
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">
            {t('skills.label')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            <TypewriterText text={t('skills.title')} />
          </h3>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const Icon = IconMap[category.iconName as keyof typeof IconMap] || Code2;
          
          return (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group h-full p-6 flex flex-col gap-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10">
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20 transition-colors">
                    <Icon size={24} className="text-orange-500" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {t(category.titleKey)}
                  </h4>
                </div>

                <div className="flex-1">
                  {category.items.length === 0 ? (
                    <div className="flex items-center justify-center h-full opacity-30">
                      <span className="text-sm italic text-gray-500">Próximamente...</span>
                    </div>
                  ) : (
                    <div className={`grid gap-x-4 gap-y-4 ${category.items.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                      {category.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg transition-colors group/item hover:bg-white/5 border border-transparent hover:border-white/5">
                          <SkillIcon item={item} />
                          <span className="text-sm font-medium text-gray-400 group-hover/item:text-white transition-colors truncate">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
};
;