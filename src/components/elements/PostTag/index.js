import Link from "next/link";
import { TagContainer } from "./styles";

function PostTag({ tag }) {
	return (
		<Link key={tag} href={`/tags/${tag}`}>
			<TagContainer>{tag}</TagContainer>
		</Link>
	);
}

export { PostTag };
