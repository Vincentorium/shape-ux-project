import React, { useEffect } from 'react';
import Header from '../component/Header'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SideDrawer from '../component/SideDrawer'
import { setPageSeleted } from '../redux/store';
import {  useDispatch } from "react-redux"
import './Homepage.css'; 



/*
to include the original online applicaiton form into same layout 
*/ 
const OnlineApplciationForm = () => {
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(setPageSeleted('music'))

    }, [])
  

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