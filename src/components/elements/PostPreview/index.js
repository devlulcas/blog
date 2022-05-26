import Image from "next/image";
import Link from "next/link";
import { TagsList } from "../TagsList";
import { BsCalendarDateFill } from "react-icons/bs";

import styles from "./styles.module.css";

function PostPreview({ meta }) {
	const postLink = `/posts/${meta.slug}`;
	return (
		<article className={styles.previewContainer}>
			<Link href={postLink}>
				<h3 className={styles.postTitle}>{meta.title}</h3>
			</Link>

			<Link href={postLink}>
				<picture title={meta.alt} className={styles.imagePlaceholder}>
					<div>
						<Image
							alt={meta.alt}
							src={meta.thumb}
							objectFit="contain"
							layout="fill"
						/>
					</div>
				</picture>
			</Link>

			<TagsList tags={meta.tags} />

			<p className={styles.excerptContainer}>{meta.excerpt}</p>

			<div className={styles.dateContainer} title={`Postado em ${meta.date}`}>
				<BsCalendarDateFill />
				<time dateTime={meta.date}>{meta.date}</time>
			</div>
		</article>
	);
}

export { PostPreview };
