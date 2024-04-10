import { IControlAction } from "./IControlAction";

interface IController {
	id: string;
	name: string;
	slug: string;
	control_actions: IControlAction[];
}

export type { IController };
