import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LearningMenue from './LearningMenue'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { setLanSetting, setPageSeleted } from '../redux/store';
import { pageData } from '../commonData/pageData'


function Header() {
  const dispatch = useDispatch()
  const lanSettingDefault = useSelector((state) => state.comStatusSlice.lanSetting);
  const [lanSettingLC, setLanSettingLC] = useState(lanSettingDefault);

  const pageSeletedDefault = useSelector((state) => state.comStatusSlice.pageSeleted);
  const [pageSeletedLC, setPageSeletedLC] = useState(pageSeletedDefault);

  const lanSettingDisplay = { "ENG": ["Welcome", "Learning", "Admission", "Address"], "CHN": ["歡迎", "學習", "入學", "地址"] }


  useEffect(() => {
    console.log(`#useEffect-lanSettingLC is ${lanSettingLC}`)
    let a = pageData["ENG"]
    console.log("#a is ", a)
    let b = pageData["CHN"]
    console.log("#B is ", b)
    console.log("#B0 is ", b[0])
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


    navigate(`/${pageSeleted}`);
  }



  const navigate = useNavigate();
  const handleHomeNav = () => {
    setNavFunc('home')
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, backgroundColor: '#041138' }}>

            <Button key='Welcome' sx={{

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

            <Button key='Admission' sx={{
              color: '#fff', fontSize: 20, fontWeight: 600,
              textTransform: 'capitalize',
              marginRight: 1,
              '&:hover': {
                color: '#888888'
              },
            }}>
              {pageData[lanSettingLC][2]}

            </Button>
            <Button key='Addresses' sx={{
              color: '#fff', fontSize: 20, fontWeight: 600,
              textTransform: 'capitalize',
              marginRight: 1,
              '&:hover': {
                color: '#888888'
              },
            }}>
              {pageData[lanSettingLC][3]}

            </Button>
          </Box>


        </Toolbar>
      </AppBar>
    </Box>
  );
}



export default Header;