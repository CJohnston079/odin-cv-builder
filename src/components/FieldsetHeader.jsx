import PropTypes from "prop-types";
import "../styles/editor/FieldsetHeader.css";

export default function FieldsetHeader({ headerText, iconSrc, isActive, onShow }) {
	return (
		<div className="section-header">
			<img src={iconSrc} />
			<h2>{headerText}</h2>
			<button type="button" onClick={onShow}>
				<img
					src="./src/assets/icons/chevron.svg"
					alt={!isActive ? "Expand section" : undefined}
					title={!isActive ? "Expand section" : undefined}
					style={{ transform: isActive ? "rotate(180deg)" : "rotate(0deg)" }}
				/>
			</button>
		</div>
	);
}

FieldsetHeader.propTypes = {
	headerText: PropTypes.string.isRequired,
	iconSrc: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
	onShow: PropTypes.func.isRequired,
};

FieldsetHeader.defaultProps = {
	headerText: "Section",
};
