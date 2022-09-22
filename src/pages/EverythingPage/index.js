import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "layout/Navbar";
import Footer from "layout/Footer";
import MainContainer from "layout/MainContainer";

import RenderNewsCards from "components/Cards";
import HeaderTitle from "components/HeaderTitle";

import FilteringTab from "./filtering";
import LoadMore from "./features/LoadMore";

import { reset, getArticles } from "./actions";

const EverythingPage = () => {
  const dispatch = useDispatch();
  const { articles, filters } = useSelector(
    ({ articlesEverything }) => articlesEverything
  );

  console.log("articlesarticlesarticlesarticles", articles);

  useEffect(() => {
    if (filters.q) dispatch(getArticles(filters));

    return () => dispatch(reset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />

      <MainContainer>
        <HeaderTitle title="EVERYTHING" />

        <FilteringTab />

        <RenderNewsCards articles={articles} />

        {articles.length > 0 && <LoadMore />}
      </MainContainer>

      <Footer />
    </>
  );
};

export default EverythingPage;
