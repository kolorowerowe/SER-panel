import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {useCommonStyles} from "../../styles/commonStyles";

type LabeledDataProps = {
    value?: string;
    label: string;
    displayGrid?: boolean;
}

const LabeledData: React.FunctionComponent<LabeledDataProps> = ({label, value, displayGrid}: LabeledDataProps) => {

    const classes = useCommonStyles();

    return (
        displayGrid ? <Grid item xs={12}>
                <Typography className={classes.secondaryField}>
                    {label}
                </Typography>
                <Typography>
                    {value === undefined ? '-' : value}
                </Typography>
            </Grid> :
            <div>
                <Typography className={classes.secondaryField}>
                    {label}
                </Typography>
                <Typography>
                    {value === undefined ? '-' : value}
                </Typography>
            </div>
    );
};

export default LabeledData;
