import { http } from "@http/AxiosConfig";
import { ICreateControlAction, IReadControlAction } from "@interfaces/IControlAction";

const CONTROL_ACTION_ENDPOINT = "control-action";

// CREATE -----------------------------------------

const createControlAction = async (ca: ICreateControlAction) => {
	try {
		const res = await http.post(CONTROL_ACTION_ENDPOINT, ca);
		console.log(res.data);
	} catch (err) {
		console.log(err);
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

// ------------------------------------------------
