import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setArticle } from "pages/Article/actions";

const ReadMore = ({
  article: {
    source: { name },
    author,
    urlToImage,
    title,
    description,
    publishedAt,
    content
  }
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = () => {
    const payload = {
      title,
      author,
      content,
      publishedAt,
      description,
      source: name,
      image: urlToImage
    };

    dispatch(setArticle(payload));
    navigate("/articleDetails");
  };

  return (
    <Button variant="outline-secondary" onClick={handleOnClick}>
      Read more
    </Button>
  );
};

ReadMore.propTypes = {
  article: PropTypes.object.isRequired
};

export default ReadMore;
