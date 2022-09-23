import PropTypes from "prop-types";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const TooltipComponent = ({ message, placement, children, ...rest }) => {
  const renderTooltip = (props) => (
    <Tooltip id="tooltip" {...props}>
      {message}
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="top" overlay={renderTooltip}>
      <div> {children} </div>
    </OverlayTrigger>
  );
};

TooltipComponent.propTypes = {
  message: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired
};

TooltipComponent.defaultProps = {
  placement: "top"
};

export default TooltipComponent;
