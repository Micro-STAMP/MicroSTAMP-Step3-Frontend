import { http } from "@http/AxiosConfig";
import { IReadContextTable } from "@interfaces/IContextTable";

const CONTEXT_TABLE_ENDPOINT = "context-table";

// CREATE -----------------------------------------

const createContextTable = async (controller_id: number) => {
	try {
		const res = await http.post<IReadContextTable>(CONTEXT_TABLE_ENDPOINT, {
			controller_id: controller_id
		});
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export { createContextTable };

// READ -------------------------------------------

const getContextTableById = async (id: number) => {
	try {
		const res = await http.get<IReadContextTable>(`${CONTEXT_TABLE_ENDPOINT}/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};
const getContextTableByController = async (controller_id: number) => {
	try {
		const res = await http.get<IReadContextTable>(
			`${CONTEXT_TABLE_ENDPOINT}/controller/${controller_id}`
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export { getContextTableByController, getContextTableById };

// ------------------------------------------------
