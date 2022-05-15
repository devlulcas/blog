import { Header } from "../../elements/Header";
import { Container } from "./styles";

function Default({ children }) {
	return (
		<Container>
			<Header />
			{children}
		</Container>
	);
}

export { Default };
