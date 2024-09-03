import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Inquiry from './Application'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ApplicationDialog from './ApplicationDialog'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  width: 50,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const SideDrawer = () => {
  const [hoveredItem, setHoveredItem] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        top: 335,
        right: 22,
      }}
      className="drawer"
      onMouseEnter={() => setHoveredItem(true)}
      onMouseLeave={() => setHoveredItem(false)}>

      <Box
        sx={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          padding: '10px',
          backgroundColor: '#f9f9f9',
          width: 'auto',
        }}>
        <Box sx={{ width: '100%' }}>
          <Stack spacing={2}>

            <img src='asset/application.svg'
              alt=""
              style={{ width: '0.85rem' }}
            />
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </Box>
        <ApplicationDialog></ApplicationDialog>
        <Inquiry ></Inquiry>

      </Box>

    </div >
  );
};


export default SideDrawer;