import { ListTitle } from "../ListTitle";
import { PostPreview } from "../PostPreview";
import styles from "./styles.module.css";

function PostList({ postsMeta, title, icon }) {
	return (
		<>
			<ListTitle icon={icon} title={title} />

			<section className={styles.postListContainer}>
				{postsMeta.map((post) => {
					return <PostPreview meta={post} key={post.slug} />;
				})}
			</section>
		</>
	);
}

export { PostList };
