import { GlobalStyle } from "../styles/GlobalStyle";
import "../styles/highlight.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
