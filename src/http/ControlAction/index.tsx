import { http } from "@http/AxiosConfig";
import { ICreateControlAction, IReadControlAction } from "@interfaces/IControlAction";
import { IException } from "@interfaces/IException";
import { AxiosError } from "axios";

const CONTROL_ACTION_ENDPOINT = "control-action";

// CREATE -----------------------------------------

const createControlAction = async (ca: ICreateControlAction) => {
	try {
		const res = await http.post(CONTROL_ACTION_ENDPOINT, ca);
		console.log(res.data);
	} catch (err) {
		console.log(err);
		throw new Error("Error creating Control Action.");
	}
};

export { createControlAction };

// READ -------------------------------------------

const getControlActionById = async (id: number) => {
	try {
		const res = await http.get<IReadControlAction>(`${CONTROL_ACTION_ENDPOINT}/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export { getControlActionById };

// DELETE -----------------------------------------

const deleteControlAction = async (id: number) => {
	try {
		await http.delete(`${CONTROL_ACTION_ENDPOINT}/${id}`);
	} catch (err) {
		const axiosError = (await err) as AxiosError<IException>;
		console.log(axiosError);
		throw new Error("Error deleting Control Action.");
	}
};

export { deleteControlAction };

// ------------------------------------------------
