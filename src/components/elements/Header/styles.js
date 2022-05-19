import styled from "styled-components";

const HeaderContainer = styled.ul`
	background-color: var(--primary-dark);
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	list-style: none;
	padding: 0.5rem;
	align-items: center;

	svg {
		height: 3rem;
	}
`;

const NavItemList = styled.ul`
	background-color: var(--primary-dark);
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	list-style: none;
	padding: 0.5rem;
`;

const NavItem = styled.li`
	font-size: 1.5rem;
	font-weight: 800;
	padding: 0.3rem 0.5rem;
	background-color: var(--primary-light);
	color: var(--secondary);

	:hover {
		font-style: italic;
	}
`;

export { NavItem, NavItemList, HeaderContainer };
