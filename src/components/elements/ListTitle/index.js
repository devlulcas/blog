import styles from "./styles.module.css";

function ListTitle({ title, icon }) {
	return (
		<h2 className={styles.listTitleContainer}>
			{icon}
			{title}
		</h2>
	);
}

export { ListTitle };
