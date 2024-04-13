import Button from "@components/Button";
import Input from "@components/Input";

import styles from "./LoginForm.module.css";

function LoginForm() {
	return (
		<form className={styles.login_form}>
			<h2 className={styles.title}>Login</h2>
			<div className={styles.inputs}>
				<Input label="Name" required />
				<Input type="password" label="Password" required />
			</div>
			<div className={styles.buttons}>
				<Button type="submit">Login</Button>
				<Button variant="secondary">Register</Button>
			</div>
		</form>
	);
}

export default LoginForm;
