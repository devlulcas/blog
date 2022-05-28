import Link from "next/link";
import styles from "./styles.module.css";
import { FaGithubAlt, FaLinkedin, FaStar } from "react-icons/fa/";

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<nav className={styles.contact}>
					<Link href={"https://github.com/devlulcas"}>
						<p className={styles.link}>
							<FaGithubAlt />
							github
						</p>
					</Link>
					<Link href={"https://www.linkedin.com/in/lucasalvesregodev/"}>
						<p className={styles.link}>
							<FaLinkedin />
							linkedin
						</p>
					</Link>
					<Link href={"https://devlulcas-github-io.vercel.app"}>
						<p className={styles.link}>
							<FaStar />
							portfólio
						</p>
					</Link>
				</nav>
			</div>
		</footer>
	);
}

export { Footer };
