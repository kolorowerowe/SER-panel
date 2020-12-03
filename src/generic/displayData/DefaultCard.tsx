import React from 'react';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from "@material-ui/core/IconButton";
import {useNavigate} from "react-router-dom";
import ActionMenu, {ActionItem} from "./ActionMenu";
import {Divider, Grid} from "@material-ui/core";
import ErrorAlert from "../ErrorAlert";
import ProgressBar from "../ProgressBar";


type DefaultCardProps = {
    title?: string;
    children: object;
    buttonComponent?: object;
    backButton?: boolean;
    divider?: boolean;
    loading?: boolean;
    disabled?: boolean;
    error?: object;
    errorResponse?: object;
    actionMenu?: ActionItem[];
}

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2)
    },
    disabledCard: {
        padding: theme.spacing(2),
        background: 'none'
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
    },
    titleDisabled: {
        color: theme.palette.text.secondary,
    }
}));


const DefaultCard: React.FunctionComponent<DefaultCardProps> = (props: DefaultCardProps) => {

    const {
        title,
        buttonComponent,
        children,
        backButton,
        divider = false,
        loading = false,
        disabled = false,
        error,
        errorResponse,
        actionMenu = []
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Card className={disabled ? classes.disabledCard : classes.card}>
            <div className={classes.header}>
                <div className={classes.leftHeader}>
                    {!!backButton && <IconButton onClick={() => navigate(-1)}>
                        <ArrowBackIcon/>
                    </IconButton>}
                    {!!title && <Typography className={disabled ? classes.titleDisabled : classes.title}>
                        {title}
                    </Typography>}
                </div>

                {!!buttonComponent && buttonComponent}
                {!!actionMenu.length && <ActionMenu actions={actionMenu}/>}
            </div>

            <Grid container spacing={2}>

                {divider && <Grid item xs={12}>
                    <Divider/>
                </Grid>}

                <ErrorAlert error={error}
                            errorResponse={errorResponse}
                            displayGrid
                />

                <ProgressBar loading={loading} displayGrid/>

                <Grid item xs={12}>
                    {children}
                </Grid>
            </Grid>
        </Card>

    );
};

export default DefaultCard;
