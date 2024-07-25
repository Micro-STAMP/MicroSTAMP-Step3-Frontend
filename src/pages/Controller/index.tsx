import Button from "@components/Button";
import { ControlActionsContainer, VariablesContainer } from "@components/EntityContainer";
import TitleDisplay from "@components/TitleDisplay";
import { createContextTable } from "@http/ContextTable";
import { getControllerById } from "@http/Controller";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CSSProperties } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const buttonsDiv: CSSProperties = {
	display: "flex",
	justifyContent: "end",
	gap: "8px",
	flexWrap: "wrap",
	width: "100%"
};

function Controller() {
	const { id } = useParams();
	if (!id) return <Navigate to="/projects" />;

	const queryClient = useQueryClient();
	const { mutateAsync: requestCreateContextTable, isPending } = useMutation({
		mutationFn: () => createContextTable(parseInt(id)),
		onSuccess: () => {
			toast.success("Context Table created successfully");
			queryClient.invalidateQueries({ queryKey: ["controller"] });
		},
		onError: () => {
			toast.error("Failed to create context table");
		}
	});

	const handleCreateContextTable = async () => {
		await requestCreateContextTable();
	};

	const handleResetContextTable = async () => {};

	const {
		data: controller,
		isLoading,
		isError
	} = useQuery({
		queryKey: ["controller", id],
		queryFn: () => getControllerById(parseInt(id))
	});

	if (isLoading) return <h1>Loading...</h1>;
	if (isError || !controller) return <h1>Error</h1>;
	return (
		<>
			<TitleDisplay controller={controller.name} project={controller.project_name} />
			<ControlActionsContainer
				controlActions={controller.control_actions}
				controllerId={parseInt(id)}
			/>
			<VariablesContainer variables={controller.variables} controllerId={parseInt(id)} />

			<div style={buttonsDiv}>
				<Link to={`/controller/${id}/uca`}>
					<Button variant="primary" size="normal">
						See Unsafe Control Actions
					</Button>
				</Link>
				{!controller.context_table_id ? (
					<Button
						variant="secondary"
						size="normal"
						onClick={handleCreateContextTable}
						isLoading={isPending}
					>
						Create Context Table
					</Button>
				) : (
					<Button variant="secondary" size="normal" onClick={handleResetContextTable}>
						Reset Context Table
					</Button>
				)}
			</div>
		</>
	);
}

export default Controller;
