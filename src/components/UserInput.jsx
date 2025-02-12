import { useState } from "react";

// STEP 2:
// UserInput: Build the UserInput component.
export default function UserInput() {
	// STEP 2.2:
	// Two way binding: We need to manage and store the input provided by the user. We want to get the user's input (the value) and reflect that value back into the input field (two way binding). To do this, we need to manage some state using the special useState hook. We can use an object as the initial state to store the values of all four inputs in one place.
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	// STEP 2.3:
	// Event handler function: Now of course we also need the function that's triggered when the user types into one of the input fields and updates the state value through the state updater function. Since this function handles four inputs, we need to pass an inputId as an argument along with the value. Since we are updating the state based on the previous state, we need to use the functional form of the state updater function, where we get the previous state (the state variable, with its values), 'spread' (copy) that old state into the new state, and then add the new state values accordingly. In this case, we want to get the ID and use it as a key to update the value of the corresponding input.
	function handleChange(inputId, value) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputId]: value,
			};
		});
	}

	// STEP 2.1:
	// Create the UserInput labels and components section.

	// STEP 2.4:
	// onChange and event object: Use onChange to trigger the event handler function. Remember, we can't point the event handler function to the onChange attribute directly, as this would trigger react to pass a default event object to the handler function automatically (which would be missing the eventID and would only hold one parameter). Instead, we need to create an anonymous function that calls the event handler function, allowing us to pass the arguments we need, which are, in this case, the inputId and the value. The anonymous function will now receive the event object provided by React, which contains that value - that being the new value from the input field, which we can access through event.target.value. (event is the change, target is the spceific input field, and value is the value entered ba the user in that field).

	// STEP 2.4:
	// value prop: Now, we can use the value prop to set the initial and then the updated values of each input field back into their respective input fields. Of course, these values are stored in the state variable object ('userInput').
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
							handleChange("initialInvestment", event.target.value)
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
							handleChange("annualInvestment", event.target.value)
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
							handleChange("expectedReturn", event.target.value)
						}
					/>
				</p>
				<p>
					<label>Duration</label>
					<input
						type="number"
						required
						value={userInput.duration}
						onChange={(event) => handleChange("duration", event.target.value)}
					/>
				</p>
			</div>
		</section>
	);
}
