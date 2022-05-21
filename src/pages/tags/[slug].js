import Head from "next/head";
import { BsTagFill } from "react-icons/bs";
import { PostList } from "../../components/elements/PostList";
import { Default } from "../../components/layouts/Default";
import { getAllPosts } from "../../model/repositories/Posts.ts";

export default function TagPage({ slug, postsMeta }) {
	return (
		<Default>
			<Head>
				<title>Tag : {slug}</title>
			</Head>

			<PostList
				postsMeta={postsMeta}
				title={`Tag : ${slug}`}
				icon={<BsTagFill />}
			/>
		</Default>
	);
}

/**
 * Executado em tempo de compilação, seus retornos são propriedades para o
 * componente desta página: <TagPage/>
 *
 * Neste caso recebemos o objeto params que é passado para a função pelo próprio NextJS
 */
export async function getStaticProps({ params }) {
	const { slug } = params;
	const posts = getAllPosts();
	const filteredPosts = posts.filter((post) => post.meta.tags.includes(slug));

	return {
		props: {
			slug,
			postsMeta: filteredPosts.map((post) => post.meta),
		},
	};
}

/**
 * Como o getStaticProps usa dados dinâmicos, mas no fum do dia geramos uma página estática (Arquivo.html), nós
 * precisamos dar um jeito de dizer ao Next quantos desses arquivos ele vai ter que gerar de antemão.
 *
 * Para isso usamos o getStaticPaths
 */
export async function getStaticPaths() {
	const posts = getAllPosts();
	const tags = posts.map((post) => post.meta.tags);
	const flatTags = tags.flat();
	const uniqueTags = Array.from(new Set(flatTags));
	const paths = uniqueTags.map((tag) => ({ params: { slug: tag } }));

	return {
		paths,
		fallback: false,
	};
}
