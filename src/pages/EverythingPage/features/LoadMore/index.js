import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getArticles } from "pages/EverythingPage/actions";
import Container from "./styledComponents";
import LoadMoreButton from "components/LoadMore";

const LoadMore = () => {
  const { totalResults, filters } = useSelector(
    ({ articlesEverything }) => articlesEverything
  );
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

    dispatch(getArticles(filter));
  };

  return (
    <Container>
      <LoadMoreButton
        isDisabled={isLoadMoreDisabled()}
        onClickHandler={loadMore}
      />
    </Container>
  );
};

export default LoadMore;
