import styled from "styled-components";

const PostListContainer = styled.section`
	display: grid;
	gap: 2rem;
	list-style: none;
	padding: 1rem 3rem;
	grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
`;

export { PostListContainer };
