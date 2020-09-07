import React from 'react';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

type DataDisplayProps = {
    value?: string;
    label: string;
    displayGrid?: boolean;
}

const useStyles = makeStyles((theme) => ({
    secondaryField: {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.body2.fontSize
    }
}));


const DataDisplay: React.FunctionComponent<DataDisplayProps> = ({label, value, displayGrid}: DataDisplayProps) => {

    const classes = useStyles();

    return (
        displayGrid ? <Grid item xs={12}>
                <Typography className={classes.secondaryField}>
                    {label}
                </Typography>
                <Typography>
                    {value == undefined ? '-' : value}
                </Typography>
            </Grid> :
            <div>
                <Typography className={classes.secondaryField}>
                    {label}
                </Typography>
                <Typography>
                    {value == undefined ? '-' : value}
                </Typography>
            </div>
    );
};

export default DataDisplay;
