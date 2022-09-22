import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ArticleDetailsPage from "pages/Article";
import NotFound from "pages/NotFound";

import Loader from "containers/Loader";

const App = () => {
  return (
    <div style={{ background: "whitesmoke" }}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articleDetails" element={<ArticleDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Loader />
      </Suspense>
    </div>
  );
};

export default App;
