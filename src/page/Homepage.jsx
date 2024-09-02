import React from 'react';
import Header from '../component/Header'
import ShowCase from '../component/ShowCase'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DrawerList from '../component/DrawerList'
import './Homepage.css'; // Import the CSS file

const Homepage = () => {
    const listItems = [
        'Top',
        'About us',
        'What we teach',
        'How we teach'
    ];
    return (
        <Container sx={{ minWidth: 1495 }}  >
            <Box id="toc_0" sx={{ height: 707 }}>
                <Header></Header>
                <ShowCase></ShowCase>
                <DrawerList items={listItems} />
              
            </Box>
            <span id="toc_1"></span>
            <Box sx={{ paddingLeft: '62px' }}>
                <Box >
                    <h1 >About us</h1>
                    <img src='asset/aboutUs.png'
                        style={{ width: '90%' }}
                        alt=""
                    />
                </Box>
                <Box id="toc_2">
                    <h1 >What we teach</h1>
                    <img src='asset/homePage1.png'
                        style={{ width: '90%' }}
                        alt=""
                    />
                </Box>
                <Box id="toc_3">
                    <h1 >How we teach</h1>
                    <img src='asset/homePage2.png'
                        style={{ width: '90%' }}
                        alt=""
                    />
                </Box>
            </Box>
        </Container >
    );
};
export default Homepage;