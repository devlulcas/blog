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
import { Default } from "../../components/layouts/Default";
import { BlogPost } from "../../components/elements/BlogPost";

/**
 * Página individual do post do blog
 */
export default function PostPage({ post }) {
	return (
		<Default>
			<Head>
				<title>{post.meta.title}</title>
			</Head>

			<BlogPost meta={post.meta}>
				<MDXRemote {...post.source} components={{ Image }} />
			</BlogPost>
		</Default>
	);
}

// Obtém o post completo
export async function getStaticProps({ params }) {
	const { slug } = params;

	const { content, meta } = getPostFromSlug(slug);

	// Adicionar mais linguagens neste objeto pode ser feito ao importar mais coisas do highlight.js
	const languages = {
		elixir,
	};

	// Processa o markdown para HTML e executa alguns plugins
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
