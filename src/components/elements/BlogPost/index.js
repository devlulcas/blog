import styles from "./styles.module.css";

function BlogPost({ children, meta }) {
	return (
		<div className={styles.wrapper}>
			<article className={styles.blogPostContainer}>
				{children}
				<p className={styles.postData}>
					Publicado em <time dateTime={meta.date}>{meta.date}</time> por{" "}
					<span className="author">Lucas Alves Rego</span>
				</p>
			</article>
		</div>
	);
}

export { BlogPost };
