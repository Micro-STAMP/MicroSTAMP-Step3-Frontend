import Button from "@components/Button";
import {
	AddButton,
	DeleteButton,
	EditButton,
	EditDeleteButton,
	LinkButton
} from "@components/IconButton";

function Home() {
	return (
		<>
			<h1>Home Page</h1>

			{/* Testes de componentes:  */}
			<>
				<EditButton onClick={() => {}} />
				<DeleteButton onClick={() => {}} />
				<AddButton onClick={() => {}} />
				<LinkButton to="/" />
				<EditDeleteButton onEdit={() => {}} onDelete={() => {}} />
			</>
			<>
				<Button>Export Project</Button>
				<Button variant="secondary">Remove Project</Button>
			</>
		</>
	);
}

export default Home;
