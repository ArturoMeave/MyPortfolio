import { useTranslation } from "react-i18next";
import { LanguageToggle } from "../ui/LanguageToggle";
import fotoPerfil from "../../assets/foto-perfil.jpg";

export const MobileHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:hidden sticky top-0 z-50 w-full bg-black/60 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full overflow-hidden border border-white/10 bg-white/5">
          <img
            src={fotoPerfil}
            alt="Arturo Meave"
            className="h-full w-full object-cover opacity-90"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white tracking-tight">Arturo Meave</span>
          <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
            {t("sidebar.role")}
          </span>
        </div>
      </div>

      <div className="scale-90 origin-right">
        <LanguageToggle />
      </div>
    </div>
  );
};
