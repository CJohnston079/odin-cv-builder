import PropTypes from "prop-types";
// import "../styles/editor/ToggleFields.css";

export default function AddFields({ addFieldsFunc }) {
	const handleClick = () => {
		addFieldsFunc();
	};

	return (
		<button className="add-fields" type="button" onClick={handleClick}>
			+ Add fields
		</button>
	);
}

AddFields.propTypes = {
	addFieldsFunc: PropTypes.func.isRequired,
};
