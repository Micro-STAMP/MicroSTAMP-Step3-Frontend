import { http } from "@http/AxiosConfig";
import { IException } from "@interfaces/IException";
import { ICreateRule } from "@interfaces/IRule/ICreateRule";
import { IReadListRule } from "@interfaces/IRule/IReadListRule";
import { IReadRule } from "@interfaces/IRule/IReadRule";
import { AxiosError } from "axios";

const RULE_ENDPOINT = "rule";
const RULE_CA_ENDPOINT = (ca_id: number) => `${RULE_ENDPOINT}/control-action/${ca_id}`;

// CREATE -----------------------------------------

const createRule = async (rule: ICreateRule) => {
	try {
		const res = await http.post(RULE_ENDPOINT, rule);
		console.log(res.data);
	} catch (err) {
		console.log(err);
		throw new Error("Error creating Rule.");
	}
};

export { createRule };

// READ -------------------------------------------

const getRules = async (ca_id: number) => {
	try {
		const res = await http.get<IReadListRule[]>(RULE_CA_ENDPOINT(ca_id));
		return res.data;
	} catch (err) {
		console.log(err);
	}
};
const getRuleById = async (id: number) => {
	try {
		const res = await http.get<IReadRule>(`${RULE_ENDPOINT}/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export { getRuleById, getRules };

// DELETE -----------------------------------------

const deleteRule = async (id: number) => {
	try {
		await http.delete(`${RULE_ENDPOINT}/${id}`);
	} catch (err) {
		const axiosError = (await err) as AxiosError<IException>;
		console.log(axiosError);
		throw new Error("Error deleting Rule.");
	}
};

export { deleteRule };

// ------------------------------------------------
