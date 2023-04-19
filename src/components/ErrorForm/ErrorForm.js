import { Box, Button, Container, SvgIcon, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function EfforForm(){
  return(
    <div>
        <div>
      <title>
        404 | Not found
      </title>
      </div>
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%'
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            sx={{
              mb: 3,
              textAlign: 'center'
            }}
          >
          </Box>
          <Typography
            align="center"
            sx={{ mb: 3 }}
            variant="h3"
          >
            404: The page you are looking for isn’t here
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
            variant="body1"
          >
            네트워크 오류 또는 횸페이지 오류입니다. 죄송합니다.
          </Typography>
          <Button
            component={NavLink}
            href="/"
            sx={{ mt: 3 }}
            variant="contained"
          >
            메인으로 돌아가기
          </Button>
        </Box>
      </Container>
    </Box>
    </div>
  );
};
export default EfforForm;
