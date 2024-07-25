import Button from "@components/Button";
import {
	ControllersContainer,
	HazardsContainer,
	ProjectContainer
} from "@components/EntityContainer";
import { ModalConfirm } from "@components/Modal";
import { getControllers } from "@http/Controller";
import { getHazards } from "@http/Hazard";
import { deleteProject, getProjectById } from "@http/Project";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CSSProperties, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const buttonsDiv: CSSProperties = {
	display: "flex",
	justifyContent: "end",
	gap: "8px",
	flexWrap: "wrap",
	width: "100%"
};

function Project() {
	const { id } = useParams();
	if (!id) return <Navigate to="/projects" />;

	const [modalDeleteProject, setModalDeleteProject] = useState(false);
	const toggleModalDeleteProject = () => setModalDeleteProject(!modalDeleteProject);

	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { mutateAsync: requestDeleteProject, isPending } = useMutation({
		mutationFn: () => deleteProject(parseInt(id)),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["project", id] });
			toast.success("Project deleted.");
			navigate("/projects");
		},
		onError: err => {
			toast.error(err.message);
		}
	});
	const handleDeleteProject = async () => {
		await requestDeleteProject();
	};

	const {
		data: project,
		isLoading: projectLoading,
		isError: projectError
	} = useQuery({
		queryKey: ["project", id],
		queryFn: () => getProjectById(parseInt(id))
	});
	const {
		data: hazards,
		isLoading: hazardsLoading,
		isError: hazardsError
	} = useQuery({
		queryKey: ["project-hazards", id],
		queryFn: () => getHazards(parseInt(id))
	});
	const {
		data: controllers,
		isLoading: controllersLoading,
		isError: controllersError
	} = useQuery({
		queryKey: ["project-controllers", id],
		queryFn: () => getControllers(parseInt(id))
	});

	if (projectLoading || hazardsLoading || controllersLoading) return <h1>Loading...</h1>;
	if (projectError || project === undefined) return <h1>Error</h1>;
	if (hazardsError || hazards === undefined) return <h1>Error</h1>;
	if (controllersError || controllers === undefined) return <h1>Error</h1>;
	return (
		<>
			<ProjectContainer name={project.name} description={project.description} />
			<HazardsContainer hazards={hazards} project_id={parseInt(id)} />
			<ControllersContainer controllers={controllers} project_id={parseInt(id)} />

			<div style={buttonsDiv}>
				<Button size="normal">Export Project</Button>
				<Button
					variant="secondary"
					size="normal"
					isLoading={isPending}
					onClick={toggleModalDeleteProject}
				>
					Remove Project
				</Button>
			</div>
			<ModalConfirm
				open={modalDeleteProject}
				onClose={toggleModalDeleteProject}
				label="Delete Project"
				message="Are you sure you want to delete this project?"
				onConfirm={handleDeleteProject}
				btnText="Delete"
				isLoading={isPending}
			/>
		</>
	);
}

export default Project;
