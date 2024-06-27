import { http } from "@http/AxiosConfig";
import { ICreateValue } from "@interfaces/IValue";

const VALUE_ENDPOINT = "value";

// CREATE -----------------------------------------

const createValue = async (ca: ICreateValue) => {
	try {
		const res = await http.post(VALUE_ENDPOINT, ca);
		console.log(res.data);
	} catch (err) {
		console.log(err);
	}
};

export { createValue };

// READ -------------------------------------------

// TODO
