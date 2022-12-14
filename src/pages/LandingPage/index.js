import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "layout/Navbar";
import Footer from "layout/Footer";
import MainContainer from "layout/MainContainer";

import { reset } from "./actions";
import { getTopHeadlines } from "./actions";

import NoResults from "components/NoResults";
import RenderNewsCards from "components/Cards";
import HeaderTitle from "components/HeaderTitle";

import FilteringTab from "./filtering";
import LoadMore from "./features/LoadMore";
import Categories from "./features/Categories";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { filters, articles } = useSelector(({ articles }) => articles);

  useEffect(() => {
    dispatch(getTopHeadlines(filters));

    return () => dispatch(reset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div style={{ background: "whitesmoke" }}>
        <Navbar />

        <MainContainer>
          <HeaderTitle title="TRENDING NEWS" />
          <Categories />

          <FilteringTab />
          <RenderNewsCards articles={articles} />
          {articles.length > 0 && <LoadMore />}

          {articles.length === 0 && <NoResults title="No results" />}
        </MainContainer>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
