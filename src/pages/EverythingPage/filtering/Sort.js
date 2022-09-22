import { useSelector, useDispatch } from "react-redux";

import { Dropdown, DropdownButton } from "react-bootstrap";
import { getArticles, resetArticlesData } from "../actions";

const NavDropdownExample = () => {
  const dispatch = useDispatch();
  const { articles, filters } = useSelector(
    ({ articlesEverything }) => articlesEverything
  );
  const config = ["relevancy", "popularity", "publishedAt"];

  const handleSelect = (eventKey) => {
    dispatch(resetArticlesData());
    const newFilter = { ...filters, sortBy: eventKey };
    dispatch(getArticles(newFilter));
  };

  return (
    <Dropdown
      onSelect={(event) => handleSelect(event)}
      style={{ marginRight: "1rem" }}
    >
      <DropdownButton
        title="Sort by"
        id="dropdown-menu"
        variant="secondary"
        disabled={articles.length === 0}
      >
        {config.map((element, idx) => (
          <Dropdown.Item
            key={idx}
            as="button"
            eventKey={element}
            active={filters.sortBy === element}
          >
            {element}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Dropdown>
  );
};

export default NavDropdownExample;
