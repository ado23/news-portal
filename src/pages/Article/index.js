import React from "react";
import { useNavigate } from "react-router-dom";

// import { getTopHeadlines } from "./actions";

import Navbar from "layout/Navbar";
import Footer from "layout/Footer";
import MainContainer from "layout/MainContainer";

import Categories from "components/Categories";
import HeaderTitle from "components/HeaderTitle";

const Article = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <MainContainer>
        <HeaderTitle title="TRENDING NEWS" />

        <button onClick={() => navigate("/")}> KLIKNI ME</button>

        <Categories />
      </MainContainer>

      <Footer />
    </>
  );
};

export default Article;
