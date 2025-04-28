import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { parseUser } from '../parsers/parseUser';
import { login } from '../services/login';
import loginImage from '../assets/logo.svg';

/**
 * TODO
 *
 * Login page UI:
 *
 * 1. Add inputs for username and password
 *    - keep username and password in component state (use useState() hook)
 * 2. Add button which will login user
 *    - button will be disabled if either username or password is empty
 * 3. Add whatever you like to make it look pretty :)
 *
 * Login page functionality:
 *    - call mock login function (src/services/login.ts) that will return user data if correct credentials are provided (see function for credentials)
 *    - parse this data with parseUser parser (src/parsers/parseUser.ts)
 *    - store this data somehow so they are accessible anywhere in the app
 *    - navigate to Home component (use useNavigate() hook)
 */

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      setError('');
      try {
        const userData = await login(username, password);
        const user = parseUser(userData);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/home');
      } catch (err) {
        console.error(err);
        setError('Invalid username or password.');
      }
    };

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
      <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          mt={8}
          gap={4}
      >
        <Box>
          <img
              src={loginImage}
              alt="Login"
              style={{ width: '400px', height: 'auto', borderRadius: '8px' }}
          />
        </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={8} style={{ border: '1px solid #ccc', borderRadius: '15px', width: '33%', padding: '10px' }}>
        <Typography variant="h4" mb={4} style={{ marginTop: '20px'}}>
          Login
        </Typography>
        <form onSubmit={handleLogin} style={{ padding: "10px", marginBottom: '20px' }}>
          <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          />
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
            />
          </FormControl>
          <a href="#">Forgot Password?</a>

          {error && (
              <Typography color="error" mt={1}>
                {error}
              </Typography>
          )}
          <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={!username || !password}
              sx={{
                mt: 2,
                backgroundColor: '#26B7C4',
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: '#1aa7b2',
                },
                height: '50px'
              }}
          >
            Login
          </Button>
        </form>
      </Box>
      </Box>
  );
};

