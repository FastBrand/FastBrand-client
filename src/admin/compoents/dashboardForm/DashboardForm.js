import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box:{
    padding: theme.spacing(2),
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '30px',
    border: '0.5px solid #000',
    backgroundColor: 'transparent',
    borderRadius: 5,
    width: '1100px',
    height: '400px'
  },
  tooltip: {
    backgroundColor: '#FFFFFF',
    border: '0.5px solid #000000',
    color: '#000000',
    borderRadius: 10,
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
    fontSize: '28px',
    fontWeight: 400,
    color: '#000000',
    textDecoration: 'underline',
    textDecorationColor: '#000000',
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
    const dateString = `${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${currentDate.getDate()}`;
    recentWeek.push(dateString);
  }

  return recentWeek.reverse();
}

function DashboardForm() {
  const classes = useStyles();

  const [visitorCount, setVisitorCount] = useState([]); // 일일 방문자 수
  const recentWeek = getRecentWeek(); // 최근 일주일
  const [chartData, setChartData] = useState([]); // 차트 데이터
  const [loading, setLoading] = useState(true);
  const [markCount, setMarkCount] = useState([]); //상표신청수 데이터


  useEffect(() => {
    axios.all([
      axios.get('http://localhost:8080/api/dashboard'),
      axios.get('http://localhost:8080/api/main/user')
    ]).then(axios.spread((dashboardResponse, infoResponse) => {
      const dashboardData = dashboardResponse.data;
      const infoData = infoResponse.data; //상표신청자데이터

      setVisitorCount(dashboardData);

      const updatedChartData = recentWeek.map((date, index) => {
        return { name: date, visitor: dashboardData[index] };
      });

      setChartData(updatedChartData);
      setMarkCount(infoData);
      console.log(infoData);
      setLoading(false); // 로딩 완료 후 상태 업데이트
    })).catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, []);
  

  const integerFormatter = (value) => Math.floor(value);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  useEffect(() => {
    if (chartData.length > 0) {
      const values = chartData.map((data) => data.visitor);
      const newMinValue = Math.min(...values);
      const newMaxValue = Math.max(...values);
      setMinValue(newMinValue);
      setMaxValue(newMaxValue);
    }
  }, [chartData]);

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
      <Typography className={classes.text01}>
        주간 방문자
        </Typography>   
      {loading ? (
        <div style={{ 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
          width: "800px" 
          }}>
          <CircularProgress color="inherit" size={80} />
        </div>
      ) : (
        <AreaChart width={1000} height={300} data={chartData}>
          <XAxis stroke='#000000' dataKey="name" />
          <YAxis stroke='#000000'
          tickFormatter={integerFormatter}
          domain={[minValue, maxValue]}
          ticks={[minValue, maxValue / 10, maxValue]} />
          <CartesianGrid stroke="#000000" strokeDasharray="1 1" />
          <Area dataKey="visitor" fill="#0972b3" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </AreaChart>
      )}
      </Box>
      <Box className={classes.box}>
      <Typography className={classes.text01}>
        상표신청 현황
        </Typography>   
      {loading ? (
        <div style={{ 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
          width: "800px" 
          }}>
          <CircularProgress color="inherit" size={80} />
        </div>
      ) : (
        <BarChart width={1000} height={300} data={chartData}>
          <XAxis stroke='#000000' dataKey="name" />
          <YAxis stroke='#000000'
          tickFormatter={integerFormatter}
          domain={[minValue, maxValue]}
          ticks={[minValue, maxValue / 10, maxValue]} />
          <CartesianGrid stroke="#000000" strokeDasharray="1 1" />
          <Bar dataKey="visitor" fill="#0972b3" />
          <Tooltip content={<CustomTooltip/>} />
          <Legend />
        </BarChart>
      )}
      </Box>
    </div>
  );
}

export default DashboardForm;
