import PropTypes from "prop-types";

export default function FieldsetHeader({ headerText }) {
	return <h2>{headerText}</h2>;
}

FieldsetHeader.propTypes = {
	headerText: PropTypes.string.isRequired,
};

FieldsetHeader.defaultProps = {
	headerText: "Section",
};
