import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import './LearningMenue.css';
import { useNavigate } from 'react-router-dom';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleNav = () => {
    setIsHovered(false);
    setAnchorEl(null);
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
        variant="plain"
        endDecorator={<img src={`/asset/downArrow.png`}
          alt=""
          style={{ width: '10px' }}
        />}

        sx={{
          fontSize: 20, fontWeight: 600,
          textTransform: 'capitalize',
          marginRight: 1,
          '&:hover': {
            color: '#820632'
          },
          color: isHovered ? '#820632' : '#fff',
        }}
      >
        Learning
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
          onMouseEnter: handleHoverA,
          style: { pointerEvents: "auto" }
        }}
        disableAutoFocusItem='true'
      >
        <MenuItem
          className='learningEle'

          onClick={handleNav}>Languages</MenuItem>
        <MenuItem
          className='learningEle'

          onClick={handleNav}>Maths and Sciences</MenuItem>
        <MenuItem
          onClick={handleNav}>Art
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