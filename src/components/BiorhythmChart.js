import React from "react";
import {
    LineChart,
    ResponsiveContainer,
    Line,
    XAxis,
    ReferenceLine,
    CartesianGrid,
} from 'recharts';

import { calculateBiorhythmSeries } from "../calculations";
import dayjs from "dayjs";
import './BiorhythmChart.css'


//Temporary data for testing
/* const data = [ 
    {date: '2020-02-01', physical: 0.99, emotional: 0.5, intellectual: -0.25} ,
    {date: '2020-02-02', physical: 0.37, emotional: -0.5, intellectual: -0.85},
    {date: '2020-02-03', physical: -0.10, emotional: -0.90, intellectual: 0.48},

];
*/
function formatDate(isoString){
    return dayjs(isoString).format("D MMM");
}

function BiorhythmChart({birthDate, targetDate}) {
    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
    const data = calculateBiorhythmSeries(birthDate, startDate, 31)
    .map((item) => ({...item, date: formatDate(item.date)}));
    return (
    <ResponsiveContainer className="biorhythm-chart" width="100%" height={200}>
        <LineChart data={data}>
        <XAxis datakey="date" />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <ReferenceLine x={data[15].date} stroke="red" label="Today" />
            <Line type={"natural"} dot={false} dataKey="physical" className="physical" />
            <Line type={"natural"} dot={false} dataKey="emotional" className="emotional" />
            <Line type={"natural"} dot={false} dataKey="intellectual" className="intellectual" />
        </LineChart>
    </ResponsiveContainer>
    );
}

export default BiorhythmChart;