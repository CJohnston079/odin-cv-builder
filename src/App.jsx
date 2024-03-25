// import { useState } from "react";
import "./App.css";

function App() {
	return (
		<section>
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
				<button>Submit</button>
			</form>
		</section>
	);
}

export default App;
