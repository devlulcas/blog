import { PostTag } from "../PostTag";
import styles from "./styles.module.css";

function TagsList({ tags }) {
	return (
		<p className={styles.tagsContainer}>
			{tags.map((tag) => (
				<PostTag key={tag} tag={tag} />
			))}
		</p>
	);
}

export { TagsList };
