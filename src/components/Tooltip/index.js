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

export default TooltipComponent;
