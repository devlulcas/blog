import Head from "next/head";
import { PostList } from "../components/elements/PostList";
import { Default } from "../components/layouts/Default";
import { getAllPosts } from "../model/repositories/Posts.ts";

/**
 * Homepage "/"
 *
 * Lista de Posts e outras informações
 *
 * Recebe uma informação buscada em tempo de compilação, que são
 * as informações dos posts.
 *
 * Esse componente deve ser exportado por padrão por estar em /pages
 */
export default function Home({ postsMeta }) {
	return (
		<Default>
			<div>
				<Head>
					<title>Devlulcas blog</title>
					<meta name="description" content="A cool blog" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<PostList postsMeta={postsMeta} />
			</div>
		</Default>
	);
}

/**
 * getStaticProps - Roda em tempo de compilação
 *
 * Essa função deve retornar um objeto com a propriedade "props"
 * dentro dele.
 *
 * A função abaixo busca os posts, separa apenas 10 para mostrar
 * e então pega apenas as informações básicas do post para devolver.
 *
 * O que é passado em props será utilizado como parâmetro no componente
 * desta rota
 */
export async function getStaticProps() {
	const posts = getAllPosts();
	const postsToShow = posts.slice(0, 9);
	const postsMeta = postsToShow.map((post) => post.meta);

	return {
		props: { postsMeta },
	};
}
