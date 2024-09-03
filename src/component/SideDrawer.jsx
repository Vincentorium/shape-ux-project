import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AddressBox from './AddressBox'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ApplicationDialog from './ApplicationDialog'
import Button from '@mui/joy/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  width: 60,
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

            <Item>
              <ApplicationDialog></ApplicationDialog>
            </Item>

            <Item>
              <AddressBox ></AddressBox>
            </Item>

            <Item>
              <Button
                className="applyButton"
                variant="outlined"
                color="neutral"
                style={{
                  display: 'block',
                  margin: '0',
                  padding: 0,
                  border: 0
                }}
                startDecorator={<img src='asset/top.png'
                  alt=""
                  style={{
                    width: '2.5rem',
                    marginLeft: 2
                  }}
                />}

              >
                <a href="#toc_0" style={{ textDecoration: 'none', color: '#333' }}>
                  Top
                </a>
              </Button></Item>

          </Stack>


        </Box>
      </Box>

    </div >
  );
};


export default SideDrawer;