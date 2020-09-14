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
    }
}));