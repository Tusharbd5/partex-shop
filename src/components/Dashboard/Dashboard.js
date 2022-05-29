import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('chartData.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <LineChart style={{ marginRight: "50px" }} width={600} height={400} data={data} margin={{
                right: 30
            }}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="month" />
                <YAxis></YAxis>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }}></Line>
                <Line type="monotone" dataKey="sell" stroke="#82ca9d"></Line>
                <Line type="monotone" dataKey="investment" stroke="rgb(255, 0, 191)"></Line>

            </LineChart>
            <BarChart
                width={650}
                height={400}
                data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" />
                <Bar dataKey="sell" fill="#82ca9d" />
                <Bar dataKey="investment" fill="rgb(255, 0, 191)" />
            </BarChart>
        </div>


    );
};

export default Dashboard;