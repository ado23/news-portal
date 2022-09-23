import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "layout/Navbar";
import Footer from "layout/Footer";
import MainContainer from "layout/MainContainer";

import RenderNewsCards from "components/Cards";
import HeaderTitle from "components/HeaderTitle";

import FilteringTab from "./filtering";
import LoadMore from "./features/LoadMore";

import NoResults from "components/NoResults";

import { reset, getArticles } from "./actions";

const RenderContent = ({ articles }) => {
  if (articles.length === 0) return <NoResults title="No results" />;

  return (
    <>
      <RenderNewsCards articles={articles} />
      <LoadMore />
    </>
  );
};

const EverythingPage = () => {
  const dispatch = useDispatch();
  const { articles, filters } = useSelector(
    ({ articlesEverything }) => articlesEverything
  );

  useEffect(() => {
    if (filters.q) dispatch(getArticles(filters));

    return () => dispatch(reset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <Navbar />

        <MainContainer>
          <HeaderTitle title="EVERYTHING" />
          <FilteringTab />

          <RenderContent articles={articles} />
        </MainContainer>
      </div>

      <Footer />
    </>
  );
};

export default EverythingPage;
