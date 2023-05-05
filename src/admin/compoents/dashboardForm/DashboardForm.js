import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const data = [
  { name: '1월', uv: 4000, pv: 2400, amt: 2400 },
  { name: '2월', uv: 3000, pv: 1398, amt: 2210 },
  { name: '3월', uv: 2000, pv: 9800, amt: 2290 },
  { name: '4월', uv: 2780, pv: 3908, amt: 2000 },
  { name: '5월', uv: 1890, pv: 4800, amt: 2181 },
  { name: '6월', uv: 2390, pv: 3800, amt: 2500 },
  { name: '7월', uv: 3490, pv: 4300, amt: 2100 },
];

function DashboardForm(){
  const classes = useStyles();
 
  const [visitorCount, setVisitorCount] = useState([]); //일일 방문자 수

  useEffect(() => {
    axios.get('http://localhost:8080/api/week')
      .then(response => {
        const myData = response.data;
        setVisitorCount(myData);
      });
  }, []);

  return (
    <div className={classes.root}>
    <Paper className={classes.paper}>
    <LineChart width={800} height={500} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      <Tooltip />
      <Legend />
    </LineChart>
    {visitorCount}
    </Paper>
    </div>
  );
};
export default DashboardForm;

