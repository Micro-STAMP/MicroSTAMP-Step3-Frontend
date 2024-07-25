import { http } from "@http/AxiosConfig";
import { ICreateController, IReadController, IReadListController } from "@interfaces/IController";
import { IException } from "@interfaces/IException";
import { AxiosError } from "axios";

const CONTROLLER_ENDPOINT = "controller";
const CONTROLLER_PROJECT_ENDPOINT = (project_id: number) =>
	`${CONTROLLER_ENDPOINT}/project/${project_id}`;

// CREATE -----------------------------------------

const createController = async (controller: ICreateController) => {
	try {
		const res = await http.post(CONTROLLER_ENDPOINT, controller);
		console.log(res.data);
	} catch (err) {
		console.log(err);
		throw new Error("Error creating Controller.");
	}
};

export { createController };

// READ -------------------------------------------

const getControllers = async (project_id: number) => {
	try {
		const res = await http.get<IReadListController[]>(CONTROLLER_PROJECT_ENDPOINT(project_id));
		return res.data;
	} catch (err) {
		console.log(err);
	}
};
const getControllerById = async (id: number) => {
	try {
		const res = await http.get<IReadController>(`${CONTROLLER_ENDPOINT}/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export { getControllerById, getControllers };

// DELETE -----------------------------------------

const deleteController = async (id: number) => {
	try {
		await http.delete(`${CONTROLLER_ENDPOINT}/${id}`);
	} catch (err) {
		const axiosError = (await err) as AxiosError<IException>;
		console.log(axiosError);
		throw new Error("Error deleting Controller.");
	}
};

export { deleteController };

// ------------------------------------------------
