import Link from "next/link";
import { Logo } from "../Logo";
import styles from "./styles.module.css";

function Header() {
	return (
		<header className={styles.headerContainer}>
			<Logo />
			<nav>
				<ul className={styles.navItemList}>
					<li className={styles.navItem}>
						<Link href="/">/home</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export { Header };
