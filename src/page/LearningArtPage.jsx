import React, { useEffect } from 'react';
import Header from '../component/Header'
import ShowCase from '../component/ShowCase'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ToCList from '../component/ToCList'
import SideDrawer from '../component/SideDrawer'
import { setPageSeleted } from '../redux/store';
import { useSelector, useDispatch } from "react-redux"

import './Homepage.css'; // Import the CSS file

const LearningArtPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(setPageSeleted('music'))

    }, [])

    const listItems = [
        'Top',
        'Introduction',
        'Language Curriculum'
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
    return (
        <Container sx={{ minWidth: 1495 }}  >
            <Box id="toc_0" sx={{ height: 707 }}>
                <Header></Header>
                <ShowCase
                    items={items}
                    startIndex={2}
                ></ShowCase>
                <ToCList items={listItems} />
                <SideDrawer></SideDrawer>
            </Box>
            <span id="toc_1"></span>
            <Box sx={{ paddingLeft: '62px' }}>
                <Box >
                    <h1 >Introduction</h1>
                    <img src={'/asset/showCase/music/L-language_1.png'}

                        style={{ width: '90%' }}
                        alt=""
                    />
                </Box>
                <Box id="toc_2">
                    <h1 >Photo Exhibition</h1>
                    <img src={'/asset/showCase/music/L-language_2.png'}

                        style={{ width: '90%' }}
                        alt=""
                    />
                    <img src={'/asset/showCase/music/L-language_3.png'}
                        style={{ width: '90%' }}
                        alt=""
                    />
                </Box>

            </Box>
        </Container >
    );
};
export default LearningArtPage;