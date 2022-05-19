import styled from "styled-components";

const TagContainer = styled.span`
	padding: 0.5rem 1rem;
	background-color: var(--secondary);
	color: var(--on-secondary);
	border-radius: 5rem;
	font-weight: 600;
	cursor: pointer;

	:hover {
		background-color: var(--secondary-light);
	}
`;

export { TagContainer };
