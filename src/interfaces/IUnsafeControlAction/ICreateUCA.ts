interface ICreateUCA {
	control_action_id: number;
	values_ids: number[];
	hazard_id: number;
	type: string;
	project_id: number;
	rule_tag?: string;
}

export type { ICreateUCA };
