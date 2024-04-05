import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1 className={styles.logo}>Step 3</h1>
				<ul className={styles.links}>
					<li>Projects</li>
					<li>Login</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
