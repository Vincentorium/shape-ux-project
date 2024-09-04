import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from "react-redux"
import { setPageSeleted } from '../redux/store';
import { useNavigate } from 'react-router-dom';

export default function ApplicationDialogForm({ setOpen,open  }) {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`#setOpen is ${open}`)
    
  }, [])


  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      console.log(`#setOpen is false`)
      setOpen(false);
    }
  };
  const handleNav = () => {
    let pageSeleted = 'application'
    console.log(`#COM-Header: setNavFunc ${pageSeleted}`)
    dispatch(setPageSeleted(pageSeleted))

    navigate(`/${pageSeleted}`);
  }


  const [selectedValue, setSelectedValue] = useState(['klt']);

  const handleChange = (event) => {
    const selectedOption = options.find(option => option.value === event.target.value);

    setSelectedValue(selectedOption.value);

  };

  const options = [
    { value: 'klt', label: 'Kowloon Tong' },
    { value: 'mf1', label: 'Mei Foo' },
    { value: 'yl1', label: 'Yuen Long' },
    { value: 'tko', label: 'Tseung Kwan O' },
    { value: 'tm', label: 'Tuen Mun' },
    { value: 'wp', label: 'Wetland Park' }
  ];

  return (
    <div>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Select a campus to apply</DialogTitle>
        <DialogContent>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Campus</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={selectedValue}
              onChange={handleChange}
              input={<OutlinedInput label="Campus" />}
            >
              {options.map(option => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleNav}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}