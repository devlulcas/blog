import Link from "next/link";

function PostTag({ tag }) {
	return (
		<Link key={tag} href={`/tags/${tag}`}>
			{tag}
		</Link>
	);
}

export { PostTag };
