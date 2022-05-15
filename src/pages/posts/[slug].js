import Head from "next/head";
import { getPostFromSlug } from "../../model/repositories/Posts.ts";
import { serialize } from "next-mdx-remote/serialize";
import { getSlugs } from "../../model/repositories/Posts.ts";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import elixir from "highlight.js/lib/languages/elixir";

export default function PostPage({ post }) {
	return (
		<>
			<Head>
				<title>{post.meta.title}</title>
			</Head>
			<h1>{post.meta.title}</h1>
			<MDXRemote {...post.source} components={{ Image }} />
		</>
	);
}

// Obtém o post completo
export async function getStaticProps({ params }) {
	const { slug } = params;

	const { content, meta } = getPostFromSlug(slug);

	const languages = {
		elixir: elixir,
	};

	const mdxSource = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [
				rehypeSlug,
				[rehypeAutolinkHeadings, { behavior: "wrap" }],
				[rehypeHighlight, { languages }],
			],
		},
	});

	return { props: { post: { source: mdxSource, meta } } };
}

// Quando o getStaticProps pode retornar conteúdo dinâmico é necessário um getStaticPaths
export async function getStaticPaths() {
	const paths = getSlugs().map((slug) => {
		return {
			params: {
				slug,
			},
		};
	});

	// Fallback false indica que todas as páginas que precisam existir, já existem.. não tente gerar uma durante a requisição
	return {
		paths,
		fallback: false,
	};
}
