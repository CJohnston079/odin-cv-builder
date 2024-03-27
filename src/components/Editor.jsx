function Field({ inputLabel, inputName }) {
	return (
		<label>
			{inputLabel}
			<input name={inputName} />
		</label>
	);
}

function Fieldset({ heading, fields }) {
	const fieldElements = fields.map(field => {
		return <Field key={field.name} inputLabel={field.label} inputName={field.name} />;
	});

	return (
		<fieldset>
			<h2>{heading}</h2>
			{fieldElements}
		</fieldset>
	);
}

export default function Editor() {
	const inputs = {
		contact: [
			{ label: "First name", name: "forename" },
			{ label: "Surname", name: "surname" },
			{ label: "Email address", name: "email" },
			{ label: "Phone number", name: "phone-number" },
		],
		links: [
			{ label: "Website", name: "website" },
			{ label: "LinkedIn", name: "linkedin" },
		],
		summary: [{ label: "Professional summary", name: "summary" }],
	};

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
