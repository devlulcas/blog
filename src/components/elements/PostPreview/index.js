import Image from "next/image";
import Link from "next/link";
import { TagsList } from "../TagsList";
import { BsCalendarDateFill } from "react-icons/bs";

import {
	ImagePlaceholder,
	DateContainer,
	PostPreviewContainer,
	PostTitle,
	ExcerptContainer,
} from "./styles";

function PostPreview({ meta }) {
	const postLink = `/posts/${meta.slug}`;
	return (
		<PostPreviewContainer>
			<Link href={postLink}>
				<PostTitle>{meta.title}</PostTitle>
			</Link>

			<Link href={postLink}>
				<ImagePlaceholder title={meta.alt}>
					<div>
						<Image
							alt={meta.alt}
							src={meta.thumb}
							objectFit="contain"
							layout="fill"
						/>
					</div>
				</ImagePlaceholder>
			</Link>

			<TagsList tags={meta.tags} />

			<ExcerptContainer>{meta.excerpt}</ExcerptContainer>

			<DateContainer title={`Postado em ${meta.date}`}>
				<BsCalendarDateFill />
				<time dateTime={meta.date}>{meta.date}</time>
			</DateContainer>
		</PostPreviewContainer>
	);
}

export { PostPreview };
