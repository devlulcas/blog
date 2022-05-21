import { ListTitleContainer } from "./styles";

function ListTitle({ title, icon }) {
	return (
		<ListTitleContainer>
			{icon}
			{title}
		</ListTitleContainer>
	);
}

export { ListTitle };
