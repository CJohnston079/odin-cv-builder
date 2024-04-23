import { useState } from "react";
import PropTypes from "prop-types";
import AddFields from "./AddFields";
import Subsection from "./Subsection";
import "../styles/editor/SectionBody.css";

export default function SubsectionContainer({ inputData, isActive }) {
	const fields = inputData.inputs.filter(field => !field.optional);

	const [children, setChildren] = useState([<Subsection key={0} fields={fields} />]);

	const addFields = () => {
		setChildren(prevChildren => [
			...prevChildren,
			<Subsection key={prevChildren.length} fields={fields} />,
		]);
	};

	return (
		<div className={`section-body accordion ${isActive ? "accordion-active" : "accordion-hidden"}`}>
			{children}
			<AddFields addFieldsFunc={addFields} />
		</div>
	);
}

SubsectionContainer.propTypes = {
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
