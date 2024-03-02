import PropTypes from "prop-types";

const One = ({ name, age }) => {
  return (
    <>
      <p>{`${name} a ${age} ans`}</p>
      <p>{`L'année prochain, ${name} aura ${age + 1} ans`}</p>
    </>
  );
};

One.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default One;
