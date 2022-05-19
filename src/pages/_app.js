import Head from "next/head";
import { GlobalStyle } from "../styles/GlobalStyle";
import "../styles/highlight.css";

/**
 * Template aplicado a todas as páginas nessa pasta
 */
export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.svg" />
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
