import { UCAType } from "./UCAType";

interface IRule {
	id: string;
	tag: string;
	values: {
		variable: string;
		value: string;
	}[];
	hazard: string;
	types: UCAType[];
}

export type { IRule };
