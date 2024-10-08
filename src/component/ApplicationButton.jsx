import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import { useDispatch } from "react-redux"
import { setPageSeleted } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import ApplicationCampusDialog from './ApplicationCampusDialog'


/*
 button allowing user to trigger campus selection to apply form
*/
export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleClickOpen = () => {
    console.log(`# box - open handle set open true`)
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
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
        startDecorator={<img src='/asset/application.svg'
          alt=""
          style={{
            width: '1.85rem',
            marginLeft: 5
          }}
        />}
        onClick={handleClickOpen}
      >
        <div>Apply</div>
      </Button>

      {open && <ApplicationCampusDialog setOpen={setOpen} open={open} ></ApplicationCampusDialog>}
    </div>
  );
}