import React from 'react';
import {Button, Typography} from "@material-ui/core";
import packageJson from '../../../package.json'
import DefaultCard from "../../generic/displayData/DefaultCard";

const DeveloperComponent: React.FC = () => {

    const logEnv = () => {
        console.log(process.env);
    }

    return (
        <DefaultCard>
            <Typography variant={'h6'} style={{marginBottom: 20}}>
                Version: {packageJson.version}
            </Typography>


            <Button onClick={logEnv} variant={'outlined'}>
                PRINT ENV
            </Button>

        </DefaultCard>

    );
};


export default DeveloperComponent;