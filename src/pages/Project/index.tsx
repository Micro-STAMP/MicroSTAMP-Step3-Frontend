import EntityContainer from "@components/EntityContainer";
import { EditButton, EditDeleteButton } from "@components/IconButton";
import { BiLink as LinkIcon } from "react-icons/bi";

import Button from "@/components/Button";
import { Link } from "react-router-dom";
import styles from "./Project.module.css";

function Project() {
	return (
		<>
			<EntityContainer title="Project" justTitle>
				<div className={styles.projectContainer}>
					<div className={styles.details}>
						<div className={styles.name}>
							<div>
								<strong>Name: </strong>
								Insulin Pump
							</div>
							<EditButton onClick={() => console.log("edit project")} />
						</div>
						<div className={styles.description}>
							<div>
								<strong>Description: </strong>
								The Insulin Pump System is a medical device designed to administer
								insulin.
							</div>
							<EditButton onClick={() => console.log("edit project")} />
						</div>
					</div>
				</div>
			</EntityContainer>
			<EntityContainer title="Controllers">
				<div className={styles.controllersContainer}>
					<div className={styles.controller}>
						<Link to="/controller/1">
							<span>
								Insulin Pump <LinkIcon className={styles.icon} />
							</span>
						</Link>
						<EditDeleteButton onDelete={() => {}} onEdit={() => {}} />
					</div>
				</div>
			</EntityContainer>
			<EntityContainer title="Hazards">
				<div className={styles.hazardsContainer}>
					<div className={styles.hazard}>
						<span>Pumping insulin when glucose level is going down - hypoglycemia</span>
						<EditDeleteButton onDelete={() => {}} onEdit={() => {}} />
					</div>
				</div>
			</EntityContainer>

			<Button> Export Project</Button>
			<Button variant="secondary">Remove Project</Button>
		</>
	);
}

export default Project;
