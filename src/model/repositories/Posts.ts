import path from "node:path";
import fs from "node:fs";
import { sync } from "glob";
import matter from "gray-matter";
import { Post } from "../entity/Post";

// Caminho para os posts
const POSTS_PATH = path.join(process.cwd(), "/posts");

/**
 * Obtém um array de nomes dos arquivos (posts) para usar como rota
 */
function getSlugs() {
	const paths: string[] = sync(`${POSTS_PATH}/*/index.mdx`);

	return paths.map((path) => {
		const parts = path.split("/");
		const foldername = parts.at(-2);
		return foldername;
	});
}

/**
 * Busca todos os posts disponíveis ordenados por data
 */
function getAllPosts() {
	const postsSlugs = getSlugs();

	const posts = postsSlugs
		.map((slug) => getPostFromSlug(slug))
		.sort((a, b) => {
			if (a.meta.date > b.meta.date) return 1;
			if (a.meta.date < b.meta.date) return -1;
			return 0;
		})
		.reverse();

	return posts;
}

/**
 * Obtém um post especifico com base no nome (slug)
 */
function getPostFromSlug(slug: string): Post {
	const postsPaths = path.join(POSTS_PATH, `${slug}/index.mdx`);

	const source = fs.readFileSync(postsPaths);

	// Processa o buffer com gray-matter separando os metadados
	const { content, data } = matter(source);

	return {
		content: content,
		meta: {
			slug,
			excerpt: data.excerpt ?? "",
			title: data.title ?? slug,
			thumb: data.thumbnail ?? "",
			alt: data.alt ?? "imagem",
			tags: (data.tags ?? []).sort(),
			date: (data.date ?? new Date()).toString(),
		},
	};
}

export { getAllPosts, getSlugs, getPostFromSlug };
