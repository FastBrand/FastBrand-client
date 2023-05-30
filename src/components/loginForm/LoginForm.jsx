import { 
  Box, 
  Snackbar, 
  Backdrop,
  TextField, 
  Button,
 } from '@mui/material';
import axios from 'axios';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

function LoginForm() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [loginFailed, setLoginFailed] = useState(false);
const navigate = useNavigate();


const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    handleLogin();
  }
};

const handleLogin = () => {
  axios.post('http://43.202.29.2:8080/login', {
    username: username,
    password: password,
  })
  .then((response) => {
    const jwtToken = response.headers['authorization'];
    localStorage.clear();
    localStorage.setItem('Authorization', jwtToken); // JWT 토큰 추출
    console.log("로그인성공");
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

  if (localStorage.getItem('Authorization')!== null) {
    navigate('/dashboard');
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Navbar/>
      <Box sx={{ marginTop: "250px" }}>
      <Box sx={{
        textAlign: "center",
        marginBottom: '32px',
        fontFamily: 'Pretendard',
        fontWeight: 600,
        fontSize: "32px",
        color: '#7f7778'
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
        onClose={handleCloseSnackbar}
        message={
        <div>
          로그인 실패
          <br />
          아이디와 비밀번호를 확인해주세요.
        </div>
        }
        action={
          <Button
          color="error"
          size="medium"
          onClick={handleCloseSnackbar}
          sx={{ marginTop: "8px" }}
          >
            닫기
          </Button>
        }
        sx={{
          position: "fixed",
          top: "50%", 
          left: "50%",
          transform: "translate(-50%, -50%)", 
          width: "300px", 
          height: "500px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          flexDirection: "column", // 메시지와 액션을 세로로 배치
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