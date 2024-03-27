export default function Editor() {
	return (
		<section id="editor">
			<form>
				<fieldset>
					<h2>Contact information</h2>
					<label>
						First name:
						<input name="forename" />
					</label>
					<label>
						Surname:
						<input name="surname" />
					</label>
					<label>
						Email address:
						<input name="email" />
					</label>
					<label>
						Phone number:
						<input name="phone-number" />
					</label>
				</fieldset>
				<fieldset>
					<h2>Website and social links</h2>
					<label>
						Website:
						<input name="website" />
					</label>
					<label>
						LinkedIn:
						<input name="linkedin" />
					</label>
				</fieldset>
				<fieldset>
					<h2>Professional summary</h2>
					<label>
						Professional summary:
						<input name="summary" />
					</label>
				</fieldset>
				<button>Submit</button>
			</form>
		</section>
	);
}
