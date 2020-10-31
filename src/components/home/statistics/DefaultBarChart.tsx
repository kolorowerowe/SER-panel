import React, {useMemo} from 'react';
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis,} from 'recharts';
import {Paper, Typography, useTheme} from "@material-ui/core";
import {DefaultBarChartProps} from "../../../declarations/types";
import {formatAsPercentage} from "../../../utils/NumberUtils";


const DefaultBarChart: React.FC<DefaultBarChartProps> = ({data}: DefaultBarChartProps) => {

    const theme = useTheme();

    const allCount = useMemo(() => data.reduce(
        (acc, currentValue) =>
            acc + currentValue.value,
        0), [data])

    const CustomTooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
        const {active, payload} = props;
        if (active && payload && payload.length) {
            const {value = 0, name = ''} = payload[0].payload || {};

            return (
                <Paper style={{padding: 10}}>
                    <Typography>{name}: {value}</Typography>
                    <Typography>{formatAsPercentage(value / allCount)}</Typography>
                </Paper>
            );
        }
        return null;
    };


    return (
        <ResponsiveContainer width="95%" height={400}>
            <BarChart data={data}>
                <CartesianGrid/>
                <XAxis dataKey="name" allowDecimals={false}/>
                <YAxis/>
                <Bar dataKey="value" fill={theme.palette.primary.main}/>
                <Tooltip content={<CustomTooltip/>}/>
            </BarChart>
        </ResponsiveContainer>
    );
};

DefaultBarChart.propTypes = {};

export default DefaultBarChart;