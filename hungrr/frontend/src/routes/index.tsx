import { Routes, Route } from "react-router-dom";
import Splash from "../pages/Splash";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
    </Routes>
  );
};

export default AppRoutes;