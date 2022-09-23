import { DropdownButton } from "react-bootstrap";
import styled from "styled-components";

export const StyledDropdownButton = styled(DropdownButton)`
  .dropdown-menu {
    min-width: 5rem !important;
    height: 18rem !important;
    overflow-y: scroll;
  }

  .dropdown-toggle {
    padding: 4px;
  }
`;
