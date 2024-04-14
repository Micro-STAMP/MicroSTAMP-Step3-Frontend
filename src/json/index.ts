import { IController } from "@/interfaces/IController";
import { IProject } from "@/interfaces/IProjects";
import { IRule } from "@/interfaces/IRule";
import { IUnsafeControlAction } from "@/interfaces/IUnsafeControlAction";
import controllersJson from "@/json/controllers.json";
import hazardsJson from "@/json/hazards.json";
import projectsJson from "@/json/projects.json";
import rulesJson from "@/json/rules.json";
import ucasJson from "@/json/ucas.json";

const controllers = controllersJson as IController[];
const hazards = hazardsJson as IHazard[];
const projects = projectsJson as IProject[];
const rules = rulesJson as IRule[];
const ucas = ucasJson as IUnsafeControlAction[];

export { controllers, hazards, projects, rules, ucas };
