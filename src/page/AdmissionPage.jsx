import React, { useEffect } from 'react';
import Header from '../component/Header'
import ShowCase from '../component/ShowCase'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DrawerList from '../component/DrawerList'
import SideDrawer from '../component/SideDrawer'
import { setPageSeleted } from '../redux/store';
import { useSelector, useDispatch } from "react-redux"
import { campusData } from '../commonData/campusData'
import Stack from '@mui/material/Stack';
import Button from '@mui/joy/Button';
import Bottom from '../component/Bottom';
import './Homepage.css'; // Import the CSS file

const AdmissionPage = () => {
    const dispatch = useDispatch()
    const [campusSelected, setCampusSelected] = React.useState('klt');

    useEffect(() => {

        dispatch(setPageSeleted('music'))

    }, [])
    const handleCampusSeleted = (campus) => {
        console.log(`#handleCampusSeleted is  ${handleCampusSeleted}`)
        setCampusSelected(campus)
    }


    const listItems = [
        'Top',
        'Admission Overview',
        'Admission Documentation'
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
                <DrawerList items={listItems} />
                <SideDrawer></SideDrawer>
            </Box>
            <span id="toc_1"></span>
            <Box sx={{ paddingLeft: '62px' }}>
                <Box >
                    <h1 >Admission Overview</h1>
                    <img src={'/asset/showCase/admission/admission_content_1.png'}

                        style={{ width: '90%' }}
                        alt=""
                    />
                </Box>
                <Box id="toc_2">
                    <h1 >Admission Documentation </h1>
                    <Box
                        sx={{ width: 1000, display: 'flex', border: '1px solid black' }}
                    >
                        <Stack spacing={0.1}>
                            {campusData.map(campus => (
                                <Button
                                    key={campus.value}
                                    value={campus.value}
                                    sx={{
                                        backgroundColor: 'black',
                                        color: 'silver',
                                        borderRadius: 0,
                                        width: 200
                                    }}
                                    onClick={() => setCampusSelected(campus.value)}
                                >
                                    {campus.label}
                                </Button>
                            ))}
                        </Stack>
                        <Stack>
                            <Box
                                sx={{
                                    padding: '5px',
                                    width: 1000

                                }}
                            >
                                <img src={`/asset/showCase/admission/admission_info_${campusSelected}.png`}
                                    alt=""
                                    style={{ width: '80%' }}
                                />
                            </Box>
                            <Box>
                                <img src={`/asset/showCase/admission/admission_content_apply.png`}
                                    alt=""
                                    style={{ width: '80%', borderRadius: 12 }}
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Box>
<br></br>
            <Bottom />

        </Container >
    );
};
export default AdmissionPage;