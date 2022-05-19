import { PostPreview } from "../PostPreview";
import { PostListContainer } from "./styles";

function PostList({ postsMeta }) {
	return (
		<PostListContainer>
			{postsMeta.map((post) => {
				return <PostPreview meta={post} key={post.slug} />;
			})}
		</PostListContainer>
	);
}

export { PostList };
