import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import images from "assets/images";
import { setArticle } from "pages/Article/actions";
import { CardImage } from "./styledComponents";

const NewsCard = ({
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
    <Card>
      <CardImage
        variant="top"
        src={urlToImage ? urlToImage : images.imageNotFound}
        alt="No image found"
      />

      <Card.Body style={{ height: "18rem" }}>
        <Card.Title className="card-title text-uppercase h6">
          {title}
        </Card.Title>
        <hr />
        <Card.Text style={{ fontSize: "14px" }}>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline-secondary" onClick={() => handleOnClick()}>
          Read more
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
