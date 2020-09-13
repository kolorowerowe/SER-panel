import React from 'react';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

type SecondaryTypographyProps = {
    label: string;
    displayGrid?: boolean;
}

const useStyles = makeStyles((theme) => ({
    secondaryField: {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.body2.fontSize
    }
}));


const SecondaryTypography: React.FunctionComponent<SecondaryTypographyProps> = ({label, displayGrid}: SecondaryTypographyProps) => {

    const classes = useStyles();

    return (
        displayGrid ? <Grid item xs={12}>
                <Typography className={classes.secondaryField}>
                    {label}
                </Typography>
            </Grid> :
            <div>
                <Typography className={classes.secondaryField}>
                    {label}
                </Typography>
            </div>
    );
};

export default SecondaryTypography;
