import { http } from "@http/AxiosConfig";
import { ICreateRule } from "@interfaces/IRule/ICreateRule";
import { IReadListRule } from "@interfaces/IRule/IReadListRule";
import { IReadRule } from "@interfaces/IRule/IReadRule";

const RULE_ENDPOINT = "rule";
const RULE_CA_ENDPOINT = (ca_id: number) => `${RULE_ENDPOINT}/control-action/${ca_id}`;

// CREATE -----------------------------------------

const createRule = async (rule: ICreateRule) => {
	try {
		const res = await http.post(RULE_ENDPOINT, rule);
		console.log(res.data);
	} catch (err) {
		throw new Error();
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

// ------------------------------------------------
