import { IControllerValueDto } from "@interfaces/IController/IReadController";
import { BiX as X } from "react-icons/bi";
import styles from "./ItemValues.module.css";

interface ItemValuesProps {
	values: IControllerValueDto[];
}
function ItemValues({ values }: ItemValuesProps) {
	return (
		<div className={styles.values}>
			{values.map(value => (
				<div className={styles.value} key={value.id}>
					<button type="button">
						<X />
					</button>
					<span>{value.name}</span>
				</div>
			))}
		</div>
	);
}

export default ItemValues;
