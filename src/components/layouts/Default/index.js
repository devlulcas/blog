import { Header } from "../../elements/Header";
import styles from "./styles.module.css";

/**
 * Layout básico para múltiplas rotas.
 * Basta incluir ele ao redor dos outros componentes da página
 */
function Default({ children }) {
	return (
		<div className={styles.container}>
			<Header />
			{children}
		</div>
	);
}

export { Default };
