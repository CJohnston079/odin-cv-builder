import PropTypes from "prop-types";
import "../styles/editor/FieldsetHeader.css";

export default function FieldsetHeader({ headerText, onShow }) {
	return (
		<div className="section-header">
			<h2>{headerText}</h2>
			<button type="button" onClick={onShow}>
				+
			</button>
		</div>
	);
}

FieldsetHeader.propTypes = {
	headerText: PropTypes.string.isRequired,
	onShow: PropTypes.func.isRequired,
};

FieldsetHeader.defaultProps = {
	headerText: "Section",
};
