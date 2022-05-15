import Link from "next/link";
import { NavItem, NavItemList } from "./styles";

function Header() {
	return (
		<header>
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
		</header>
	);
}

export { Header };
