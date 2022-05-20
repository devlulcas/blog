import Link from "next/link";
import { TagContainer } from "./styles";

function PostTag({ tag }) {
	return (
		<Link key={tag} href={`/tags/${tag}`}>
			<TagContainer title={`Tag: ${tag}`}>{tag}</TagContainer>
		</Link>
	);
}

export { PostTag };
