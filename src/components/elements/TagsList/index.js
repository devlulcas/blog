import Link from "next/link";
import { PostTag } from "../PostTag";

function TagsList({ tags }) {
	return (
		<p>
			{tags.map((tag) => (
				<PostTag key={tag} tag={tag} />
			))}
		</p>
	);
}

export { TagsList };
