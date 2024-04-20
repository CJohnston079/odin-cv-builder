import { useState } from "react";
import PropTypes from "prop-types";
import AddFields from "./AddFields";
import Fieldset from "./Fieldset";
import Subsection from "./Subsection";
import "../styles/editor/SectionBody.css";

export default function SectionBody({ inputData, isActive }) {
	const [children, setChildren] = useState([]);

	const addFields = () => {
		setChildren(prevChildren => [
			...prevChildren,
			<Fieldset
				className="test"
				key={prevChildren.length}
				fields={defaultFields}
				isSubsection={true}
			/>,
		]);
	};

	const accordionCondition = condition => `${condition ? "accordion-active" : "accordion-hidden"}`;

	const defaultFields = inputData.inputs.filter(field => !field.optional);
	const hasSubsections = Object.hasOwn(inputData, "hasSubsections");
	const Component = hasSubsections ? Subsection : Fieldset;

	return (
		<div className={`section-body accordion ${accordionCondition(isActive)}`}>
			<Component fields={defaultFields} isSubsection={hasSubsections} />
			{children}
			{hasSubsections && <AddFields addFieldsFunc={addFields} />}
		</div>
	);
}

SectionBody.propTypes = {
	inputData: PropTypes.object.isRequired,
	isActive: PropTypes.bool.isRequired,
};
