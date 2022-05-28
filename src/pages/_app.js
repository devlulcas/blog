import { Footer } from "../components/elements/Footer";
import "../styles/GlobalStyle/index.css";
import "../styles/highlight.css";

/**
 * Template aplicado a todas as páginas nessa pasta
 */
export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
