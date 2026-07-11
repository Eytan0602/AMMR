import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import WordsPullUp from "./WordsPullUp";
import BackgroundMap from "./BackgroundMap";

export default function Hero({ onStart }) {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black">
        <BackgroundMap />

        <div className="absolute right-[6%] top-[10%] w-[46vw] h-[46vw] max-w-[520px] max-h-[520px] opacity-[0.35] pointer-events-none">
          <div className="relative w-full h-full rounded-full border border-alert/30">
            <div className="absolute inset-[15%] rounded-full border border-alert/25" />
            <div className="absolute inset-[32%] rounded-full border border-alert/20" />
            <div className="absolute inset-0 radar-sweep">
              <div
                className="absolute top-1/2 left-1/2 w-1/2 h-[2px] origin-left"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,90,60,0.9), rgba(255,90,60,0))",
                }}
              />
            </div>
            <div className="absolute top-[22%] left-[62%] w-2 h-2 rounded-full bg-alert alert-ping" />
            <div className="absolute top-[62%] left-[30%] w-2 h-2 rounded-full bg-alert alert-ping" style={{ animationDelay: "0.6s" }} />
          </div>
        </div>

        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

        <Navbar onLoginClick={onStart} />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-14">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 md:col-span-8">
              <h1
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="AMMR" showAsterisk />
              </h1>
            </div>

            <div className="col-span-12 md:col-span-4 flex flex-col gap-5 sm:gap-6 pb-2 md:pb-4">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.p>

              <motion.button
                onClick={onStart}
                className="group flex items-center gap-2 bg-gradient-to-r from-emerald-500 via-emerald-700 to-black rounded-full pl-6 sm:pl-7 pr-2 py-2 w-fit transition-all duration-300 border-none shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.55)] hover:scale-105 active:scale-98"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-white font-bold text-sm sm:text-base pr-2 tracking-wide">
                  Empezar a usar
                </span>
                <span className="bg-white rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black font-bold" />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
