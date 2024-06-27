import Button from "@components/Button";
import TitleDisplay from "@components/TitleDisplay";
import UCAsList from "@components/UCAsList";
import { getControllerById } from "@http/Controller";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";

function UCAs() {
	const { id } = useParams();
	if (!id) return <Navigate to="/projects" />;

	const {
		data: controller,
		isLoading,
		isError
	} = useQuery({
		queryKey: ["controller-uca", id],
		queryFn: () => getControllerById(parseInt(id))
	});

	if (isLoading) return <h1>Loading...</h1>;
	if (isError || !controller) return <h1>Error</h1>;
	return (
		<>
			<TitleDisplay project={controller.project_name} controller={controller.name} />
			<UCAsList controller_id={controller.id} />
			<div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
				<Button>Export JSON</Button>
			</div>
		</>
	);
}

export default UCAs;
