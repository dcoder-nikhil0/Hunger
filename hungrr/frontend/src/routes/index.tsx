import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "../pages/Splash";
import Onboarding from "../pages/Onboarding";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Splash />}
        />

        <Route
          path="/onboarding"
          element={<Onboarding />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;