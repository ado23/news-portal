import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTopHeadlines } from "pages/LandingPage/actions";
import Container from "./styledComponents";
import LoadMoreButton from "components/LoadMore";

const LoadMore = () => {
  const { totalResults, filters } = useSelector(({ articles }) => articles);
  const dispatch = useDispatch();

  const isLoadMoreDisabled = () => {
    const currentResults = filters.page * filters.pageSize;
    return currentResults > totalResults ? true : false;
  };

  const loadMore = () => {
    const filter = {
      ...filters,
      page: filters.page + 1
    };

    dispatch(getTopHeadlines(filter));
  };

  return (
    <Container>
      <LoadMoreButton
        isDisabled={isLoadMoreDisabled()}
        onClickHandler={() => loadMore()}
      />
    </Container>
  );
};

export default LoadMore;
