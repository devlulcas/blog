import { BlogPostContainer, Wrapper } from "./styles";

function BlogPost({ children, meta }) {
	return (
		<Wrapper>
			<BlogPostContainer>
				{children}
				<p className="post-data">
					Publicado em <time dateTime={meta.date}>{meta.date}</time> por{" "}
					<span className="author">Lucas Alves Rego</span>
				</p>
			</BlogPostContainer>
		</Wrapper>
	);
}

export { BlogPost };
