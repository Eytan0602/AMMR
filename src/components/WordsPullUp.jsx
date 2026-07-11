import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
  delayStart = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <span key={i} className="overflow-hidden inline-block mr-[0.28em]">
            <motion.span
              className="inline-block relative"
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: delayStart + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {isLast && showAsterisk && (
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                  *
                </span>
              )}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
