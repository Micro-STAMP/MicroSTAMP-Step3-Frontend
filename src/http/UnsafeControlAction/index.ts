import { http } from "@http/AxiosConfig";
import { ICreateUCA, IReadContextUCA, IReadUCA } from "@interfaces/IUnsafeControlAction";

const UCA_ENDPOINT = "unsafe-control-action";

// CREATE -----------------------------------------

const createUCA = async (uca: ICreateUCA) => {
	try {
		const res = await http.post(UCA_ENDPOINT, uca);
		console.log(res.data);
	} catch (err) {
		console.log(err);
		throw new Error("Error creating UCA.");
	}
};

const createUCAByRule = async (rule_id: number) => {
	try {
		const res = await http.post(`${UCA_ENDPOINT}/rule/${rule_id}`);
		console.log(res.data);
	} catch (err) {
		console.log(err);
		throw new Error("Error creating UCAs by rule.");
	}
};

export { createUCA, createUCAByRule };

// READ -------------------------------------------

const getUCAById = async (id: number) => {
	try {
		const res = await http.get<IReadUCA>(`${UCA_ENDPOINT}/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

const getUCAsByController = async (controller_id: number) => {
	try {
		const res = await http.get<IReadUCA[]>(`${UCA_ENDPOINT}/controller/${controller_id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

const getUCAsContextByControlAction = async (ca_id: number) => {
	try {
		const res = await http.get<IReadContextUCA[]>(`control-action/${ca_id}/uca-context`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export { getUCAById, getUCAsByController, getUCAsContextByControlAction };

// ------------------------------------------------
