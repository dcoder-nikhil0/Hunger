interface Props {
  currentPage: number;
  totalPages: number;
}
import { motion } from "framer-motion";

const PageIndicator = ({ currentPage, totalPages }: Props) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      {Array.from({ length: totalPages }).map((_, index) => (
        <motion.div
          layout
          key={index}
          className={`
        h-2.5
        rounded-full
        transition-all

        ${currentPage === index ? "bg-secondary w-6" : "bg-gray-300 w-2.5"}
    `}
        />
      ))}
    </div>
  );
};

export default PageIndicator;
