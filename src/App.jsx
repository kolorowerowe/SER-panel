import React from 'react';
import './App.css';
import {MuiThemeProvider,} from '@material-ui/core/styles';
import SERContainer from "./root/SERContainer";
import {getTheme} from "./styles/theme";
import {useSelector} from "react-redux";

const App = () => {

    const {theme} = useSelector(state => state.preferences);


    return (
        <MuiThemeProvider theme={getTheme(theme)}>
            <SERContainer/>
        </MuiThemeProvider>
    );
}

export default App;
