import Head from "next/head";
import { BsCalendarDateFill, BsFillStarFill } from "react-icons/bs";
import { Banner } from "../../components/elements/Banner";
import { Footer } from "../../components/elements/Footer";
import { PostList } from "../../components/elements/PostList";
import { Default } from "../../components/layouts/Default";
import { getAllPosts } from "../../model/repositories/Posts.ts";

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
export default function Home({ postsMeta, allTags }) {
	return (
		<>
			<Default>
				<div>
					<Head>
						<title>Todos os posts</title>
						<meta name="description" content="A cool blog" />
					</Head>

					<Banner tags={allTags} />

					<PostList
						postsMeta={postsMeta}
						title="Todas as publicações"
						icon={<BsCalendarDateFill />}
					/>
				</div>
			</Default>
			<Footer />
		</>
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
	const postsMeta = posts.map((post) => post.meta);

	// Todas as tags
	let allTags = [];

	postsMeta.map((post) => {
		allTags = [...allTags, ...post.tags];
	});

	allTags = new Set(allTags);

	allTags = Array.from(allTags);

	return {
		props: { postsMeta, allTags },
	};
}
