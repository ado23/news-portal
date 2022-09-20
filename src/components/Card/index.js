import React from "react";
import { Card } from "react-bootstrap";

import images from "assets/images";
import { CardImage } from "./styledComponents";

const NewsCard = ({ urlToImage, title, description }) => (
  <Card>
    <CardImage
      variant="top"
      src={urlToImage ? urlToImage : images.imageNotFound}
      alt="No image found"
    />

    <Card.Body style={{ height: "18rem" }}>
      <Card.Title className="card-title text-uppercase h6">{title}</Card.Title>
      <hr />
      <Card.Text style={{ fontSize: "14px" }}>{description}</Card.Text>
    </Card.Body>

    <Card.Footer>
      <small className="text-muted">Read more</small>
    </Card.Footer>
  </Card>
);

export default NewsCard;
