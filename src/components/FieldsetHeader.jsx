import PropTypes from "prop-types";
import "../styles/editor/FieldsetHeader.css";

export default function FieldsetHeader({ headerText }) {
	return (
		<div className="section-header">
			<h2>{headerText}</h2>
			<button>+</button>
		</div>
	);
}

FieldsetHeader.propTypes = {
	headerText: PropTypes.string.isRequired,
};

FieldsetHeader.defaultProps = {
	headerText: "Section",
};
