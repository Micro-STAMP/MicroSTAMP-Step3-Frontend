import Button from "@/components/Button";
import { AddButton, DeleteButton, EditButton, EditDeleteButton } from "@/components/IconButton";

function Home() {
	return (
		<>
			<h1>Home Page</h1>

			{/* Testes de componentes:  */}
			<>
				<EditButton onClick={() => console.log("")} />
				<DeleteButton onClick={() => console.log("")} />
				<AddButton onClick={() => console.log("")} />
				<EditDeleteButton onEdit={() => console.log("")} onDelete={() => console.log("")} />
			</>
			<>
				<Button onClick={() => console.log()}>Export Project</Button>
				<Button variant="secondary" onClick={() => console.log()}>
					Remove Project
				</Button>
			</>
		</>
	);
}

export default Home;
