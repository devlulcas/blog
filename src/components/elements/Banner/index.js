import { BsTagFill } from "react-icons/bs";
import { ListTitle } from "../ListTitle";
import { TagsList } from "../TagsList";
import styles from "./styles.module.css";

function Banner({ tags }) {
	return (
		<>
			<ListTitle icon={<BsTagFill />} title={"Todas as tags"} />
			<section className={styles.tagsContainer}>
				<TagsList tags={tags} />
			</section>
		</>
	);
}

export { Banner };
