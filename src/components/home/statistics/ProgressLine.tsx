import React from 'react';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';


type Props = {
    currentProgress: number;
    maxProgress: number;
    label: string;
}
const ProgressLine: React.FC<Props> = ({currentProgress, maxProgress, label}: Props) => {


    const percentageProgress = currentProgress / maxProgress * 100;

    return (
        <Box alignItems="center" style={{margin: '20px 0px'}}>

            <div style={{position: 'relative', height: 40}}>
                <Typography variant="body2" align={'center'} style={{padding: 5}}>
                    {label}
                </Typography>
                <Box width="100%" mr={1} style={{position: 'absolute'}}>
                    <Tooltip title={Math.round(percentageProgress) + ' %'} placement={'right'}>
                        <LinearProgress variant="determinate" value={percentageProgress}
                                        style={{height: 30, borderRadius: 5}}/>
                    </Tooltip>
                </Box>
                <Box width="100%" mr={1} style={{position: 'absolute'}}>
                    <Typography variant="body2" align={'center'} style={{padding: 5}}>
                        {currentProgress} / {maxProgress}
                    </Typography>
                </Box>
            </div>

        </Box>
    );
}

export default ProgressLine;