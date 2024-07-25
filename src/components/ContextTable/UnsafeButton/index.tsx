import ModalCreateUCA from "@components/Modal/ModalCreateUCA";
import { ITableContext } from "@interfaces/IContextTable";
import { IReadController } from "@interfaces/IController";
import { IReadContextUCA } from "@interfaces/IUnsafeControlAction";
import { memo, useCallback, useEffect, useState } from "react";
import styles from "../ContextTable.module.css";

interface UnsafeButtonProps {
	type: string;
	context: ITableContext;
	ca_id: number;
	controller: IReadController;
	ucas: IReadContextUCA[];
}
function UnsafeButton({ type, context, ca_id, controller, ucas }: UnsafeButtonProps) {
	const [unsafe, setUnsafe] = useState(false);
	const [byRule, setByRule] = useState<string | null>(null);
	const [modalCreateUCAOpen, setModalCreateUCAOpen] = useState(false);
	const toggleModalCreateUCA = () => setModalCreateUCAOpen(!modalCreateUCAOpen);

	const isContextIncluded = useCallback(
		(ucaValues: number[], contextValues: number[]) => {
			return ucaValues.every(uca_v => contextValues.includes(uca_v));
		},
		[context]
	);

	useEffect(() => {
		const contextValues = context.values.map(v => v.value_id);
		const typeValue = type.toLocaleUpperCase().split(" ").join("_");
		const checkIfUnsafe = () => {
			for (const uca of ucas) {
				const ucaValues = uca.values.map(v => v.id);
				if (uca.type === typeValue && isContextIncluded(ucaValues, contextValues)) {
					setUnsafe(true);
					if (uca.rule !== "") {
						setByRule(uca.rule);
					}
					return;
				}
			}
			setUnsafe(false);
			setByRule(null);
		};
		checkIfUnsafe();
	}, [ucas, type, context]);

	const buttonClass = unsafe ? styles.unsafe_button : styles.not_unsafe_button;
	return (
		<>
			<button
				type="button"
				onClick={toggleModalCreateUCA}
				className={buttonClass}
				disabled={unsafe}
			>
				{unsafe ? (
					!byRule ? (
						<span>Unsafe</span>
					) : (
						<span>{byRule}</span>
					)
				) : (
					<span>Unsafe?</span>
				)}
			</button>
			{!unsafe && (
				<ModalCreateUCA
					open={modalCreateUCAOpen}
					onClose={toggleModalCreateUCA}
					ca_id={ca_id}
					type={type}
					project_id={controller.project_id}
					variables={controller.variables}
					context={context}
				/>
			)}
		</>
	);
}

export default memo(UnsafeButton);
