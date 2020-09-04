import {createMuiTheme, Theme} from '@material-ui/core/styles';
import orange from "@material-ui/core/colors/orange";

const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: orange[600],
        }
    }
});


const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: orange[600],
        }
    }
});

export const getTheme = (theme: string): Theme => {
    return theme === 'light' ? lightTheme : darkTheme;
}