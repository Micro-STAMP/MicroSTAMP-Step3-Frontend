import { IReadHazard } from "@interfaces/IHazard";
import Select from "../Select";
import { SelectOption } from "../Select/SelectOption";
import styles from "./HazardSelect.module.css";

interface HazardSelectProps {
	value: SelectOption;
	onChange: (value: SelectOption) => void;
	hazards: IReadHazard[];
}
function HazardSelect({ value, onChange, hazards }: HazardSelectProps) {
	if (value.label === "") {
		value.label = hazards[0].name;
		value.value = `${hazards[0].id}`;
	}
	const getHazardTag = () => {
		const hazard = hazards.find(hazard => hazard.name === value.label);
		return hazard?.tag_name;
	};
	return (
		<div className={styles.hazard_select}>
			<div className={styles.label}>{getHazardTag()}</div>
			<Select
				options={hazards.map(hazard => ({
					label: hazard.name,
					value: `${hazard.id}`
				}))}
				value={value}
				onChange={onChange}
				optionsPosition="top"
			/>
		</div>
	);
}

export default HazardSelect;
