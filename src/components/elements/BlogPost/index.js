import styles from "./styles.module.css";
import { PostFooter } from "../PostFooter";

function BlogPost({ children, meta }) {
	return (
		<div className={styles.wrapper}>
			<article className={styles.blogPostContainer}>
				{children}
				<PostFooter meta={meta} />
			</article>
		</div>
	);
}

export { BlogPost };
