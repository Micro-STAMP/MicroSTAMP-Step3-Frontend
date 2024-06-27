import { UCAType } from "@interfaces/UCAType";

export interface IRuleHazardDto {
	id: number;
	name: string;
}
export interface IRuleValueDto {
	value_id: number;
	value_name: string;
	variable_id: number;
	variable_name: string;
}
interface IReadListRule {
	id: number;
	name: string;
	control_action_name: string;
	values: IRuleValueDto[];
	types: Set<UCAType>;
	hazard: IRuleHazardDto;
	tag: string;
}

export type { IReadListRule };
