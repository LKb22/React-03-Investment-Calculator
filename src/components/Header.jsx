import logo from "../assets/investment-calculator-logo.png";

// STEP 1:
// Header: Build the Header component, add the header id class, and add the logo and h1 elements. Import the logo. Render the Header component in App.js.
export default function Header() {
	return (
		<header id="header">
			<img
				src={logo}
				alt="Logo showing a money bag"
			/>
			<h1>React Investment Calculator</h1>
		</header>
	);
}
