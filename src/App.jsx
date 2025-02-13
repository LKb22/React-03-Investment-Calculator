import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
	// Results STEP 3.1: Lift the userInput state and corresponding event handler function up to the App component:
	// UserInput STEP 2.2:
	// Two-way binding: We need to manage and store the input provided by the user. We want to get the user's input (the value) and reflect that value back into the input field (two way binding). To do this, we need to manage some state using the special useState hook. We can use an object as the initial state to store the values of all four inputs in one place.
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	// UserInput STEP 2.3:
	// Event handler function: Now of course we also need the function that's triggered when the user types into one of the input fields and updates the state value through the state updater function. Since this function handles four inputs, we need to pass an inputId as an argument along with the value. Since we are updating the state based on the previous state, we need to use the functional form of the state updater function, where we get the previous state (the state variable, with its values), 'spread' (copy) that old state into the new state, and then add the new state values accordingly. In this case, we want to get the ID and use it as a key to update the value of the corresponding input.

  // Results STEP 3.2: Now that we have lifted the userInput state up to the App component, and since we are performing a two-way binding, we have to pass both the event handler function ('handleChange') and the userInput state variable back to the UserInput component through props. This way, the UserInput component can still call the event handler function, update the state here in the App component, and then pass this updated state back to the UserInput component (using these props).

  // Results STEP 3.4: Pass the userInput state variable to the Results component as a prop ('input').
	function handleChange(inputId, value) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputId]: value,
			};
		});
	}

	return (
		// Wrap multiple components in a React fragment.
		<>
			<Header />
			<UserInput userInput={userInput} onChangeInput={handleChange}/>
      <Results input={userInput}/>
		</>
	);
}

export default App;
