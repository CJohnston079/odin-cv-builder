import PropTypes from "prop-types";
import "../styles/editor/FieldsetHeader.css";

export default function FieldsetHeader({ header, isActive, onShow }) {
	return (
		<div className="section-header" onClick={onShow}>
			<img className="icon" src={header.iconSrc} />
			<h2>{header.heading}</h2>
			<button type="button">
				<img
					src="./src/assets/icons/chevron.svg"
					alt={!isActive ? "Expand section" : "Collapse section"}
					title={!isActive ? "Expand section" : "Collapse section"}
					className="icon"
					style={{ transform: isActive ? "rotate(180deg)" : "rotate(0deg)" }}
				/>
			</button>
		</div>
	);
}

FieldsetHeader.propTypes = {
	header: PropTypes.object.isRequired,
	isActive: PropTypes.bool.isRequired,
	onShow: PropTypes.func.isRequired,
};

FieldsetHeader.defaultProps = {
	headerText: "Section",
};
