import { Header } from "../../elements/Header";
import { Container } from "./styles";

/**
 * Layout básico para múltiplas rotas.
 * Basta incluir ele ao redor dos outros componentes da página
 */
function Default({ children }) {
	return (
		<Container>
			<Header />
			{children}
		</Container>
	);
}

export { Default };
