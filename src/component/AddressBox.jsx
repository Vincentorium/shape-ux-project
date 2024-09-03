import React, { useState } from 'react';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import Sheet from '@mui/joy/Sheet';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

export default function AddressBox() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('Guesthouse');

  const [selectedValue, setSelectedValue] = useState(['klt']);
  const [selectedValuePic, setSelectedValuePic] = useState(['klt1', 'klt2', 'klt3']);


  const handleChange = (event) => {
    const selectedOption = options.find(option => option.value === event.target.value);
    const selectedOptionMappingPic = optionsMapping.find(myOption => myOption.label === event.target.value);

    setSelectedValue(selectedOption.value);
    setSelectedValuePic(selectedOptionMappingPic.value)

  };


  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const options = [
    { value: 'klt', label: 'Kowloon Tong' },
    { value: 'mf1', label: 'Mei Foo' },
    { value: 'yl1', label: 'Yuen Long' },
    { value: 'tko', label: 'Tseung Kwan O' },
    { value: 'tm', label: 'Tuen Mun' },
    { value: 'wp', label: 'Wetland Park' }
  ];

  const optionsMapping = [
    { value: ['klt1', 'klt2', 'klt3'], label: 'klt' },
    { value: ['mf1'], label: 'mf1' },
    { value: ['yl1'], label: 'yl1' },
    { value: ['yl1'], label: 'tko' },
    { value: ['yl1'], label: 'tm' },
    { value: ['yl1'], label: 'wp' }
  ];



  return (
    <React.Fragment>
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
        startDecorator={<img src='asset/contact.svg'
          alt=""
          style={{
            width: '1.85rem',
            marginLeft: 5
          }}
        />}
        onClick={() => setOpen(true)}
      >
        <div>Contact</div>
      </Button>
      <Drawer
        size="md"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              width: 940,
              bgcolor: 'transparent',
              p: { md: 3, sm: 0 },
              boxShadow: 'none',
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <DialogTitle>Contact Us</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: 'auto' }} />
          <DialogContent sx={{ gap: 2 }}>
            <div>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Campus</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedValue}
                  onChange={handleChange}
                  input={<OutlinedInput label="Campus" />}
                  MenuProps={MenuProps}
                >
                  {options.map(option => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>

              </FormControl>
            </div>
            <Box sx={{
              padding: '14px',

            }}>

              {selectedValuePic.map(option => (
                <Box
                sx={{
                  padding: '14',
                  width:1000
                }}
                >
                  <img src={`asset/addresssInfo/${option}.png`}
                    alt=""
                    style={{ width: '80%', borderRadius: '5px' }}
                  />
                </Box>
              ))}


            </Box>

          </DialogContent>


          <Divider sx={{ mt: 'auto' }} />
       
        </Sheet>
      </Drawer>
    </React.Fragment>
  );
}

