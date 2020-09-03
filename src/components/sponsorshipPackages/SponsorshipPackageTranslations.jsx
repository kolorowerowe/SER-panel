import React from 'react';
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const SponsorshipPackageTranslations = props => {

    const {
        sponsorshipPackageTranslationFields: {
            translations = [],
            setTranslations,
            setName,
            setDescription
        }
    } = props;

    const {t} = useTranslation();
    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            {translations.map(translation => (
                <Grid item xs={6}>
                    <Typography className={classes.languageCode}>
                        {translation.languageCode}
                    </Typography>

                    <TextField
                        value={translation.name}
                        label={t('sponsorshipPackage:name')}
                        onChange={e => setName(e.target.value, translation.languageCode)}
                        className={classes.formElement}
                        fullWidth
                    />

                    <TextField
                        value={translation.description}
                        label={t('sponsorshipPackage:description')}
                        onChange={e => setDescription(e.target.value, translation.languageCode)}
                        className={classes.formElement}
                        fullWidth
                        multiline
                    />
                </Grid>
            ))}
        </Grid>

    );
};

const useStyles = makeStyles((theme) => ({
    languageCode: {
        textAlign: 'center'
    },
    formElement:{
        marginTop: theme.spacing(2)
    }
}));

SponsorshipPackageTranslations.propTypes = {
    sponsorshipPackageTranslationFields: PropTypes.object.isRequired
};

export default SponsorshipPackageTranslations;
