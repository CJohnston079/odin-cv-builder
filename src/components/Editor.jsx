import { useState } from "react";
import Fieldset from "./Fieldset";
import inputs from "../data/inputs";
import "../styles/editor/Editor.css";

export default function Editor() {
	const [activeFieldset, setActiveFieldset] = useState(0);

	return (
		<section id="editor">
			<form>
				<Fieldset
					heading="Personal details"
					iconSrc="./src/assets/icons/profile.svg"
					fields={inputs.contact}
					isActive={activeFieldset === 0}
					onShow={() => setActiveFieldset(0)}
				/>
				<Fieldset
					heading="Professional summary"
					iconSrc="./src/assets/icons/summary.svg"
					fields={inputs.summary}
					isActive={activeFieldset === 1}
					onShow={() => setActiveFieldset(1)}
				/>
				<Fieldset
					heading="Employment history"
					iconSrc="./src/assets/icons/employment.svg"
					fields={inputs.employment}
					isActive={activeFieldset === 2}
					onShow={() => setActiveFieldset(2)}
				/>
				<Fieldset
					heading="Education"
					iconSrc="./src/assets/icons/education.svg"
					fields={inputs.sample}
					isActive={activeFieldset === 3}
					onShow={() => setActiveFieldset(3)}
				/>
				<Fieldset
					heading="Skills"
					iconSrc="./src/assets/icons/skills.svg"
					fields={inputs.sample}
					isActive={activeFieldset === 4}
					onShow={() => setActiveFieldset(4)}
				/>
				<Fieldset
					heading="Other interests"
					iconSrc="./src/assets/icons/interests.svg"
					fields={inputs.sample}
					isActive={activeFieldset === 5}
					onShow={() => setActiveFieldset(5)}
				/>
				<Fieldset
					heading="References"
					iconSrc="./src/assets/icons/references.svg"
					fields={inputs.sample}
					isActive={activeFieldset === 6}
					onShow={() => setActiveFieldset(6)}
				/>
			</form>
		</section>
	);
}
