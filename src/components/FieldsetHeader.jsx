import PropTypes from "prop-types";
import "../styles/editor/FieldsetHeader.css";

export default function FieldsetHeader({ headerText, isActive, onShow }) {
	return (
		<div className="section-header">
			<h2>{headerText}</h2>
			<button
				type="button"
				onClick={onShow}
				style={{ transform: isActive ? "rotate(180deg)" : "rotate(0deg)" }}
			>
				<img src="./src/assets/icons/chevron.svg" alt="" />
			</button>
		</div>
	);
}

FieldsetHeader.propTypes = {
	headerText: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
	onShow: PropTypes.func.isRequired,
};

FieldsetHeader.defaultProps = {
	headerText: "Section",
};
