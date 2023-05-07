import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box } from '@material-ui/core';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box:{
    padding: theme.spacing(2),
    marginLeft: '20px',
    marginRight: '20px',
    border: '0.5px solid #000',
  },
  tooltip: {
    backgroundColor: '#3E3E3F',
    borderColor: '#CBA585',
    color: '#CBA585',
    padding: '3px',
    fontSize: '13px'
  },
  paper: {
    padding: theme.spacing(3),
    width: 850,
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    marginLeft: '20px',
    textAlign: 'left',
    color: '#FFFFFF',
    backgroundColor: '#3E3E3F',
  },
  text01: {
    marginTop: '10px',
    marginLeft: '20px',
    marginBottom: '30px',
    fontSize: '30px',
    fontWeight: 400,
    textDecoration: 'underline',
    textDecorationColor: '#CBA585',
    textUnderlineOffset: '5px',
  },

}));

function CustomTooltip({ active, payload, label }) {
  const classes = useStyles();

  if (active && payload && payload.length) {
    return (
      <div className={classes.tooltip}>
        <p>{`날짜: ${label}`}</p>
        <p>{`방문자: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
}


function getRecentWeek() {
  const today = new Date();
  const recentWeek = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
    const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    recentWeek.push(dateString);
  }

  return recentWeek.reverse();
}

function DashboardForm() {
  const classes = useStyles();

  const [visitorCount, setVisitorCount] = useState([]); // 일일 방문자 수
  const recentWeek = getRecentWeek(); // 최근 일주일
  const [chartData, setChartData] = useState([]); // 차트 데이터

  useEffect(() => {
    axios.get('http://localhost:8080/api/dashboard').then((response) => {
      const myData = response.data;
      setVisitorCount(myData);

      const updatedChartData = recentWeek.map((date, index) => {
        return { name: date, visitor: myData[index] };
      });

      setChartData(updatedChartData);
    });
  }, []);

  const integerFormatter = (value) => Math.floor(value);

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
      <Typography className={classes.text01}>최근 일주일간 방문자 통계</Typography>
      <Paper className={classes.paper}>     
        <BarChart width={750} height={500} data={chartData}>
          <XAxis stroke='#FFFFFF' dataKey="name" />
          <YAxis stroke='#FFFFFF' tickFormatter={integerFormatter} />
          <CartesianGrid stroke="#FFFFFF" strokeDasharray="1 1" />
          <Bar dataKey="visitor" fill="#CBA585" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </BarChart>
      </Paper>
      </Box>
    </div>
  );
}

export default DashboardForm;
