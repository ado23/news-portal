import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ArticlePage from "pages/Article";
import NotFound from "pages/NotFound";

import Loader from "containers/Loader";

const App = () => {
  return (
    <div style={{ background: "whitesmoke" }}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Loader />
      </Suspense>
    </div>
  );
};

export default App;
