import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {useSnackbar} from "../../../../utils/useSnackbar";
import {addEquipmentAction, fetchEquipmentListAction} from "../../../../redux/actions/equipmentActions";
import EquipmentComponentView from "./EquipmentComponentView";
import {NewEquipmentBody} from "../../../../declarations/types";

const EquipmentComponentContainer: React.FC = () => {

    const {equipmentList, loading, error, errorResponse} = useSelector((state: RootState) => state.equipment);
    const {authToken} = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const snackbar = useSnackbar();

    useEffect(() => {
        dispatch(fetchEquipmentListAction());
    }, []);

    const [addEquipmentDialogOpen, setAddEquipmentDialogOpen] = useState<boolean>(false);

    const handleAddEquipmentSubmit = (equipmentBody: NewEquipmentBody): void => {
        dispatch(addEquipmentAction(equipmentBody, snackbar));
        setAddEquipmentDialogOpen(false);
    }

    return (
        <EquipmentComponentView equipmentList={equipmentList}
                                loading={loading}
                                error={error}
                                errorResponse={errorResponse}
                                addEquipmentDialogOpen={addEquipmentDialogOpen}
                                setAddEquipmentDialogOpen={setAddEquipmentDialogOpen}
                                handleAddEquipmentSubmit={handleAddEquipmentSubmit}
        />
    );
};


export default EquipmentComponentContainer;
