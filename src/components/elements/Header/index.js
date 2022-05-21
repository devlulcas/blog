import Link from "next/link";
import { Logo } from "../Logo";
import { NavItem, NavItemList, HeaderContainer } from "./styles";

function Header() {
	return (
		<HeaderContainer>
			<Logo />
			<nav>
				<NavItemList>
					<NavItem>
						<Link href="/">/home</Link>
					</NavItem>
				</NavItemList>
			</nav>
		</HeaderContainer>
	);
}

export { Header };
