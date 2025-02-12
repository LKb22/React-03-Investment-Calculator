import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
	return (
    // Wrap multiple components in a React fragment.
    <>
      <Header />
      <UserInput />
    </>
  );
}

export default App;
