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
					<Image alt={meta.alt} src={meta.thumb} width={100} height={100} />
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
