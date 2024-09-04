import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import './LearningMenue.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { setPageSeleted } from '../redux/store';
import { pageData } from '../commonData/pageData'


/*
handle the Learning page which require spearte page 
*/
export default function BasicMenu({lanSettingLC}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const pageSeletedAlr = useSelector((state) => state.comStatusSlice.pageSeleted);
  const [pageSeletedLC, setPageSeletedLC] = useState(pageSeletedAlr);
  const nonLearningPage = ['home', 'admission', 'application']


  const setNavFunc = (pageSeleted) => {
    console.log(`#COM-Header: setNavFunc ${pageSeleted}`)
    dispatch(setPageSeleted(pageSeleted))
    setPageSeletedLC(pageSeleted)
    setIsHovered(false);
    setAnchorEl(null);
    navigate(`/learning/${pageSeleted}`);
  }
  const handleLanguageNav = () => {
    setNavFunc('language')
  };
  const handlArtNav = () => {
    setNavFunc('art')
  };
  const handleNav = () => {

    navigate('/learning/language');
  };

  const handleClose = () => {
    setIsHovered(false);
    setAnchorEl(null);
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverA = () => {

    setIsHovered(true);
  };


  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{
      display: 'inline-block',

      color: '#fff', fontSize: 20, fontWeight: 600,
      textTransform: 'capitalize',
      marginRight: 1,
      '&:hover': {
        color: '#820632'
      },
    }}
      onMouseEnter={handlePopoverOpen}
    >

      <Button
        className="learningTitle"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        endDecorator={<img src={`/asset/downArrow.png`}
          alt=""
          style={{ width: '10px' }}
        />}

        sx={{
          fontSize: 20, fontWeight: 750,
          textTransform: 'capitalize',
          marginRight: 1,
          '&:hover': {
            color: '#888888'
          },
          color: isHovered ? '#888888' : (!nonLearningPage.includes(pageSeletedLC) ? '#820632' : '#fff')

        }}
      >
          {pageData[lanSettingLC][1]} {
          !nonLearningPage.includes(pageSeletedLC) ?
            `(${pageSeletedLC})` : ''
        }
      </Button>
      <Menu
        className='learningMenue'
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          marginRight: 1,
          '&:hover': {
            color: '#820632'
          },
        }}
        MenuListProps={{
          onMouseLeave: handleClose,
          onMouseEnter: handleHoverA,
          style: { pointerEvents: "auto" }
        }}
        disableAutoFocusItem='true'
      >
        <MenuItem
          className='learningEle'

          onClick={handleLanguageNav}>Languages</MenuItem>
        <MenuItem
          className='learningEle'
          onClick={handleNav}>Maths and Sciences</MenuItem>
        <MenuItem
          onClick={handlArtNav}>Art
        </MenuItem>
        <MenuItem
          onClick={handleNav}>Music
        </MenuItem>
        <MenuItem
          onClick={handleNav}>Sports
        </MenuItem>
        <MenuItem
          onClick={handleNav}>Grad Statistics
        </MenuItem>
      </Menu>
    </Box>
  );
}