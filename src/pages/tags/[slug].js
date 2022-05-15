import Head from "next/head";
import { PostList } from "../../components/elements/PostList";
import { getAllPosts } from "../../model/repositories/Posts.ts";

export default function TagPage({ slug, postsMeta }) {
	return (
		<>
			<Head>
				<title>Tag : {slug}</title>
			</Head>

			<h1>Tag : {slug}</h1>
			<PostList postsMeta={postsMeta} />
		</>
	);
}

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
