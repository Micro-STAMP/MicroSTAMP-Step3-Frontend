import { http } from "@http/AxiosConfig";
import { ICreateVariable, IReadVariable, IVariableListItem } from "@interfaces/IVariable";

const VARIABLE_ENDPOINT = "variable";

// CREATE -----------------------------------------

const createVariable = async (ca: ICreateVariable) => {
	try {
		const res = await http.post(VARIABLE_ENDPOINT, ca);
		console.log(res.data);
	} catch (err) {
		console.log(err);
	}
};

export { createVariable };

// READ -------------------------------------------

const getVariableById = async (id: number) => {
	try {
		const res = await http.get<IReadVariable>(`${VARIABLE_ENDPOINT}/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};
const getVariablesByController = async (controller_id: number) => {
	try {
		const res = await http.get<IVariableListItem[]>(
			`${VARIABLE_ENDPOINT}/controller/${controller_id}`
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export { getVariableById, getVariablesByController };

// ------------------------------------------------
