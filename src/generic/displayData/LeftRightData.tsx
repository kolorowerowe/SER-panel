import React from 'react';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

type LeftRightDataProps = {
    left: string;
    right: string;
}

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-between"
    },
    leftField: {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.body2.fontSize
    },
    rightField: {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.body2.fontSize
    }
}));


const LeftRightData: React.FunctionComponent<LeftRightDataProps> = ({left, right}: LeftRightDataProps) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.leftField}>
                {left}
            </Typography>
            <Typography className={classes.rightField}>
                {right}
            </Typography>
        </div>

    );
};

export default LeftRightData;
