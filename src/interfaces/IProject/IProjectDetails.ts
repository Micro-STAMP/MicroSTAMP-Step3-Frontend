interface HazardDto {
	name: string;
}
interface ControllerDto {
	name: string;
}
interface UnsafeControlActionDto {
	name: string;
}

interface IProjectDetails {
	id: number;
	name: string;
	description: string;

	hazards: HazardDto[];
	controllers: ControllerDto[];
	unsafe_control_actions: UnsafeControlActionDto[];
}

export type { IProjectDetails };
