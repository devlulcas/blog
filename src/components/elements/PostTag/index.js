import Link from "next/link";
import styles from "./styles.module.css";

function PostTag({ tag }) {
	return (
		<Link key={tag} href={`/tags/${tag}`}>
			<span className={styles.tagContent} title={`Tag: ${tag}`}>
				{tag}
			</span>
		</Link>
	);
}

export { PostTag };
