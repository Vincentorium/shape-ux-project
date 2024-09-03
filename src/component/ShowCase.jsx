
import { Box } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ShowCase = ({ items, startIndex = 0 }) => {


    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '78%',
                height: '80%'
            }}
        >
            < Carousel
                autoPlay={true}
                selectedItem={startIndex} >
                {
                    items.map((item, index) => (
                        <div key={index}>
                            <img src={`/asset/showCase/${item.name}.png`} alt={`Item ${index + 1}`} />
                        </div>
                    ))
                }
            </Carousel >
        </Box>
    )
}

export default ShowCase;