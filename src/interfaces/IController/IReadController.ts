export interface IControllerControlActionDto {
	id: number;
	name: string;
}
export interface IControllerValueDto {
	id: number;
	name: string;
}
export interface IControllerVariableDto {
	id: number;
	name: string;
	values: IControllerValueDto[];
}
interface IReadController {
	id: number;
	name: string;
	control_actions: IControllerControlActionDto[];
	variables: IControllerVariableDto[];
	context_table_id: number | null;
	project_name: string;
	project_id: number;
}

export type { IReadController };
