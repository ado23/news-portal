import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToggleButton } from "react-bootstrap";

import config from "./config";
import { Hashtag, Container } from "./styledComponents";
import { getTopHeadlines, resetArticlesData } from "../../actions";

const Categories = () => {
  const dispatch = useDispatch();
  const { filters, category } = useSelector(({ articles }) => {
    const { category } = articles.filters;

    return {
      filters: articles.filters,
      category: !category
        ? config.find((element) => element.value === "0").name
        : category
    };
  });

  const handleChange = (value) => {
    const newFilter = {
      ...filters,
      category:
        value === "0"
          ? null
          : config.find((element) => element.value === value)?.name
    };

    dispatch(resetArticlesData());
    dispatch(getTopHeadlines(newFilter));
  };

  return (
    <Container>
      {config.map((element, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant="dark"
          name="radio"
          value={element.value}
          checked={category === element.name}
          onChange={(e) => handleChange(e.currentTarget.value)}
        >
          <Hashtag
            className={`text-${element["color"]} border border-${element["color"]}`}
          >
            #
          </Hashtag>

          <span className="text-white text-uppercase"> {element.name}</span>
        </ToggleButton>
      ))}
    </Container>
  );
};
export default Categories;
