import PropTypes from "prop-types";
import "../styles/editor/ToggleFields.css";

export default function ToggleFields({ toggleFieldsFunc, bonusFieldsShown }) {
	const handleClick = () => {
		toggleFieldsFunc();
	};

	return (
		<button className="toggle-bonus-fields" type="button" onClick={handleClick}>
			{bonusFieldsShown ? "Hide additional fields -" : "Show additional fields +"}
		</button>
	);
}

ToggleFields.propTypes = {
	toggleFieldsFunc: PropTypes.func.isRequired,
	bonusFieldsShown: PropTypes.bool.isRequired,
};
