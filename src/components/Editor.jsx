import Fieldset from "./Fieldset";
import inputs from "../data/inputs";

export default function Editor() {
	return (
		<section id="editor">
			<form>
				<Fieldset heading="Contact information" fields={inputs.contact} />
				<Fieldset heading="Website and social links" fields={inputs.links} />
				<Fieldset heading="Professional summary" fields={inputs.summary} />
			</form>
		</section>
	);
}
