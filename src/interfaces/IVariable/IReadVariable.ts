interface IVariableValueDto {
	id: number;
	name: string;
}
interface IReadVariable {
	id: number;
	name: string;
	values: IVariableValueDto[];
	controller_name: string;
}

export type { IReadVariable };
