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
	width: 50rem;
`;

const ImagePlaceholder = styled.div`
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	min-height: 10rem;
	height: 100%;
	border-radius: 1rem;
	margin: 1rem 0;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23909090' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	background-color: var(--primary-light);
	overflow: hidden;
	box-shadow: 0.2rem 0.2rem 0rem var(--primary-dark);

	:hover {
		outline: 0.1rem solid var(--special);
		outline-offset: 0.3rem;
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
