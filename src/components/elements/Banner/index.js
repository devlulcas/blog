import { BsTagFill } from "react-icons/bs";
import { ListTitle } from "../ListTitle";
import { TagsList } from "../TagsList";
import { TagsContainer } from "./styles";

function Banner({ tags }) {
	return (
		<>
			<ListTitle icon={<BsTagFill />} title={"Todas as tags"} />
			<TagsContainer>
				<TagsList tags={tags} />
			</TagsContainer>
		</>
	);
}

export { Banner };
