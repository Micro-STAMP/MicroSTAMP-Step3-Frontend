import MultiSelect from "./MultiSelect";

const types = [
	"Provided",
	"Not provided",
	"Too early",
	"Too late",
	"Out of order",
	"Stopped too soon",
	"Applied too long"
];

interface TypesMultiSelectProps {
	values: string[];
	onChange: (values: string[]) => void;
}
function TypesMultiSelect({ values, onChange }: TypesMultiSelectProps) {
	return (
		<>
			<MultiSelect options={types} values={values} onChange={onChange} />
		</>
	);
}

export default TypesMultiSelect;
