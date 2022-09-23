import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

import {
  CardImage,
  CardBody,
  CardTitle,
  CardTextContainer
} from "./styledComponents";
import images from "assets/images";

import ReadMore from "./ReadMore";

const NewsCard = ({ article }) => {
  const { urlToImage, title, description } = article;

  return (
    <Card>
      <CardImage
        variant="top"
        src={urlToImage ? urlToImage : images.imageNotFound}
        alt="No image found"
      />

      <CardBody>
        <CardTitle className="card-title text-uppercase h6">{title}</CardTitle>
        <hr />

        <CardTextContainer>
          <Card.Text className="h7">{description}</Card.Text>
        </CardTextContainer>
      </CardBody>

      <Card.Footer>
        <ReadMore article={article} />
      </Card.Footer>
    </Card>
  );
};

NewsCard.propTypes = {
  article: PropTypes.object.isRequired
};

export default NewsCard;
