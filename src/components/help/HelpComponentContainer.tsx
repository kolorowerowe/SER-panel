import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {useTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    footer: {
        position: "fixed",
        bottom: 0,
        right: 0,
        paddingBottom: 10,
        paddingRight: 10,
    },
    contactStaff: {
        marginTop: theme.spacing(6),
        maxWidth: 600
    },
    contactDeveloper: {
        marginTop: theme.spacing(2),
        maxWidth: 600
    }
}));


const HelpComponentContainer: React.FC = () => {

    const {t} = useTranslation();
    const styles = useStyles();

    return <div>
        <Grid container spacing={2}>

            <Grid item xs={12}>
                <Typography variant={'h3'}>
                    {t('help:greeting')}
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography variant={'h5'}>
                    {t('help:intro')}
                </Typography>
            </Grid>


            <Grid item xs={12} className={styles.contactStaff}>
                <Typography>
                    {t('help:contactStaff1')}
                    <Link href="mailto:dont-send-message@temp.com">
                        {t('help:contactStaffName')}
                    </Link>
                    {t('help:contactStaff2')}
                </Typography>
            </Grid>

            <Grid item xs={12} className={styles.contactDeveloper}>
                <Typography>
                    {t('help:contactDeveloper1')}
                    <Link href="mailto:kolodziejd@student.agh.edu.pl">
                        {t('help:contactDeveloperName')}
                    </Link>
                    {t('help:contactDeveloper2')}
                </Typography>
            </Grid>

        </Grid>

        <Typography variant="body2" color="textSecondary" className={styles.footer}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.linkedin.com/in/domkol/">
                Dominik Kołodziej
            </Link>{' 2020.'}
        </Typography>
    </div>
}


export default HelpComponentContainer;