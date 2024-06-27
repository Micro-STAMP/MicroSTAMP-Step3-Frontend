import { http } from "@http/AxiosConfig";
import { ICreateHazard, IReadHazard } from "@interfaces/IHazard";

const HAZARD_ENDPOINT = "hazard";
const HAZARD_PROJECT_ENDPOINT = (project_id: number) => `${HAZARD_ENDPOINT}/project/${project_id}`;

// CREATE -----------------------------------------

const createHazard = async (hazard: ICreateHazard) => {
	try {
		const res = await http.post(HAZARD_ENDPOINT, hazard);
		console.log(res.data);
	} catch (err) {
		console.log(err);
	}
};

export { createHazard };

// READ -------------------------------------------

const getHazards = async (project_id: number) => {
	try {
		const res = await http.get<IReadHazard[]>(HAZARD_PROJECT_ENDPOINT(project_id));
		return res.data;
	} catch (err) {
		console.log(err);
	}
};
const getHazardById = async (id: number) => {
	try {
		const res = await http.get<IReadHazard>(`${HAZARD_ENDPOINT}/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export { getHazardById, getHazards };

// ------------------------------------------------
