import { IValue } from "./IValue";

interface IVariable {
	id: string;
	name: string;
	values: IValue[];
}

export type { IVariable };
