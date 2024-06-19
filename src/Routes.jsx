import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import NotFound from '../src/pages/NotFound';








const LandingPageUI = React.lazy(() => import("../src/pages/LandingPageUI/index"));


const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPageUI />} />
          <Route path="*" element={<NotFound />} />
        
   
        
         
          
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;