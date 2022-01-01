import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { signInEmail, signInWithGoogle, signUpEmail } from '../../redux/actions/auth/auth.action';
import { selectCurrentUser } from '../../redux/selectors/AuthSelector';

const useStyles = makeStyles(() => ({
  signInLink: {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: '#3c31fc',
    fontSize: '15px',
  },
}));

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const SignIn = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector(state=>state.auth.currentUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInWithGoogle = () => {
    dispatch(signInWithGoogle());
  };

  const handleSignInEmail = (event) => {
    event.preventDefault();
    dispatch(signInEmail(email, password));
  };

  useEffect(() => {
    if (currentUser?.uid) {
      navigate('/');
    } else {
      navigate('/sign-in');
    }

  }, [dispatch, navigate, currentUser, currentUser?.uid]);

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSignInEmail}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item fullWidth>
                <span
                  className={classes.signInLink}
                  onClick={() => navigate('/sign-up')}
                >
                  {"Don't have an account? Sign Up"}
                </span>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Button
              type='button'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSignInWithGoogle}
            >
              Sign In With Google
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};
export default SignIn;
