interface ICreateRule {
	name: string;
	control_action_id: number;
	values_ids: number[];
	types: string[];
	hazard_id: number;
}

export type { ICreateRule };
