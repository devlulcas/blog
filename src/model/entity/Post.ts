interface Post {
	content: string;
	meta: PostMeta;
}

interface PostMeta {
	title: string;
	excerpt: string;
	tags: string[];
	date: string;
	slug: string;
}

export { Post, PostMeta };
