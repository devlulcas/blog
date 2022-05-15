import { PostPreview } from "../PostPreview";

function PostList({ postsMeta }) {
	return (
		<ul>
			{postsMeta.map((post) => {
				return <PostPreview meta={post} key={post.slug} />;
			})}
		</ul>
	);
}

export { PostList };
