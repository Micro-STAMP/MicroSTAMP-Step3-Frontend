import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1 className={styles.logo}>
					<Link to="/">Step 3</Link>
				</h1>
				<nav className={styles.links}>
					<ul>
						<li>
							<Link to="/projects">Projects</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
