import { PropTypes } from "prop-types";

export default function Button({ 
  variant, 
  type, 
  children, 
}) {
  return (
    <button className="btn" data-type={variant} type={type}>
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
}
