import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ArticleDetailsPage from "pages/Article";
import EverythingPage from "pages/EverythingPage";
import NotFound from "pages/NotFound";

import Loader from "containers/Loader";

const App = () => {
  return (
    <div
      style={{
        background: "whitesmoke",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/articleDetails" element={<ArticleDetailsPage />} />
          <Route path="/everything" element={<EverythingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Loader />
      </Suspense>
    </div>
  );
};

export default App;
