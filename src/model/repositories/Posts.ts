import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import { Post } from "../entity/Post";

// Caminho para os posts
const POSTS_PATH = path.join(process.cwd(), "/posts");

function getSlugs() {
	const paths: string[] = sync(`${POSTS_PATH}/*.mdx`);

	return paths.map((path) => {
		const parts = path.split("/");
		const filename = parts.at(-1);
		const [slug, _ext] = filename.split(".");
		return slug;
	});
}

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

function getPostFromSlug(slug: string): Post {
	const postsPaths = path.join(POSTS_PATH, `${slug}.mdx`);

	const source = fs.readFileSync(postsPaths);

	const { content, data } = matter(source);

	return {
		content,
		meta: {
			slug,
			excerpt: data.excerpt ?? "",
			title: data.title ?? slug,
			tags: (data.tags ?? []).sort(),
			date: (data.date ?? new Date()).toString(),
		},
	};
}

export { getAllPosts, getSlugs, getPostFromSlug };
