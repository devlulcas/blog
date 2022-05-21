import { ListTitle } from "../ListTitle";
import { PostPreview } from "../PostPreview";
import { PostListContainer } from "./styles";

function PostList({ postsMeta, title, icon }) {
	return (
		<>
			<ListTitle icon={icon} title={title} />

			<PostListContainer>
				{postsMeta.map((post) => {
					return <PostPreview meta={post} key={post.slug} />;
				})}
			</PostListContainer>
		</>
	);
}

export { PostList };
