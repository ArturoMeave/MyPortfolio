import { useState } from "react";
import { FadeIn } from "../../components/animations/FadeIn";
import { TypewriterText } from "../../components/animations/TypewriterText";
import { ArrowRight, Mail, Briefcase, FileText, Download, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export const Intro = () => {
  const { t } = useTranslation();
  // Este es el "interruptor" que controla si la ventana del CV está abierta o cerrada
  const [showCVModal, setShowCVModal] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-6 pt-10 pb-4">
        
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 w-fit mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-xs font-bold text-orange-500 tracking-wide uppercase">
                  {t('intro.badge')}
              </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.1]">
            <TypewriterText text={t('intro.title_1')} delay={0.2} speed={0.05} />
            <br />
            <TypewriterText 
              text={t('intro.title_2')} 
              delay={1.2} 
              speed={0.06} 
              className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 pb-4 md:pb-6"
            />
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="max-w-2xl text-lg text-gray-400 leading-relaxed">
            {t('intro.description')}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            
            <a 
              href="mailto:arturomeave.dev@gmail.com" 
              className="group relative flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition-all hover:bg-orange-500 hover:text-white active:scale-95"
            >
              <Mail size={18} />
              <span>{t('intro.cta_primary')}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a 
              href="#projects" 
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
            >
              <Briefcase size={18} className="text-gray-400 group-hover:text-white transition-colors" />
              <span>{t('intro.cta_secondary')}</span>
            </a>

            {/* Ahora esto es un botón que enciende el estado a 'true' */}
            <button 
              onClick={() => setShowCVModal(true)}
              className="group flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/5 px-7 py-3.5 text-sm font-bold text-orange-400 transition-all hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-300 active:scale-95"
            >
              <FileText size={18} className="transition-colors" />
              <span>Ver CV</span>
            </button>

          </div>
        </FadeIn>
      </div>

      {/* LA MAGIA: El Modal emergente para el CV */}
      <AnimatePresence>
        {showCVModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setShowCVModal(false)} // Si hacen clic en el fondo negro, se cierra
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro de la ventana
            >
              
              {/* Cabecera del Modal */}
              <div className="flex items-center justify-between border-b border-white/10 bg-black/50 px-6 py-4">
                <h3 className="text-lg font-bold text-white">Mi Currículum</h3>
                <div className="flex items-center gap-3">
                  
                  {/* Botón de descarga real */}
                  <a
                    href="/cv-arturo-meave.pdf"
                    download
                    className="flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-orange-600 active:scale-95"
                  >
                    <Download size={16} />
                    <span className="hidden sm:inline">Descargar</span>
                  </a>
                  
                  {/* Botón para cerrar */}
                  <button
                    onClick={() => setShowCVModal(false)}
                    className="rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Contenedor del PDF */}
              <div className="h-full w-full bg-zinc-900">
                <iframe
                  src="/cv-arturo-meave.pdf"
                  className="h-full w-full border-0"
                  title="CV Arturo Meave"
                />
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};