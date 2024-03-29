import { useState } from "react";
import Fieldset from "./Fieldset";
import inputs from "../data/inputs";

export default function Editor() {
	const [activeFieldset, setActiveFieldset] = useState(0);

	return (
		<section id="editor">
			<form>
				<Fieldset
					heading="Contact information"
					fields={inputs.contact}
					isActive={activeFieldset === 0}
					onShow={() => setActiveFieldset(0)}
				/>
				<Fieldset
					heading="Website and social links"
					fields={inputs.links}
					isActive={activeFieldset === 1}
					onShow={() => setActiveFieldset(1)}
				/>
				<Fieldset
					heading="Professional summary"
					fields={inputs.summary}
					isActive={activeFieldset === 2}
					onShow={() => setActiveFieldset(2)}
				/>
			</form>
		</section>
	);
}
