import {createMuiTheme} from '@material-ui/core/styles';
import orange from "@material-ui/core/colors/orange";


export const getTheme = (theme) => {
    return theme === 'light' ? lightTheme : darkTheme;
}

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
