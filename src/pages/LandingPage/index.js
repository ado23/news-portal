import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { reset } from "./actions";

import Navbar from "layout/Navbar";
import Footer from "layout/Footer";
import MainContainer from "layout/MainContainer";

import HeaderTitle from "components/HeaderTitle";
import { getTopHeadlines } from "./actions";

import FilteringTab from "./filtering";
import LoadMore from "./features/LoadMore";
import Categories from "./features/Categories";
import RenderNewsCards from "components/Cards";

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
          <LoadMore />
        </MainContainer>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
