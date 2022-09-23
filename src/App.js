import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ArticleDetailsPage from "pages/Article";
import EverythingPage from "pages/EverythingPage";
import NotFound from "pages/NotFound";

import Loader from "containers/Loader";
import AppContainer from "layout/AppContainer";

const App = () => (
  <AppContainer>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/articleDetails" element={<ArticleDetailsPage />} />
        <Route path="/everything" element={<EverythingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Loader />
    </Suspense>
  </AppContainer>
);

export default App;
