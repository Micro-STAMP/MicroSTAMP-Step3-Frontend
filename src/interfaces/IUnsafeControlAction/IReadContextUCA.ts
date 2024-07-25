export interface IUCAValueDto {
	id: number;
	name: string;
	variable_name: string;
}

interface IReadContextUCA {
	ucaId: number;
	ucaName: string;
	values: IUCAValueDto[];
	type: string;
	rule: string;
}

export type { IReadContextUCA };
