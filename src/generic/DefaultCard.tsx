import React from 'react';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from "@material-ui/core/IconButton";
import {useHistory} from "react-router-dom";

type DefaultCardProps = {
    title: string;
    children: object;
    buttonComponent?: object;
    backButton?: object;
}

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2)
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(2)
    },
    leftHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: theme.palette.text.primary,
    }
}));


const DefaultCard: React.FunctionComponent<DefaultCardProps> = (props: DefaultCardProps) => {

    const {
        title,
        buttonComponent,
        children,
        backButton
    } = props;

    const classes = useStyles();
    const history = useHistory();

    return (
        <Card className={classes.card}>
            <div className={classes.header}>
                <div className={classes.leftHeader}>
                    {!!backButton && <IconButton onClick={() => history.go(-1)}>
                        <ArrowBackIcon/>
                    </IconButton>}
                    {!!title && <Typography className={classes.title}>
                        {title}
                    </Typography>}
                </div>

                {!!buttonComponent && buttonComponent}
            </div>

            {children}
        </Card>

    );
};

export default DefaultCard;
