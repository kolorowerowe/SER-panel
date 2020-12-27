import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {useSnackbar} from "../utils/useSnackbar";
import {useTranslation} from "react-i18next";
import {downloadFile} from "../utils/DownloadUtils";

const baseUrl = process.env.REACT_APP_BACK_END_URL;


export const useCompaniesData = () => {


    const {authToken} = useSelector((state: RootState) => state.auth);
    const snackbar = useSnackbar();
    const {t} = useTranslation();


    const handleCompaniesExport = () => {

        axios.get(`${baseUrl}/company/export`, {
            responseType: 'blob',
            headers: {'Authorization': `Bearer ${authToken}`}
        })
            .then(res => {
                const suggestedFileName = res.headers['x-suggested-filename'];

                downloadFile(res.data, suggestedFileName, 'text/csv');
                snackbar.addSuccess(t('general:successfullyExported'));
            })
            .catch((e) => {
                console.error(e)
                snackbar.addError(t('general:failedExport'));
            });
    }

    const handleCatalogExport = () => {

        axios.get(`${baseUrl}/company/export/catalog`, {
            responseType: 'blob',
            headers: {'Authorization': `Bearer ${authToken}`}
        })
            .then(res => {
                const suggestedFileName = res.headers['x-suggested-filename'];

                downloadFile(res.data, suggestedFileName, 'text/csv');
                snackbar.addSuccess(t('general:successfullyExported'));
            })
            .catch((e) => {
                console.error(e)
                snackbar.addStatus(t('general:failedExport'), 'error');
            });
    }


    return {
        handleCompaniesExport,
        handleCatalogExport
    };

};