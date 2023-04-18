import styles from "./styles.module.css";

function RedirectWarning() {
	return (
		<div className={styles.redirectWarning}>
			<p className={styles.content}>
				<span>Essa página foi movida para meu novo website em</span>
				<a className={styles.link} href="https://www.lucasrego.tech">
					lucasrego.tech
				</a>
			</p>
		</div>
	);
}

export { RedirectWarning };
