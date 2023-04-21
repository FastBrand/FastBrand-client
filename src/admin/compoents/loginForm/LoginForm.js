import { TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginForm(){

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate(); // useNavigate hook 사용

const handleLogin = () => {
  axios.post('http://localhost:8080/login', {
    username: username,
    password: password
  })
  .then((response) => {
    const token = response.data.accessToken; // JWT 토큰 추출
    console.log({ username });
    console.log(response);
    // 토큰 저장
    localStorage.setItem('token', token);
    navigate('/dashboard'); // 로그인 성공 시 다른 URL로 이동
  })
  .catch((error) => {
    console.error(error);
  });
};


return(
    <div style={
        {display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
    <Box sx={{marginTop:"250px"}}>
        <div>
            <TextField
            style={{ width: '300px' }}
            label="아이디"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
        />
        </div>
        <div style={{marginTop:'20px'}}>
            <TextField
                style={{ width: '300px' }} 
                label="비밀번호"
                variant="outlined"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
        </div>
        <div style={{marginTop:'25px'}}>
            <Button
                style={{width:'300px', backgroundColor:'#3E3E3F', color:'white'}}
                variant="contained"
                onClick={handleLogin}               
                >로그인    
            </Button>
        </div>
    </Box>
    </div>
    )
};
export default LoginForm;

