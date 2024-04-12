import Button from "@components/Button";
import {
	AddButton,
	DeleteButton,
	EditButton,
	EditDeleteButton,
	LinkButton
} from "@components/IconButton";
import Input from "@components/Input";

function Home() {
	return (
		<>
			<h1>Home Page</h1>

			{/* Testes de componentes:  */}
			<>
				<div
					style={{
						width: "400px",
						boxShadow: "var(--shadow25)",
						padding: "24px",
						backgroundColor: "var(--color-gray)",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "12px",
						borderRadius: "10px"
					}}
				>
					<Input label="Name" required />
					<Input type="password" label="Password" required />
				</div>
			</>
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
