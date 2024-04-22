import { useState } from "react";
import PropTypes from "prop-types";
import AddFields from "./AddFields";
import Fieldset from "./Fieldset";
import Subsection from "./Subsection";
import "../styles/editor/SectionBody.css";

export default function SectionBody({ inputData, isActive }) {
	const defaultFields = inputData.inputs.filter(field => !field.optional);
	const hasSubsections = Object.hasOwn(inputData, "hasSubsections");
	const Component = hasSubsections ? Subsection : Fieldset;

	const [children, setChildren] = useState([<Component key={0} fields={defaultFields} />]);

	const addFields = () => {
		setChildren(prevChildren => {
			[...prevChildren, <Subsection key={prevChildren.length} fields={defaultFields} />];
		});
	};

	return (
		<div className={`section-body accordion ${isActive ? "accordion-active" : "accordion-hidden"}`}>
			{children}
			{hasSubsections && <AddFields addFieldsFunc={addFields} />}
		</div>
	);
}

SectionBody.propTypes = {
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
