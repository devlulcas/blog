import styled from "styled-components";

const PostPreviewContainer = styled.article`
	padding: 2rem;
	min-height: 40rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: var(--primary);
	border-radius: 1rem;
	box-shadow: 0.5rem 0.5rem 0rem var(--primary-dark);
	border: 0.2rem solid var(--secondary);
	width: 100%;
`;

const ImagePlaceholder = styled.div`
	display: flex;
	cursor: pointer;
	position: relative;
	align-items: center;
	justify-content: center;
	min-height: 10rem;
	height: 100%;
	border-radius: 1rem;
	margin: 1rem 0;
	background-color: var(--primary-light);
	overflow: hidden;
	box-shadow: 0.2rem 0.2rem 0rem var(--primary-dark);

	:hover {
		outline: 0.1rem solid var(--special);
		outline-offset: 0.3rem;
	}

	div {
		border: 1rem solid var(--primary-light);
		position: relative;
		width: 100%;
		height: 100%;
	}
`;

const PostTitle = styled.h2`
	color: var(--on-secondary);
	width: fit-content;
	padding: 0.3ch 1ch;
	font-size: 2rem;
	border-radius: 0.3rem;
	background: var(--secondary);
	cursor: pointer;

	:hover {
		background-color: var(--secondary-light);
	}
`;

const ExcerptContainer = styled.p`
	color: var(--on-primary);
	padding: 1ch 1ch;
	font-size: 1.8rem;
	font-weight: 600;
`;

const DateContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5ch;
	color: var(--on-secondary);
	padding: 0.3ch 1ch;
	border-radius: 0.2rem;
	font-size: 1.8rem;
	margin-left: 1ch;
	font-weight: 800;
	background: var(--secondary);
`;

export {
	PostPreviewContainer,
	DateContainer,
	ExcerptContainer,
	ImagePlaceholder,
	PostTitle,
};
