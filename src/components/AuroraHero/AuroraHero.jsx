import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const NIGHT_COLORS = ["#a03adb", "#94acd0", "#7423ae", "#e3e6eb"];

export const AuroraHero = () => {
  const nightColor = useMotionValue(NIGHT_COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 100% at 50% 0%,  #303134 50%, ${nightColor}`;

  useEffect(() => {
    animate(nightColor, NIGHT_COLORS, {
      ease: "easeInOut",
      duration: 60,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="absolute grid h-full w-full place-content-center bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={100} count={2000} factor={2} face speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
