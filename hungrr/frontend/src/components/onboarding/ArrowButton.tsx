import { ArrowRight } from "lucide-react";

interface ArrowButtonProps {
  onClick: () => void;
}

const ArrowButton = ({ onClick }: ArrowButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        h-14
        w-14
        rounded-full
        bg-white
        flex
        items-center
        justify-center
        shadow-card
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
      "
    >
      <ArrowRight
        size={24}
        strokeWidth={2.5}
        className="text-secondary"
      />
    </button>
  );
};

export default ArrowButton;