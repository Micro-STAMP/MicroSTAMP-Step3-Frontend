import Button from "@components/Button";
import Input from "@components/Input";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";
import { createProject } from "@http/Project";
import { ICreateProject } from "@interfaces/IProject";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

function ModalCreateProject({ open, onClose }: ModalProps) {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const queryClient = useQueryClient();
	const { mutateAsync: requestCreateProject, isPending } = useMutation({
		mutationFn: (project: ICreateProject) => createProject(project),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["projects"] });
		},
		onError: err => {
			toast.error(err.message);
		}
	});
	const handleCreateProject = async () => {
		const project: ICreateProject = { name, description };
		await requestCreateProject(project);
		setName("");
		setDescription("");
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
					<Button variant="secondary" size="normal" onClick={onClose}>
						Cancel
					</Button>
					<Button size="normal" onClick={handleCreateProject} isLoading={isPending}>
						Create
					</Button>
				</Modal.Buttons>
			</Modal.Root>
		</ModalContainer>
	);
}

export default ModalCreateProject;
