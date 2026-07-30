import BrandLogo from "../../components/splash/BrandLogo";
import SplashTagline from "../../components/splash/SplashTagline";
import SplashLoader from "../../components/splash/SplashLoader";
import useSplash from "../../hooks/useSplash";

const Splash = () => {
  useSplash();

  return (
    <main
      className="
      relative
      h-screen
      w-full
      overflow-hidden
      bg-primary
      "
    >
      <BrandLogo />

      <SplashTagline />

      <SplashLoader />
    </main>
  );
};

export default Splash;