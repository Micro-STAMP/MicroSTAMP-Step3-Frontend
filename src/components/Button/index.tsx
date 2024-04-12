import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";
interface ButtonProps {
	children: ReactNode;
	type?: "submit" | "reset" | "button" | undefined;
	size?: "normal" | "small";
	variant?: ButtonVariant;
	onClick?: () => void;
}
function Button({
	onClick,
	children,
	variant = "primary",
	type = "button",
	size = "small"
}: ButtonProps) {
	const buttonVariant = `${styles.button} ${styles[variant]} ${styles[size]}`;
	return (
		<>
			<button type={type} className={buttonVariant} onClick={onClick}>
				{children}
			</button>
		</>
	);
}

export default Button;
