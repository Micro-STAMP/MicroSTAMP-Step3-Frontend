import { ModalConfirm } from "@components/Modal";
import { deleteValue } from "@http/Value";
import { IControllerValueDto } from "@interfaces/IController/IReadController";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { BiX as X } from "react-icons/bi";
import { toast } from "sonner";
import styles from "./ItemValues.module.css";

interface ItemValuesProps {
	values: IControllerValueDto[];
}
function ItemValues({ values }: ItemValuesProps) {
	const queryClient = useQueryClient();

	const [modalDeleteValue, setModalDeleteValue] = useState(false);
	const toggleModalDeleteValue = () => setModalDeleteValue(!modalDeleteValue);

	const [selectedValue, setSelectedValue] = useState<number | null>(null);
	const { mutateAsync: requestDeleteValue, isPending: isDeletingVal } = useMutation({
		mutationFn: (id: number) => deleteValue(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["controller"] });
			toast.success("Value deleted.");
		},
		onError: err => {
			toast.error(err.message);
		}
	});
	const handleDeleteValue = async () => {
		if (selectedValue) {
			await requestDeleteValue(selectedValue);
			toggleModalDeleteValue();
			setSelectedValue(null);
		}
	};

	return (
		<>
			<div className={styles.values}>
				{values.map(value => (
					<div className={styles.value} key={value.id}>
						<button
							type="button"
							onClick={() => {
								setSelectedValue(value.id);
								toggleModalDeleteValue();
							}}
						>
							<X />
						</button>
						<span>{value.name}</span>
					</div>
				))}
			</div>
			<ModalConfirm
				open={modalDeleteValue}
				onClose={toggleModalDeleteValue}
				label="Delete Value"
				message="Are you sure you want to delete this value?"
				onConfirm={handleDeleteValue}
				btnText="Delete"
				isLoading={isDeletingVal}
			/>
		</>
	);
}

export default ItemValues;
