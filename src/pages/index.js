import Head from "next/head";
import { PostList } from "../components/elements/PostList";
import { Default } from "../components/layouts/Default";
import { getAllPosts } from "../model/repositories/Posts.ts";

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

// Roda em tempo de compilação
export async function getStaticProps() {
	const posts = getAllPosts();
	const postsToShow = posts.slice(0, 9);
	const postsMeta = postsToShow.map((post) => post.meta);

	return {
		props: { postsMeta },
	};
}
