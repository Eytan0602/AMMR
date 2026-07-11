import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="seguridad" className="bg-black py-20 sm:py-28 md:py-36 px-4 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[85%] h-[75%] bg-emerald-500/25 blur-[130px] rounded-[2rem]" />
      </div>

      <div
        ref={ref}
        className="relative bg-transparent max-w-6xl mx-auto text-center px-6 sm:px-10 md:px-16 py-16 sm:py-20 md:py-24"
      >
        <p className="text-emerald-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6 sm:mb-8 font-semibold">
          Seguridad ciudadana
        </p>

        <div className="max-w-4xl mx-auto leading-[1.1] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 sm:mb-10 text-[#E1E0CC]">
          <WordsPullUpMultiStyle
            segments={[
              { text: "Unimos a los vecinos para ", className: "font-normal text-[#E1E0CC]" },
              { text: "recuperar las calles.", className: "italic font-serif text-emerald-400" },
            ]}
          />
        </div>

        <p
          className="text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-16"
          style={{ lineHeight: 1.6 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-4xl sm:text-5xl font-bold text-[#E1E0CC] mb-2 tracking-tight">
              10k+
            </span>
            <span className="text-gray-500 text-xs sm:text-sm">Vecinos activos</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <span className="text-4xl sm:text-5xl font-bold text-[#E1E0CC] mb-2 tracking-tight">
              500+
            </span>
            <span className="text-gray-500 text-xs sm:text-sm">Alertas verificadas/mes</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="text-4xl sm:text-5xl font-bold text-[#E1E0CC] mb-2 tracking-tight">
              2 min
            </span>
            <span className="text-gray-500 text-xs sm:text-sm">Tiempo de respuesta</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
