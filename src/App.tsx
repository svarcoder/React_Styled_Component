import React from "react";
import "./App.css";
import GlobalStyle from "./Style/Global";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
	return (
		<>
			<GlobalStyle />
			<Navbar />
			<Footer />
		</>
	);
};

export default App;
