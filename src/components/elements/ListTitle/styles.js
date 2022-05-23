import styled from "styled-components";

const ListTitleContainer = styled.h2`
	padding: 1rem 3rem;
	display: flex;
	align-items: center;
	gap: 1.5rem;
	font-size: 3rem;
	color: var(--secondary);
	background-color: var(--primary-dark);
	width: fit-content;
	border-radius: 1rem;
	margin: 2rem 0rem 1rem 3rem;

	@media screen and (max-width: 40rem) {
		margin: 0rem;
		border-radius: 0;
		width: 100%;
	}
`;

export { ListTitleContainer };
