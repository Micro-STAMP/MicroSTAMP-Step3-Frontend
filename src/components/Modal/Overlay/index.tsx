import styles from "../Modal.module.css";

interface OverlayProps {
	children: React.ReactNode;
}
function Overlay({ children }: OverlayProps) {
	return (
		<>
			<div className={styles.overlay}>{children}</div>
		</>
	);
}

export default Overlay;
