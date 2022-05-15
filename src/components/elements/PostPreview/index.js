import Link from "next/link";
import { TagsList } from "../TagsList";

function PostPreview({ meta }) {
	return (
		<li>
			<Link href={`/posts/${meta.slug}`}>
				<h2>{meta.title}</h2>
			</Link>

			<p>{meta.excerpt}</p>

			<time dateTime={meta.date}>{meta.date}</time>
			<TagsList tags={meta.tags} />
		</li>
	);
}

export { PostPreview };
