import { http } from "@http/AxiosConfig";
import { IException } from "@interfaces/IException";
import { ICreateVariable, IReadVariable, IVariableListItem } from "@interfaces/IVariable";
import { AxiosError } from "axios";

const VARIABLE_ENDPOINT = "variable";

// CREATE -----------------------------------------

const createVariable = async (ca: ICreateVariable) => {
	try {
		const res = await http.post(VARIABLE_ENDPOINT, ca);
		console.log(res.data);
	} catch (err) {
		console.log(err);
		throw new Error("Error creating Variable.");
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

// DELETE -----------------------------------------

const deleteVariable = async (id: number) => {
	try {
		await http.delete(`${VARIABLE_ENDPOINT}/${id}`);
	} catch (err) {
		const axiosError = (await err) as AxiosError<IException>;
		console.log(axiosError);
		throw new Error("Error deleting Variable.");
	}
};

export { deleteVariable };

// ------------------------------------------------
