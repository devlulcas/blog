import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/images/logo.svg";
import styles from "./styles.module.css";
import { FaGithubAlt, FaLinkedin, FaStar } from "react-icons/fa/";

function PostFooter({ meta }) {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<Image src={logo} alt="logo devlulcas" />

				<div className={styles.data}>
					<p>
						<span className={styles.legend}>Autor: </span>
						Lucas Alves Rego
					</p>

					<p>
						<span className={styles.legend}>Sobre: </span>
						In deserunt esse commodo consectetur sunt eu exercitation eiusmod
						quis ullamco dolore qui labore sint. Minim magna ea ut nisi cillum.
						Ad sunt in proident officia eu aute officia. Sit anim aliqua veniam
						aliqua anim sint ea excepteur exercitation ad.
					</p>

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
			</div>

			<p className={styles.date}>
				Publicado em <time dateTime={meta.date}>{meta.date}</time>
			</p>
		</footer>
	);
}

export { PostFooter };
