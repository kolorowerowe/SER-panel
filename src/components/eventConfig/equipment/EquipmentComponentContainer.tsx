import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {useSnackbar} from "../../../utils/useSnackbar";
import {fetchEquipmentListAction} from "../../../redux/actions/equipmentActions";
import EquipmentComponentView from "./EquipmentComponentView";

const EquipmentComponentContainer: React.FC = () => {

    const {equipmentList, loading, error, errorResponse} = useSelector((state: RootState) => state.equipment);
    const {authToken} = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const snackbar = useSnackbar();

    useEffect(() => {
        fetchEquipmentListAction(authToken, dispatch);
    }, [authToken]);


    return (
        <EquipmentComponentView/>
    );
};


export default EquipmentComponentContainer;
