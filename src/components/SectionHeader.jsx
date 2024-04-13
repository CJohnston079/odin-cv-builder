import PropTypes from "prop-types";
import "../styles/editor/SectionHeader.css";

export default function SectionHeader({ header, isActive, onShow }) {
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

SectionHeader.propTypes = {
	header: PropTypes.object.isRequired,
	isActive: PropTypes.bool.isRequired,
	onShow: PropTypes.func.isRequired,
};

SectionHeader.defaultProps = {
	headerText: "Section",
};
