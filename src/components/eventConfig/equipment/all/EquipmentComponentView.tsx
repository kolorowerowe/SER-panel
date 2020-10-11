import React from 'react';
import Button from "@material-ui/core/Button";
import {useTranslation} from "react-i18next";
import DefaultCard from "../../../../generic/displayData/DefaultCard";
import AddEquipmentDialog from "./AddEquipmentDialog";
import {Equipment, NewEquipmentBody} from "../../../../declarations/types";
import EquipmentTable from "./EquipmentTable";


type Props = {
    equipmentList: Equipment[];
    loading: boolean;
    error?: object;
    errorResponse?: object;

    addEquipmentDialogOpen: boolean;
    setAddEquipmentDialogOpen: (isOpen: boolean) => void;
    handleAddEquipmentSubmit: (equipmentBody: NewEquipmentBody) => void;
}

const EquipmentComponentView: React.FC<Props> = (props: Props) => {

    const {
        equipmentList,
        loading,
        error,
        errorResponse,

        setAddEquipmentDialogOpen,
    } = props;

    const {t} = useTranslation();

    const NewEquipmentButton = () => (
        <Button
            variant="outlined"
            color="primary"
            onClick={() => {
                setAddEquipmentDialogOpen(true)
            }}
        >
            {t('sponsorshipPackage:addNewEquipment')}
        </Button>
    );

    return (
        <DefaultCard title={t('sponsorshipPackage:allEquipments')}
                     buttonComponent={<NewEquipmentButton/>}
                     divider
                     loading={loading}
                     error={error}
                     errorResponse={errorResponse}
        >
            <AddEquipmentDialog {...props}/>
            <EquipmentTable equipmentList={equipmentList}/>
        </DefaultCard>
    );
};


export default EquipmentComponentView;
