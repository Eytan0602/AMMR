import { motion, useTransform } from "framer-motion";

export default function AnimatedLetter({
  char,
  index,
  totalChars,
  scrollProgress,
}) {
  const charProgress = index / totalChars;
  const start = Math.max(0, charProgress - 0.1);
  const end = charProgress + 0.05;

  const opacity = useTransform(scrollProgress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
}
