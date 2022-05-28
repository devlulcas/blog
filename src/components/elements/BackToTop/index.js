import styles from "./styles.module.css";

function BackToTop() {
	return (
		<button className={styles.button} onClick={() => scrollTo(0, 0)}>
			Voltar para o topo
		</button>
	);
}

export { BackToTop };
