import {makeStyles} from "@material-ui/core/styles";

export const useCommonStyles = makeStyles((theme) => ({
    cardActions: {
        justifyContent: 'flex-end',
        marginTop: 20
    },
    description: {
        minHeight: 70
    },
    fullHeight: {
        height: '100%'
    },
    secondaryField: {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.body2.fontSize
    },
    centeredDiv: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    nextToEachOther: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    countUp: {
        fontSize: 40,
        display: 'flex',
        justifyContent: 'center',
    }
}));