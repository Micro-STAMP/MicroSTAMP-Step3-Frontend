import { IController } from "@/interfaces/IController";
import { IProject } from "@/interfaces/IProjects";
import controllersJson from "@/json/controllers.json";
import hazardsJson from "@/json/hazards.json";
import projectsJson from "@/json/projects.json";

const controllers = controllersJson as IController[];
const hazards = hazardsJson as IHazard[];
const projects = projectsJson as IProject[];

export { controllers, hazards, projects };
