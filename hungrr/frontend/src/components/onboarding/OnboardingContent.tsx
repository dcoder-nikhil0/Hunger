interface OnboardingContentProps {
  title: string;
  description: string;
}

const OnboardingContent = ({ title, description }: OnboardingContentProps) => {
  return (
    <div className="text-center px-5">
      <h1
        className="
          whitespace-pre-line
          font-afacad
          text-[32px]
        leading-[42px]
        font-bold
          text-secondary
        "
      >
        {title}
      </h1>

      <p
        className="
        mb-5
        mt-5
text-[15px]
leading-7
max-w-[320px]
text-dark
          font-medium
        "
      >
        {description}
      </p>
    </div>
  );
};

export default OnboardingContent;
