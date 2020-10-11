import React, {useEffect, useMemo} from 'react';
import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";
import DefaultCard from "../../../../generic/displayData/DefaultCard";
import CurrentEquipmentElement from "../../equipment/generic/CurrentEquipmentElement";
import {Equipment, SponsorshipPackage} from "../../../../declarations/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {fetchEquipmentListAction} from "../../../../redux/actions/equipmentActions";
import AvailableEquipmentElement from "../../equipment/generic/AvailableEquipmentElement";
import {
    addEquipmentToSponsorshipPackageAction,
    deleteSpEquipmentAction,
    modifySpEquipmentAction
} from "../../../../redux/actions/sponsorshipPackagesActions";

type Props = {
    sponsorshipPackageDetails: SponsorshipPackage;
    loading: boolean;
}

const SponsorshipPackageEquipmentComponent: React.FC<Props> = (props: Props) => {

    const {
        sponsorshipPackageDetails: {
            id,
            spEquipmentList = []
        } = {},
        loading,
    } = props;

    const {
        equipmentList: availableEquipmentList = [],
        loading: availableEquipmentLoading,
        error: availableEquipmentError,
        errorResponse: availableEquipmentErrorResponse
    } = useSelector((state: RootState) => state.equipment);
    const dispatch = useDispatch();
    const {t} = useTranslation();


    useEffect(() => {
        dispatch(fetchEquipmentListAction());
    }, []);

    const onAddEquipmentSubmit = (equipmentId: string, count: number): void => {
        const request = {
            equipmentId,
            count
        };

        dispatch(addEquipmentToSponsorshipPackageAction(id, request));
    }


    const onModifySpEquipmentSubmit = (spEquipmentId: string, count: number): void => {
        const request = {
            count
        };
        dispatch(modifySpEquipmentAction(id, spEquipmentId, request));
    }

    const onDeleteSpEquipmentSubmit = (spEquipmentId: string): void => {
        dispatch(deleteSpEquipmentAction(id, spEquipmentId));
    }

    const availableEquipmentListWithoutAlreadyIncluded = useMemo(() => {
        return (availableEquipmentList as Equipment[])
            .filter(equipment => {
                return !spEquipmentList.map(spEquipment => spEquipment.equipment.id).includes(equipment.id);
            })
    }, [spEquipmentList, availableEquipmentList]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <DefaultCard title={t('sponsorshipPackage:currentEquipment')}
                             divider>
                    {spEquipmentList.map(spEquipment => <CurrentEquipmentElement spEquipment={spEquipment}
                                                                                 onModifySpEquipmentSubmit={onModifySpEquipmentSubmit}
                                                                                 onDeleteSpEquipmentSubmit={onDeleteSpEquipmentSubmit}
                                                                                 key={spEquipment.id}/>)}
                </DefaultCard>
            </Grid>
            <Grid item xs={12}>
                <DefaultCard title={t('sponsorshipPackage:addNewEquipment')}
                             loading={availableEquipmentLoading}
                             error={availableEquipmentError}
                             errorResponse={availableEquipmentErrorResponse}
                             divider>
                    {availableEquipmentListWithoutAlreadyIncluded.map(equipment => <AvailableEquipmentElement
                        equipment={equipment}
                        onAddEquipmentSubmit={onAddEquipmentSubmit}
                        key={equipment.id}/>)}
                </DefaultCard>
            </Grid>
        </Grid>

    );
};


export default SponsorshipPackageEquipmentComponent;


