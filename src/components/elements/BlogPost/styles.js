import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BlogPostContainer = styled.div`
	color: var(--on-primary-dark);
	word-wrap: break-word;
	width: 70%;
	min-height: 100vh;
	font-size: 2rem;
	background: var(--primary);
	border: 0.2rem solid var(--secondary);
	border-top: none;
	border-bottom: none;
	padding: 0 5rem;
	font-family: "Fira Code", monospace;

	@media screen and (max-width: 40rem) {
		margin: 0rem;
		padding: 0 3rem;
		border-radius: 0;
		width: 100%;
	}

	code {
		font-family: "Fira Code", monospace;
		border-radius: 0.5rem;
	}

	code.hljs {
		padding: 1rem;
		margin: 1rem;
	}

	p {
		margin-top: 0.8rem;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: var(--secondary);
		margin-top: 1.5rem;
	}

	h1 {
		text-align: center;
		padding: 1rem;
		font-weight: 800;
		font-size: 3rem;
	}

	h2 {
		font-size: 2.8rem;
	}

	h3 {
		font-size: 2.4rem;
	}

	h4 {
		font-size: 2.2rem;
	}

	h5 {
		font-size: 2.1rem;
	}

	ul {
		margin: 1rem 0;
		text-indent: 0rem;

		li {
			padding-left: 1rem;
			::marker {
				content: "->";
				font-weight: 800;
				font-size: 1.8rem;
				font-family: "Fira Code", monospace;
			}
		}
	}

	b,
	strong {
		color: var(--special);
	}

	.post-data {
		font-family: "Fira Code", monospace;
		padding: 1rem;
		background-color: var(--primary);
		text-align: center;

		time,
		.author {
			color: var(--secondary);
		}
	}
`;

export { BlogPostContainer, Wrapper };
