import React from 'react';
import Header from '../component/Header'
import ShowCase from '../component/ShowCase'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DrawerList from '../component/DrawerList'
import SideDrawer from '../component/SideDrawer'
import { useDispatch } from "react-redux"
import Bottom from '../component/Bottom';
import './Homepage.css'; // Import the CSS file

const Homepage = () => {

    const dispatch = useDispatch()

    const setLanSetting = (lanSeleted) => {
        console.log(`COM-Header: setLanSetting ${lanSeleted}`)
        dispatch(setLanSetting(lanSeleted))
    }


    const listItems = [
        'Top',
        'About us',
        'What we teach',
        'How we teach'
    ];
    var items = [
        {
            name: "1sc",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "2sc",
            description: "Hello World!"
        },
        {
            name: "3sc",
            description: "Hello World!"
        },
        {
            name: "4sc",
            description: "Hello World!"
        },
        {
            name: "5sc",
            description: "Hello World!"
        }
    ]
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
                    <h1 >About us</h1>
                    <img src='/asset/aboutUs.png'
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
            <Bottom />
        </Container >
    );
};
export default Homepage;