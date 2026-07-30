import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton";

interface GetStartedButtonProps {
  onClick: () => void;
}

const GetStartedButton = ({ onClick }: GetStartedButtonProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      className="mt-10 flex items-center justify-center"
    >
      <div className="flex items-center rounded-full bg-white p-1 shadow-button">
        {/* Text Button */}
        <button
          onClick={onClick}
          className="
            h-14
            rounded-full
            bg-secondary
            px-8
            font-afacad
            text-[17px]
            font-semibold
            text-white
            transition-all
            duration-300
          "
        >
          Get Started
        </button>

        {/* Arrow */}
        <ArrowButton onClick={onClick} />
      </div>
    </motion.div>
  );
};

export default GetStartedButton;