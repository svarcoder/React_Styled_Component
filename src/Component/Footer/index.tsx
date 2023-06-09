import * as React from "react";
import { Container, FooterNav, FooterNavItem } from "./style";

const Footer: React.FC = (props) => {
	return (
		<>
			<Container>
				<FooterNav>
					<FooterNavItem>Terms and Conditions</FooterNavItem>
					<FooterNavItem>Privacy notice</FooterNavItem>
				</FooterNav>
			</Container>
		</>
	);
};

export default Footer;
