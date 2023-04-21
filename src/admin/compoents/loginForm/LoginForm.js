import { TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginForm(){

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const history = useNavigate();

function handleToken(token) { //토큰을 로컬에 저장하는 함수
  localStorage.setItem('token', token);
}

// 로그인 버튼을 눌렀을 때 호출되는 함수
async function handleLogin() {
  try {
    const response = await axios.post('/api/login', { 
      username: username,
      password: password,
     });

    const { token } = response.data;
    handleToken(token);

    if (response.ok) {
      const { token } = await response.json();
      handleLogin(token);
      history.push('/dashboard');
    }

  } catch (error) {
    console.error(error);
  }
}


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

