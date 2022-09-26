import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ArticleDetailsPage from "pages/Article";
import EverythingPage from "pages/EverythingPage";
import NotFound from "pages/NotFound";

import Loader from "containers/Loader";
import AppContainer from "layout/AppContainer";

import ROUTE_PATHS from "routePaths";

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

export const App = () => (
  <AppContainer>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path={ROUTE_PATHS.Home} element={<LandingPage />} />
        <Route
          path={ROUTE_PATHS.ArticleDetails}
          element={<ArticleDetailsPage />}
        />
        <Route path={ROUTE_PATHS.Everything} element={<EverythingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Loader /> */}
      <LocationDisplay />
    </Suspense>
  </AppContainer>
);
