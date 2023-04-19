import { TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginForm(){

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const history = useNavigate();

const [jwt] = useState('');




const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        username: username,
        password: password,
      });
      if (response.status === 200) {
        // 로그인 성공 후 페이지 이동
        
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

