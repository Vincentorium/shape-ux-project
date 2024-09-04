import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/joy/Button';
import LearningMenue from './LearningMenue'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { setLanSetting, setPageSeleted } from '../redux/store';
import { pageData } from '../commonData/pageData'
import IconButton from '@mui/material/IconButton';

function Header() {
  const dispatch = useDispatch()
  const lanSettingDefault = useSelector((state) => state.comStatusSlice.lanSetting);
  const [lanSettingLC, setLanSettingLC] = useState(lanSettingDefault);

  const pageSeletedDefault = useSelector((state) => state.comStatusSlice.pageSeleted);
  const [pageSeletedLC, setPageSeletedLC] = useState(pageSeletedDefault);

  useEffect(() => {
    console.log(`#Header-useEffect-lanSettingLC is ${lanSettingLC}`)
    console.log(`#Header-useEffect-pageSeletedLC is ${pageSeletedLC === 'application'}`)
  }, [lanSettingLC])


  const setLanSettingFunc = (lanSeleted) => {
    console.log(`#COM-Header: setLanSetting ${lanSeleted}`)
    dispatch(setLanSetting(lanSeleted))
    setLanSettingLC(lanSeleted)
  }
  const setLanCHNSetting = () => {
    setLanSettingFunc("CHN")
  }
  const setLanENGSetting = () => {
    setLanSettingFunc("ENG")
  }

  const setNavFunc = (pageSeleted) => {
    console.log(`#COM-Header: setNavFunc ${pageSeleted}`)
    dispatch(setPageSeleted(pageSeleted))
    setPageSeletedLC(pageSeleted)

    console.log(`#application is ${pageSeleted}`)
    navigate(`/${pageSeleted}`);
  }

  const handleNavFB = () => {
    window.location.href = "https://www.facebook.com/yorkkindergartenofficial/";
  }
  const handleNavIG = () => {
    window.location.href = "https://www.instagram.com/york_kindergarten/";
  }

  const navigate = useNavigate();
  const handleHomeNav = () => {
    setNavFunc('home')
  };
  const handleAdmissionNav = () => {
    setNavFunc('admission')
  };
  const handleApplicationNav = () => {
    setNavFunc('application')
  }

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
              flexGrow: 94,
              display: { xs: 'none', sm: 'block' },
              marginTop: 4
            }}
          >
            <Button variant="text"
              sx={{
                color: lanSettingLC === 'ENG' ? '#820632' : '#fff',
                paddingRight: 0,
                minWidth: '0',
                fontSize: '1.1rem',
                fontWeight: 900,
                '&:hover': {
                  color: '#888888'
                }
              }}
              onClick={setLanENGSetting}
            >ENG
            </Button>
            /
            <Button variant="text"
              sx={{
                color: lanSettingLC === 'CHN' ? '#820632' : '#fff',
                paddingLeft: 0,
                minWidth: '0',
                fontSize: '1.1rem',
                fontWeight: 900,
                '&:hover': {
                  color: '#888888'
                }
              }}
              onClick={setLanCHNSetting}
            >中</Button>
            <img src='/asset/languageIcon.png'
              alt=""
              style={{ width: '0.85rem' }}
            />
          </Box>
          <Box sx={{ 
            flexGrow: 4, 
            display: { xs: 'none', sm: 'block' },
             backgroundColor: '#041138',
             
             }}>

            <Button
              variant="text"
              key='Welcome' sx={{

                color: pageSeletedLC === 'home' ? '#820632' : '#fff',
                fontSize: 20, fontWeight: 600,
                textTransform: 'capitalize',
                marginRight: 1,
                '&:hover': {
                  color: '#888888'
                },

              }}
              onClick={handleHomeNav}
            >
              {pageData[lanSettingLC][0]}
            </Button>
            <LearningMenue lanSettingLC={lanSettingLC} />

            <Button
              variant="text"
              key='Admission' sx={{
                color: pageSeletedLC === 'admission' ? '#820632' : '#fff',
                fontSize: 20, fontWeight: 600,
                textTransform: 'capitalize',
                marginRight: 1,
                '&:hover': {
                  color: '#888888'
                },

              }}
              onClick={handleAdmissionNav}
            >
              {pageData[lanSettingLC][2]}

            </Button>
            <Button
              variant="text"
              key='Addresses'
              sx={{

                color: pageSeletedLC === 'application' ? '#820632' : '#fff',
                fontSize: 20, fontWeight: 600,
                textTransform: 'capitalize',
                marginRight: 1,
                '&:hover': {
                  color: '#888888'
                },
              }
              }
              onClick={handleApplicationNav}
            >
              {pageData[lanSettingLC][3]}
            </Button>
          </Box>
          <Box sx={{

            display: 'flex',
          }}>
            <IconButton aria-label="delete">

            </IconButton>
            <Box>
              <img src={`/asset/fbIcon.svg`}
                style={{ width: '30px',paddingTop:3,cursor:'pointer' }}
                onClick={handleNavFB}
              />

            </Box>

            <Box>
              <img src={`/asset/igIcon.svg`}
                style={{ width: '46px',cursor:'pointer' }}
                onClick={handleNavIG}

              />
            </Box>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}



export default Header;