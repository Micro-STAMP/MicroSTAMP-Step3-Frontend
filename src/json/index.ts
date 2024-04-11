import { IController } from "@/interfaces/IController";
import { IProject } from "@/interfaces/IProjects";
import { IRule } from "@/interfaces/IRule";
import controllersJson from "@/json/controllers.json";
import hazardsJson from "@/json/hazards.json";
import projectsJson from "@/json/projects.json";
import rulesJson from "@/json/rules.json";

const controllers = controllersJson as IController[];
const hazards = hazardsJson as IHazard[];
const projects = projectsJson as IProject[];
const rules = rulesJson as IRule[];

export { controllers, hazards, projects, rules };
