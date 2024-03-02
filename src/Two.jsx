import PropTypes from "prop-types";

const Two = ({ children }) => children;

Two.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Two;
