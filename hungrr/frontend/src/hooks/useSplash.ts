import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useSplash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);
};

export default useSplash;