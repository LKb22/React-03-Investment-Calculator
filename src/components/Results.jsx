// STEP 3:
// Results: Build the Results component. We now have the userInput state variable object to store and manage the user's inputs. We also have the 'calculateInvestmentResults' function to calculate the investment results with the values from that object (the function expects an object with the same properties of the userInput state object). Now, we can simply pass the values to the function to calculate the results, and then render the results through this dedicated Results component, which is a table. But first, therefore, we need to lift that userInput state up to the App component so that we can pass the state variable  down here to the results component. We can pass it here through a prop ('input').

// STEP 3.5: Now that these steps are done, the userInput state has been lifted to the App component and the userInput state variable object is being shared between / passed down to both the UserInput and here to the Results component. We can now use this userInput state variable object to calculate the investment results.
export default function Results({ input}) {
  return <p>Results</p>;
}
