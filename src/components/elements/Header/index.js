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
						<Link href="/">Home</Link>
					</NavItem>
					<NavItem>
						<Link href="/">Articles</Link>
					</NavItem>
					<NavItem>
						<Link href="/">Random</Link>
					</NavItem>
					<NavItem>
						<Link href="/">Coding</Link>
					</NavItem>
				</NavItemList>
			</nav>
		</HeaderContainer>
	);
}

export { Header };
