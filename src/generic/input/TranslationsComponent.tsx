import React from 'react';
import TextField from "@material-ui/core/TextField";
import {useTranslation} from "react-i18next";
import Tabs from "@material-ui/core/Tabs";
import {Tab} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {TranslationFields} from "../../declarations/types";

type Props = {
    translationsField: TranslationFields;
}

const useStyles = makeStyles((theme) => ({
    formElement: {
        marginTop: theme.spacing(2)
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`
    },
    tab: {
        alignSelf: 'center'
    }
}));

const TranslationsComponent: React.FC<Props> = ({translationsField}: Props) => {

    const {
        translations = [],
        setName,
        setDescription
    } = translationsField;

    const {t} = useTranslation();
    const classes = useStyles();

    const [openLanguage, setOpenLanguage] = React.useState(translations[0].languageCode);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string): void => {
        setOpenLanguage(newValue);
    };


    return (
        <Grid container spacing={2} alignItems="center"
        >
            <Grid item xs={2}>
                <Tabs value={openLanguage}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      orientation="vertical"
                      className={classes.tabs}
                      centered={true}
                >

                    {translations.map(translation => <Tab key={translation.languageCode}
                                                          value={translation.languageCode}
                                                          label={translation.languageCode}
                                                          className={classes.tab}/>)}
                </Tabs>
            </Grid>
            <Grid item xs={10}>
                {translations.map((translation) => <div key={translation.languageCode}>

                    {openLanguage === translation.languageCode && <div>
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
                    </div>}
                </div>)}
            </Grid>
        </Grid>
    );
};

export default TranslationsComponent;
