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
import { Pic } from "../../components/elements/Pic";
import { BackToTop } from "../../components/elements/BackToTop";
import { NextSeo } from "next-seo";

/**
 * Página individual do post do blog
 */
export default function PostPage({ post }) {
	console.log(post);
	return (
		<>
			<Default>
				<NextSeo
					title={post.meta.title}
					description={post.meta.excerpt}
					openGraph={{
						url: post.url,
						title: post.meta.title,
						description: post.meta.excerpt,
						images: [
							{
								url: post.host + post.meta.thumb,
								width: 800,
								height: 600,
								alt: post.meta.auth,
								type: "image/jpeg",
							},
							{ url: post.host + post.meta.thumb },
							{ url: post.host + post.meta.thumb },
						],
						site_name: "Devlulcas Blog",
					}}
					twitter={{
						handle: "@lucaehooo",
						site: "@lucaehooo",
						cardType: "summary_large_image",
					}}
				/>

				<BlogPost meta={post.meta}>
					<MDXRemote {...post.source} components={{ Image, Pic }} />
				</BlogPost>
			</Default>
			<BackToTop />
		</>
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

	const host = process.env["HOST"];
	const url = host + "/posts/" + slug;

	return { props: { post: { source: mdxSource, meta, url, host } } };
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
