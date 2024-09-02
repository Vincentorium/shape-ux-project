
import { Box } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ShowCase = () => {
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
        <Box
            sx={{
                margin: '94px 34px 34px 34px',
                position: 'absolute',
                top: '35%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60%',
            }}
        >
            < Carousel autoPlay={true} >
                {
                    items.map((item, index) => (
                        <div key={index}>
                            <img src={`asset/showCase/${item.name}.png`} alt={`Item ${index + 1}`} />
                        </div>
                    ))
                }
            </Carousel >
        </Box>
    )
}

export default ShowCase;