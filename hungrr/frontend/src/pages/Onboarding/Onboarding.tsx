import { AnimatePresence, motion } from "framer-motion";

import BottomSheet from "../../components/onboarding/BottomSheet";
import GetStartedButton from "../../components/onboarding/GetStartedButton";
import HeroSection from "../../components/onboarding/HeroSection";
import OnboardingContent from "../../components/onboarding/OnboardingContent";
import PageIndicator from "../../components/onboarding/PageIndicator";
import SkipButton from "../../components/onboarding/SkipButton";

import { onboardingData } from "../../data/onboardingData";
import useOnboarding from "../../hooks/useOnboarding";

const Onboarding = () => {
  const { currentPage, nextPage, skip } = useOnboarding();

  const current = onboardingData[currentPage];

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={current.id}
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 0.20,
        }}
        className="flex h-full flex-col"
      >
        <SkipButton onSkip={skip} />
        <HeroSection image={current.image} />

        <BottomSheet>
          <PageIndicator
            currentPage={currentPage}
            totalPages={onboardingData.length}
          />

          <OnboardingContent
            title={current.title}
            description={current.description}
          />

          <GetStartedButton onClick={nextPage} />
        </BottomSheet>
      </motion.div>
    </AnimatePresence>
  );
};

export default Onboarding;
