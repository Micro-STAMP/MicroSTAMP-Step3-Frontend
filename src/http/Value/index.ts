import { http } from "@http/AxiosConfig";
import { IException } from "@interfaces/IException";
import { ICreateValue } from "@interfaces/IValue";
import { AxiosError } from "axios";

const VALUE_ENDPOINT = "value";

// CREATE -----------------------------------------

const createValue = async (ca: ICreateValue) => {
	try {
		const res = await http.post(VALUE_ENDPOINT, ca);
		console.log(res.data);
	} catch (err) {
		console.log(err);
		throw new Error("Error creating Value.");
	}
};

export { createValue };

// READ -------------------------------------------

// TODO

// DELETE -----------------------------------------

const deleteValue = async (id: number) => {
	try {
		await http.delete(`${VALUE_ENDPOINT}/${id}`);
	} catch (err) {
		const axiosError = (await err) as AxiosError<IException>;
		console.log(axiosError);
		throw new Error("Error deleting Value.");
	}
};

export { deleteValue };

// ------------------------------------------------
