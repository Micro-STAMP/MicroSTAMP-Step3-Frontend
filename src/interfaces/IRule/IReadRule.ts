import { UCAType } from "@interfaces/UCAType";

interface IRuleControlActionDto {
	id: number;
	name: string;
}
interface IRuleValueDto {
	value_id: number;
	variable_name: string;
	value_name: string;
}
interface IRuleHazardDto {
	id: number;
	name: string;
}
interface IReadRule {
	id: number;
	name: string;
	control_action: IRuleControlActionDto;
	values: IRuleValueDto[];
	types: Set<UCAType>;
	hazard: IRuleHazardDto;
	tag: string;
}

export type { IReadRule };
