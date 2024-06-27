import { http } from "@http/AxiosConfig";
import { IReadConstraint } from "@interfaces/IConstraint";

const CONSTRAINT_ENDPOINT = "safety-constraint";

// CREATE -----------------------------------------

// READ -------------------------------------------

const getConstraintByUCA = async (uca_id: number) => {
	try {
		const res = await http.get<IReadConstraint>(`${CONSTRAINT_ENDPOINT}/uca/${uca_id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export { getConstraintByUCA };

// ------------------------------------------------
