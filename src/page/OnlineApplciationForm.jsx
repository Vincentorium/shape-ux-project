import React, { useEffect } from 'react';
import Header from '../component/Header'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SideDrawer from '../component/SideDrawer'
import { setPageSeleted } from '../redux/store';
import { useSelector, useDispatch } from "react-redux"

import './Homepage.css'; // Import the CSS file

const OnlineApplciationForm = () => {
    const dispatch = useDispatch()
    const [campusSelected, setCampusSelected] = React.useState('klt');

    useEffect(() => {

        dispatch(setPageSeleted('music'))

    }, [])
    const handleCampusSeleted = (campus) => {
        console.log(`#handleCampusSeleted is  ${handleCampusSeleted}`)
        setCampusSelected(campus)
    }

    return (
        <Container sx={{ minWidth: 1495 }}  >
            <Box id="toc_0" sx={{ height: 807 }}>
                <Header></Header>

                <SideDrawer></SideDrawer>
                

                <Box
                    sx={{ marginTop: 12, width: 1500, height: 700 }}
                >
                    <Box>
                    </Box>
                    <iframe
                        title="Embedded Website"
                        src="https://york.edu.hk/onlineapplicationform/form.htm"
                        style={{ width: '100%', height: '100%', border: 'none' }}
                    />
                </Box>
            </Box>
            <Box id="toc_2">


            </Box>
        </Container >
    );
};
export default OnlineApplciationForm;