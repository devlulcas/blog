import styled from "styled-components";

const NavItemList = styled.ul`
	background-color: var(--primary-dark);
	display: flex;
	justify-content: space-evenly;
	gap: 1rem;
	list-style: none;
	padding: 1rem;
`;

const NavItem = styled.li`
	border-radius: 0.5rem;
	font-size: 2.5rem;
	padding: 1rem;
	background-color: var(--primary-light);
	color: var(--secondary);
`;

export { NavItem, NavItemList };
