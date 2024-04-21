import Select from "@components/Select";

const types = [
	{
		option: "Provided",
		value: "Provided"
	},
	{
		option: "Not provided",
		value: "Not provided"
	},
	{
		option: "Too early",
		value: "Too early"
	},
	{
		option: "Too late",
		value: "Too late"
	},
	{
		option: "Out of order",
		value: "Out of order"
	},
	{
		option: "Stopped too soon",
		value: "Stopped too soon"
	},
	{
		option: "Applied too long",
		value: "Applied too long"
	}
];

function Home() {
	return (
		<>
			<h1>Home Page</h1>

			{/* Testes de componentes:  */}
			<>
				<Select options={types} />
			</>
		</>
	);
}

export default Home;
