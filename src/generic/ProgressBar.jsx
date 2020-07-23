import React from 'react';
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";

const ProgressBar = props => {

    const {
        loading,
        displayGrid,
        ...other
    } = props;

    return (
        displayGrid ?
            loading && <Grid item xs={12}>
                <LinearProgress {...other}/>
            </Grid> :
            loading && <LinearProgress {...other}/>
    );
};

ProgressBar.propTypes = {
    loading: PropTypes.bool.isRequired,
    displayGrid: PropTypes.bool
};

export default ProgressBar;
