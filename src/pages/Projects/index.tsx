import { ProjectsContainer } from "@components/EntityContainer";
import { getProjects } from "@http/Project";
import { useQuery } from "@tanstack/react-query";

function Projects() {
	const {
		data: projects,
		isLoading,
		isError
	} = useQuery({
		queryKey: ["projects"],
		queryFn: () => getProjects()
	});

	if (isLoading) return <h1>Loading...</h1>;
	if (isError || projects === undefined) return <h1>Error</h1>;
	return (
		<>
			<ProjectsContainer projects={projects} />
		</>
	);
}

export default Projects;
