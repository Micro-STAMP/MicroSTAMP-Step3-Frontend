import { IValue } from "@/interfaces/IValue";
import { BiX as X } from "react-icons/bi";
import styles from "./ItemValues.module.css";

interface ItemValuesProps {
	values: IValue[];
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
