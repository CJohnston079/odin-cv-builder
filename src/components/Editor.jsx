function Field({ inputLabel, inputName }) {
	return (
		<label>
			{inputLabel}
			<input name={inputName} />
		</label>
	);
}

export default function Editor() {
	return (
		<section id="editor">
			<form>
				<fieldset>
					<h2>Contact information</h2>
					<Field inputLabel="First name" inputName="forename" />
					<Field inputLabel="Surname" inputName="surname" />
					<Field inputLabel="Email address" inputName="email" />
					<Field inputLabel="Phone number" inputName="phone-number" />
				</fieldset>
				<fieldset>
					<h2>Website and social links</h2>
					<Field inputLabel="Website" inputName="website" />
					<Field inputLabel="LinkedIn" inputName="linkedin" />
				</fieldset>
				<fieldset>
					<h2>Professional summary</h2>
					<Field inputLabel="Professional summary" inputName="summary" />
				</fieldset>
				<button>Submit</button>
			</form>
		</section>
	);
}
