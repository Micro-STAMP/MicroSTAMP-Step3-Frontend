import { IControlAction } from "./IControlAction";
import { IVariable } from "./IVariable";

interface IController {
	id: string;
	name: string;
	slug: string;
	control_actions: IControlAction[];
	variables: IVariable[];
}

export type { IController };
