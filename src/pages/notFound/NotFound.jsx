import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Box, Grid } from "@material-ui/core";
import errorImage from "../../assets/images/documentForErrorImage.jpg";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    fontFamily: "Prentendard",
  },
  infoBox01: {
    fontFamily: "Prentendard",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${errorImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    overflow: "hidden",
  },
  linkButton: {
    fontFamily: "Prentendard",
    display: "flex",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "300px",
    fontSize: "18px",
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
    marginLeft: "auto",
    marginRight: "auto",
  },
  sectionTitle: {
    fontFamily: "Pretendard",
    fontWeight: 600,
    fontSize: "42px",
    textAlign: "center",
    marginTop: "180px",
    marginBottom: "10px",
    color: "white",
  },
  sectionTitle02: {
    fontFamily: "Pretendard",
    fontWeight: 400,
    fontSize: "32px",
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "10px",
    color: "white",
  },
}));

function NotFound() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div>
      <Box className={classes.infoBox01} sx={{ height: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography className={classes.sectionTitle} variant="h3">
              404 NOT FOUND PAGE
            </Typography>
            <Typography className={classes.sectionTitle02} variant="h3">
              페이지를 찾을 수 없습니다.
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Button
              className={classes.linkButton}
              variant="contained"
              onClick={() => navigate("/")}
            >
              홈페이지로 돌아가기
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default NotFound;
