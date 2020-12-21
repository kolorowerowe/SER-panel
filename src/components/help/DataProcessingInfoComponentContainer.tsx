import React from "react";
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    marginTop: {
        marginTop: theme.spacing(2),
    },
    dataProcessingElement: {
        maxWidth: 800,
        margin: 15
    }
}));


const DataProcessingInfoComponent: React.FC = () => {

    const {t} = useTranslation();
    const styles = useStyles();

    return <div>
        <Grid container spacing={2}>

            <Grid item xs={12}>
                <Typography variant={'h4'}>
                    {t('law:dataProcessingHeader')}
                </Typography>
            </Grid>

            <Grid item xs={12} className={styles.marginTop}>
                {[1, 2, 3, 4, 5, 6, 7].map(num => <Typography className={styles.dataProcessingElement}>
                    {num}. {t(`law:dataProcessing${num}`)}
                </Typography>)}
            </Grid>

        </Grid>

    </div>
}


export default DataProcessingInfoComponent;