import React, { useState, useEffect} from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Box, Typography, CircularProgress } from "@material-ui/core";
import { Navigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box: {
    padding: theme.spacing(2),
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "30px",
    // border: "0.5px solid #000",
    backgroundColor: "white",
    borderRadius: 5,
    width: "1100px",
    height: "400px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.3)", 
  },
  tooltip: {
    backgroundColor: "#FFFFFF",
    border: "0.5px solid #000000",
    color: "#000000",
    borderRadius: 10,
    padding: "3px",
    fontSize: "13px",
  },
  paper: {
    padding: theme.spacing(3),
    width: 850,
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    marginLeft: "20px",
    textAlign: "left",
    color: "#FFFFFF",
    backgroundColor: "#3E3E3F",
  },
  text01: {
    borderBottom: "3px soild #3E3E3F",
    marginTop: "10px",
    marginLeft: "20px",
    marginBottom: "30px",
    fontSize: "28px",
    fontWeight: 700,
    color: "#000000",
    textDecorationColor: "#000000",
    textUnderlineOffset: "5px",
    textDecorationThickness: "1px",
  },
}));

function DashboardForm() {
  const classes = useStyles();
  const recentWeek = getRecentWeek(); // 최근 일주일
  const [chartData, setChartData] = useState([]); // 차트 데이터
  const [chartData02, setChartData02] = useState([]);
  const [loading, setLoading] = useState(true);

  function getRecentWeek() {
    const today = new Date();
    const recentWeek = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - i
      );
      const dateString = `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`;
      recentWeek.push(dateString);
    }

    return recentWeek.reverse();
  }

  function CustomTooltip({ active, payload, label }) {
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

  function CustomTooltip2({ active, payload, label }) {
    if (active && payload && payload.length) {
      return (
        <div className={classes.tooltip}>
          <p>{`날짜: ${label}`}</p>
          <p>{`신청수: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  }

  useEffect(() => {
    let dateCounts = {};

    axios.get("http://localhost:8080/api/main/user").then((infoResponse) => {
      // 이후에 필요한 작업들...
      const infoData = infoResponse.data; //상표신청자데이터

      infoData.forEach((user) => {
        const date = user.created_at.substring(0, 10); // 날짜 형식 추출 (YYYY-MM-DD)
        if (dateCounts[date]) {
          dateCounts[date]++;
        } else {
          dateCounts[date] = 1;
        }
      });

      const chartData = Object.keys(dateCounts).map((date) => ({
        name: date,
        count: dateCounts[date] || 0,
      }));

      setChartData02(chartData);
    });

    const auth = axios.create({
      baseURL: "http://localhost:8080/api/admin/",
    });

    auth.interceptors.request.use(
      (config) => {
        // 요청을 보내기 전에 수행할 작업
        const token = localStorage.getItem("Authorization");
        if (token) {
          config.headers["Authorization"] = token;
        }
        return config;
      },
      (error) => {
        // 요청이 실패한 경우에 대한 처리
        return Promise.reject(error);
      }
    );

    auth
      .get("/dashboard")
      .then((dashboardResponse) => {
        // 이후에 필요한 작업들...
        const dashboardData = dashboardResponse.data;
        const updatedChartData = recentWeek.map((date) => ({
          name: date,
          visitor: dashboardData[recentWeek.indexOf(date)] || 0,
          count: dateCounts[date] || 0,
        }));

        //setVisitorCount(dashboardData);
        setChartData(updatedChartData);
        setLoading(false); // 로딩 완료 후 상태 업데이트
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);

      });
  }, []);

  const integerFormatter = (value) => Math.floor(value);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);

  useEffect(() => {
    if (chartData.length > 0) {
      const values = chartData.map((data) => data.visitor);
      const newMinValue = Math.min(...values);
      const newMaxValue = Math.max(...values);
      setMinValue(newMinValue);
      setMaxValue(newMaxValue);
    }
  }, [chartData]);

  if (!localStorage.getItem("Authorization")) {
    return <Navigate to='/login' replace />;
  }

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <Typography className={classes.text01}>주간 방문자</Typography>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
              width: "1000px",
            }}
          >
            <CircularProgress color='inherit' size={80} />
          </div>
        ) : (
          <AreaChart width={1000} height={300} data={chartData}>
            <XAxis stroke='#000000' dataKey='name' />
            <YAxis
              stroke='#000000'
              tickFormatter={integerFormatter}
              domain={[minValue, maxValue]}
              ticks={[
                minValue,
                maxValue / 4,
                maxValue / 2,
                (maxValue * 3) / 4,
                maxValue,
              ]}
            />
            <CartesianGrid stroke='#90827b' strokeDasharray='2 2' />
            <Area
              dataKey='visitor'
              fill='#76777c'
              fillOpacity={0.8}
              stroke='#76777c'
            />
            <Tooltip content={<CustomTooltip />} />

            <Legend />
          </AreaChart>
        )}
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.text01}>상표신청 현황</Typography>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
              width: "1000px",
            }}
          >
            <CircularProgress color='inherit' size={80} />
          </div>
        ) : (
          <AreaChart width={1000} height={300} data={chartData02}>
            <XAxis
              stroke='#000000'
              dataKey='name'
              tickCount={recentWeek.length}
            />
            <YAxis stroke='#000000' tickFormatter={integerFormatter} />
            <CartesianGrid stroke='#000000' strokeDasharray='2 2' />
            <Area
              dataKey='count'
              fillOpacity={0.8}
              fill='#90827b'
              stroke='#90827b'
            />
            <Tooltip content={<CustomTooltip2 />} />
            <Legend />
          </AreaChart>
        )}
      </Box>
    </div>
  );
}

export default DashboardForm;
