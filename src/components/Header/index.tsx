import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<span className={styles.logo}>
					<Link to="/">Step 3</Link>
				</span>
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
