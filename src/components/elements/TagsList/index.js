import { PostTag } from "../PostTag";
import { TagsListContainer } from "./styles";

function TagsList({ tags }) {
	return (
		<TagsListContainer>
			{tags.map((tag) => (
				<PostTag key={tag} tag={tag} />
			))}
		</TagsListContainer>
	);
}

export { TagsList };
