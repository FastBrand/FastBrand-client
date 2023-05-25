import { TextField, Button } from '@material-ui/core';
import { Box, Snackbar, Backdrop } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [loginFailed, setLoginFailed] = useState(false);
const navigate = useNavigate(); // useNavigate hook 사용

// useEffect(() => {
//   // 이미 로그인된 상태라면 '/dashboard'로 이동
//   if (localStorage.getItem('Authorization')!==null) {
//     navigate('/dashboard');
//   }
// }, [navigate]);

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    handleLogin();
  }
};

const handleLogin = () => {
  axios.post('http://localhost:8080/login', {
    username: username,
    password: password,
  })
  .then((response) => {
    const jwtToken = response.headers['Authorization'];
    localStorage.setItem('Authorization', jwtToken); // JWT 토큰 추출
    console.log("로그인성공:",response.headers);
    navigate('/dashboard'); // 로그인 성공 시 다른 URL로 이동
  })
  .catch((error) => {
    console.error(error);
    setLoginFailed(true); // 로그인 실패 상태를 true로 변경
  });
};

const handleCloseSnackbar = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setLoginFailed(false);
};

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >

      <Box sx={{ marginTop: "200px" }}>
      <Box sx={{
        textAlign: "center",
        marginBottom: '32px',
        fontFamily: 'Pretendard',
        fontWeight: 500,
        fontSize: "28px",
        color: '#181c06'
      }}>
        관리자 로그인
      </Box>
        <div>
          <TextField
            style={{ width: "300px" }}
            label="아이디"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <TextField
            style={{ width: "300px" }}
            label="비밀번호"
            variant="outlined"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div style={{ marginTop: "25px" }}>
          <Button
            style={{
              width: "300px",
              backgroundColor: "#3E3E3F",
              color: "white",
            }}
            variant="contained"
            onClick={handleLogin}
          >
            로그인
          </Button>
        </div>
      </Box>
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      open={loginFailed}
      onClick={handleCloseSnackbar}
    >
      <Snackbar
        open={loginFailed}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="로그인 실패, 아이디와 비밀번호를 확인해주세요."
        action={
          <Button
          color="secondary"
          size="small"
          onClick={handleCloseSnackbar}>
            닫기
          </Button>
        }
        sx={{
          position: "fixed",
          top: "70%",
          left: "50%",
          height: "300px", // 너비를 3배 늘림
          justifyContent: "center", // 내용을 가운데 정렬
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      />
      
    </Backdrop>
      
    
    </div>
  );
}
export default LoginForm;
