// import { useState } from "react";

// STEP 2:
// UserInput: Build the UserInput component.
export default function UserInput({ onChangeInput, userInput }) {
	// STEP 2.2: (lifted up to App.jsx)
	// STEP 2.3: (lifted up to App.jsx)

	// STEP 2.1:
	// Create the UserInput labels and components section.

	// STEP 2.4:
	// onChange and event object: Use onChange to trigger the event handler function. Remember, we can't point the event handler function to the onChange attribute directly, as this would trigger react to pass a default event object to the handler function automatically (which would be missing the eventID and would only hold one parameter). Instead, we need to create an anonymous function that calls the event handler function, allowing us to pass the arguments we need, which are, in this case, the inputId and the value. The anonymous function will now receive the event object provided by React, which contains that value - that being the new value from the input field, which we can access through event.target.value. (event is the change, target is the spceific input field, and value is the value entered ba the user in that field).

	// STEP 2.4:
	// value prop: Now, we can use the value prop to set the initial and then the updated values of each input field back into their respective input fields. Of course, these values are stored in the state variable object ('userInput').

	// Results STEP 3.3: Now that we've lifted the state, accept and pass the new props carrying the handleChange event handler function and the userInput state variable instead of that function and variable directly.
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>Initial Investment</label>
					<input
						type="number"
						required
						value={userInput.initialInvestment}
						onChange={(event) =>
							onChangeInput("initialInvestment", event.target.value)
						}
					/>
				</p>
				<p>
					<label>Annual Investment</label>
					<input
						type="number"
						required
						value={userInput.annualInvestment}
						onChange={(event) =>
							onChangeInput("annualInvestment", event.target.value)
						}
					/>
				</p>
			</div>

			<div className="input-group">
				<p>
					<label>Expected Return</label>
					<input
						type="number"
						required
						value={userInput.expectedReturn}
						onChange={(event) =>
							onChangeInput("expectedReturn", event.target.value)
						}
					/>
				</p>
				<p>
					<label>Duration</label>
					<input
						type="number"
						required
						value={userInput.duration}
						onChange={(event) => onChangeInput("duration", event.target.value)}
					/>
				</p>
			</div>
		</section>
	);
}
