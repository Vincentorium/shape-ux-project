import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LearningMenue from './LearningMenue'
import { useNavigate } from 'react-router-dom';


function Header() {


  const navigate = useNavigate();
  const handleNav = () => {
    navigate('/home');
  };
  return (
    <Box sx={{ display: 'flex' }}>

      <CssBaseline />
      <AppBar component="nav" className="appbarThing">
        <Toolbar sx={{
          borderTop: 15,
          borderBottom: 15,
          borderColor: 'rgb(130, 0, 36)',
          backgroundColor: '#041138',
          height: 90,
        }}>
          <Box
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, height: '100%' }}
          >
            <img
              src='/asset/yorkBadge.png'
              alt=""
              style={{ height: '100%' }}
            />
          </Box>


          <Box
            component="div"
            sx={{
              flexGrow: 4,
              display: { xs: 'none', sm: 'block' },
              marginTop: 4
            }}
          >   <Button variant="text"
            sx={{
              color: '#fff',
              paddingRight: 0,
              minWidth: '0',
              fontSize: '1.1rem',
              fontWeight: 900,
              '&:hover': {
                color: '#820632'
              }
            }}
          >ENG</Button>
            /
            <Button variant="text"
              sx={{
                color: '#fff',
                paddingLeft: 0,
                minWidth: '0',
                fontSize: '1.1rem',
                fontWeight: 900,
                '&:hover': {
                  color: '#820632'
                }
              }}
            >中</Button>
            <img src='/asset/languageIcon.png'
              alt=""
              style={{ width: '0.85rem' }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, backgroundColor: '#041138' }}>

            <Button key='Welcome' sx={{
              color: '#fff', fontSize: 20, fontWeight: 600,
              textTransform: 'capitalize',
              marginRight: 1,
              '&:hover': {
                color: '#820632'
              },

            }}
              onClick={handleNav}
            >
              Welcome
            </Button>
            <LearningMenue />

            <Button key='Admission' sx={{
              color: '#fff', fontSize: 20, fontWeight: 600,
              textTransform: 'capitalize',
              marginRight: 1,
              '&:hover': {
                color: '#820632'
              },
            }}>
              Admission
            </Button>
            <Button key='Addresses' sx={{
              color: '#fff', fontSize: 20, fontWeight: 600,
              textTransform: 'capitalize',
              marginRight: 1,
              '&:hover': {
                color: '#820632'
              },
            }}>
              Addresses
            </Button>
          </Box>


        </Toolbar>
      </AppBar>
    </Box>
  );
}



export default Header;