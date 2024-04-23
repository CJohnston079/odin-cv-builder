import PropTypes from "prop-types";
import Fieldset from "./Fieldset";
import "../styles/editor/SectionBody.css";

export default function FieldsetContainer({ inputData, isActive }) {
	const defaultFields = inputData.inputs.filter(field => !field.optional);

	return (
		<div className={`section-body accordion ${isActive ? "accordion-active" : "accordion-hidden"}`}>
			<Fieldset fields={defaultFields} />
		</div>
	);
}

FieldsetContainer.propTypes = {
	inputData: PropTypes.shape({
		inputs: PropTypes.arrayOf(
			PropTypes.shape({
				inputType: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				description: PropTypes.string,
			})
		),
		hasSubsections: PropTypes.bool,
	}),
	isActive: PropTypes.bool.isRequired,
};
