import styled from "styled-components";

const HeaderContainer = styled.ul`
	background-color: var(--primary-dark);
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	list-style: none;
	padding: 1rem;
	align-items: center;

	svg {
		height: 6rem;
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
	font-size: 2.5rem;
	font-weight: 800;
	padding: 1rem 1.5rem;
	border-radius: 0.5rem;
	background-color: var(--primary);
	color: var(--secondary);

	:hover {
		background-color: var(--primary-light);
		color: var(--secondary-light);
		font-style: italic;
	}
`;

export { NavItem, NavItemList, HeaderContainer };
