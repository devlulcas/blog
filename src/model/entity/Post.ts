interface Post {
	content: string;
	meta: PostMeta;
}

interface PostMeta {
	title: string;
	excerpt: string;
	tags: string[];
	date: string;
	thumb: string;
	alt: string;
	slug: string;
}

export { Post, PostMeta };
