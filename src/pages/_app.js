import { GlobalStyle } from "../styles/GlobalStyle";
import "../styles/highlight.css";

/**
 * Template aplicado a todas as páginas nessa pasta
 */
export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
