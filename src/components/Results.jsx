import { calculateInvestmentResults, formatter } from "../util/investment";

// STEP 3:
// Results: Build the Results component. We now have the userInput state variable object to store and manage the user's inputs. We also have the 'calculateInvestmentResults' function to calculate the investment results with the values from that object (the function expects an object with the same properties of the userInput state object). Now, we can simply pass the values to the function to calculate the results, and then render the results through this dedicated Results component, which is a table. But first, therefore, we need to lift that userInput state up to the App component so that we can pass the state variable  down here to the results component. We can pass it here through a prop ('input').

// STEP 3.5: Now that these steps are done, the userInput state has been lifted to the App component and the userInput state variable object is being shared between / passed down to both the UserInput and here to the Results component though props. We can now use this userInput state variable object and the calculateInvestmentResults function (along with the formatter function), which must be imported, to calculate the results here.

// IMPORTANT: In JS, when you get the value of an input field and extract it, that extracted value will always be a string! (No matter what you set the input type to). To fix this, simply add a + before the value (+value - value is the prop carrying event.target.value) in the handleChange function to convert it to a number.

// STEP 3.6: Calculate the results using the function. The function returns an array of objects, with each object representing the investment data of a single year. Use map to iterate over this array and render each object/year as a row in the table, with the year, investment value, interest, total interest, and invested capital as columns. Make the necessary calculations and use the formatter function to format the numbers as currency.
export default function Results({ input }) {
	const resultsData = calculateInvestmentResults(input);
	console.log(resultsData);
	const initialInvestment =
		resultsData[0].valueEndOfYear -
		resultsData[0].interest -
		resultsData[0].annualInvestment;

	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{resultsData.map((yearData) => {
					const totalInterest =
						yearData.valueEndOfYear -
						yearData.annualInvestment * yearData.year -
						initialInvestment;
					const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
					return (
						<tr key={yearData.year}>
							<td>{yearData.year}</td>
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
