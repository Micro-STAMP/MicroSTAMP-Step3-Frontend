import { http } from "@http/AxiosConfig";
import { ICreateProject, IProjectDetails, IProjectListItem } from "@interfaces/IProject";

const PROJECT_ENDPOINT = "project";

// CREATE -----------------------------------------

const createProject = async (project: ICreateProject) => {
	try {
		const res = await http.post(PROJECT_ENDPOINT, project);
		console.log(res.data);
	} catch (err) {
		console.log(err);
		throw new Error("Error creating Project.");
	}
};

export { createProject };

// READ -------------------------------------------

const getProjects = async () => {
	try {
		const res = await http.get<IProjectListItem[]>(PROJECT_ENDPOINT);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};
const getProjectById = async (id: number) => {
	try {
		const res = await http.get<IProjectDetails>(`${PROJECT_ENDPOINT}/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export { getProjectById, getProjects };

// UPDATE -----------------------------------------
// TODO

// DELETE -----------------------------------------

const deleteProject = async (id: number) => {
	try {
		await http.delete(`${PROJECT_ENDPOINT}/${id}`);
	} catch (err) {
		console.log(err);
		throw new Error("Error deleting Project.");
	}
};

export { deleteProject };

// ------------------------------------------------
