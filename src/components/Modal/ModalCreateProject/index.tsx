import Button from "@components/Button";
import Input from "@components/Input";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";
import { createProject } from "@http/Project";
import { ICreateProject } from "@interfaces/IProject";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function ModalCreateProject({ open, onClose }: ModalProps) {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const queryClient = useQueryClient();
	const { mutate: requestCreateProject } = useMutation({
		mutationFn: (project: ICreateProject) => createProject(project),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["projects"] });
		}
	});
	const handleCreateProject = () => {
		const project: ICreateProject = { name, description };
		requestCreateProject(project);
		onClose();
	};

	return (
		<ModalContainer open={open}>
			<Modal.Root>
				<Modal.Title title="New Project" />
				<Modal.Inputs>
					<Input label="Name" value={name} onChange={setName} />
					<Input label="Description" value={description} onChange={setDescription} />
				</Modal.Inputs>
				<Modal.Buttons>
					<Button size="normal" onClick={handleCreateProject}>
						Create
					</Button>
					<Button variant="secondary" size="normal" onClick={onClose}>
						Cancel
					</Button>
				</Modal.Buttons>
			</Modal.Root>
		</ModalContainer>
	);
}

export default ModalCreateProject;
