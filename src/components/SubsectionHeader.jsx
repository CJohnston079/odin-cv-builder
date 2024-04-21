// import PropTypes from "prop-types";
import "../styles/editor/SubsectionHeader.css";

export default function SubsectionHeader() {
	return (
		<div className="subsection-header">
			<div>
				<h3>Subsection heading</h3>
				<span className="info-text">Details</span>
			</div>
			<button type="button">
				<img
					src="./src/assets/icons/chevron.svg"
					// alt={!isActive ? "Expand section" : "Collapse section"}
					// title={!isActive ? "Expand section" : "Collapse section"}
					className="icon"
					// style={{ transform: isActive ? "rotate(180deg)" : "rotate(0deg)" }}
				/>
			</button>
		</div>
	);
}
