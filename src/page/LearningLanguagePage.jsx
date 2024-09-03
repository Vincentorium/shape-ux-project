import React, { useEffect } from 'react';
import Header from '../component/Header'
import ShowCase from '../component/ShowCase'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DrawerList from '../component/DrawerList'
import SideDrawer from '../component/SideDrawer'

import './Homepage.css'; // Import the CSS file

const LearningPage = () => {
    const listItems = [
        'Top',
        'About us',
        'What we teach',
        'How we teach'
    ];

    var items = [
        {
            name: "music/1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "music/2",
            description: "Hello World!"
        },
        {
            name: "music/3",
            description: "Hello World!"
        },
        {
            name: "music/4",
            description: "Hello World!"
        },
        {
            name: "music/5",
            description: "Hello World!"
        }
    ]
    useEffect(() => { console.log(`process.env.PUBLIC_URL is ${process.env.PUBLIC_URL}`) });
    return (
        <Container sx={{ minWidth: 1495 }}  >
            <Box id="toc_0" sx={{ height: 707 }}>
                <Header></Header>
                <ShowCase items={items}></ShowCase>
                <DrawerList items={listItems} />
                <SideDrawer></SideDrawer>
            </Box>
            <span id="toc_1"></span>
            <Box sx={{ paddingLeft: '62px' }}>
                <Box >
                    <h1 >Learning</h1>
                    <img src={'/asset/aboutUs.png'}

                        style={{ width: '90%' }}
                        alt=""
                    />
                </Box>
                <Box id="toc_2">
                    <h1 >What we teach</h1>
                    <img src='/asset/homePage1.png'
                        style={{ width: '90%' }}
                        alt=""
                    />
                </Box>
                <Box id="toc_3">
                    <h1 >How we teach</h1>
                    <img src='/asset/homePage2.png'
                        style={{ width: '90%' }}
                        alt=""
                    />
                </Box>
            </Box>
        </Container >
    );
};
export default LearningPage;