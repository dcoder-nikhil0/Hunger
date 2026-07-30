interface HeroSectionProps {
  image: string;
}
import { motion } from "framer-motion";

const HeroSection = ({ image }: HeroSectionProps) => {
  return (
    <section className="relative flex h-[48vh] items-center justify-center rounded-b-[48px] bg-primary px-10">
      <motion.img
        key={image}
        src={image}
        alt=""
        draggable={false}
        className="
    w-[270px]
    object-contain
    "
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.4,
        }}
      />
    </section>
  );
};

export default HeroSection;
