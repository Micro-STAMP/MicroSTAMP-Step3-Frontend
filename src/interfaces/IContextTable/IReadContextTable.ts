interface ITableValue {
	value_id: number;
	variable_name: string;
	value_name: string;
}
interface ITableContext {
	id: number;
	values: ITableValue[];
}

interface IReadContextTable {
	id: number;
	contexts: ITableContext[];
	controller_id: number;
	controller_name: string;
}

export type { IReadContextTable, ITableContext, ITableValue };
