import React from 'react';
import {Pie, PieChart, PieChartProps, PieLabelRenderProps, ResponsiveContainer, Tooltip,} from 'recharts';
import {useTheme} from "@material-ui/core";


const DefaultPieChart: React.FC<PieChartProps> = ({data}: PieChartProps) => {

    const theme = useTheme();



    return (
        <ResponsiveContainer width="80%" height={400}>
            <PieChart>
                <Pie dataKey="value"
                     data={data}
                     fill={theme.palette.primary.main}
                     startAngle={90}
                     endAngle={-270}
                     innerRadius="60%"
                     outerRadius="80%"
                     label
                     isAnimationActive={false}/>
                <Tooltip/>
            </PieChart>
        </ResponsiveContainer>
    );
};

DefaultPieChart.propTypes = {};

export default DefaultPieChart;