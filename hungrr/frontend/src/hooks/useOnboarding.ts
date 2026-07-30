import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onboardingData } from "../data/onboardingData";

const AUTO_DELAY = 2500;

const useOnboarding = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPage < onboardingData.length - 1) {
        setCurrentPage((prev) => prev + 1);
      } else {
        navigate("/login");
      }
    }, AUTO_DELAY);

    return () => clearTimeout(timer);
  }, [currentPage, navigate]);

  const nextPage = () => {
    if (currentPage < onboardingData.length - 1) {
      setCurrentPage((prev) => prev + 1);
    } else {
      navigate("/login");
    }
  };

  const skip = () => navigate("/login");

  return {
    currentPage,
    nextPage,
    skip,
  };
};

export default useOnboarding;
