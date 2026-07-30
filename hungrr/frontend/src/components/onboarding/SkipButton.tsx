interface SkipButtonProps {
  onSkip: () => void;
}

const SkipButton = ({ onSkip }: SkipButtonProps) => {
  return (
    <button
      onClick={onSkip}
      className="
        absolute
        top-8
        right-6
        z-20
        font-afacad
        text-[18px]
        font-bold
        text-secondary
        transition-opacity
        duration-200
        hover:opacity-70
      "
    >
      Skip
    </button>
  );
};

export default SkipButton;