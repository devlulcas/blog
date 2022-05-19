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
	return (
		<li>
			<PostPreviewContainer>
				<Link href={`/posts/${meta.slug}`}>
					<PostTitle>{meta.title}</PostTitle>
				</Link>

				<ImagePlaceholder title={meta.alt}>
					<Image
						alt={meta.alt}
						src={meta.thumb}
						width={40}
						height={40}
						layout={"fixed"}
					/>
				</ImagePlaceholder>

				<TagsList tags={meta.tags} />

				<ExcerptContainer>{meta.excerpt}</ExcerptContainer>

				<DateContainer title={`Postado em ${meta.date}`}>
					<BsCalendarDateFill />
					<time dateTime={meta.date}>{meta.date}</time>
				</DateContainer>
			</PostPreviewContainer>
		</li>
	);
}

export { PostPreview };
