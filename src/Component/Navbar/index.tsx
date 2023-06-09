import * as React from "react";
import { Container, Logo, Menu, MenuItem } from "./style";

const Navbar: React.FC = (props) => {
	return (
		<>
			<Container>
				<Logo>myapp.com</Logo>
				<Menu>
					<MenuItem>Home</MenuItem>
					<MenuItem>About</MenuItem>
					<MenuItem>Contact</MenuItem>
					<MenuItem>Service</MenuItem>
				</Menu>
			</Container>
		</>
	);
};

export default Navbar;
