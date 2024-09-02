import React, { useState } from 'react';
import Box from '@mui/material/Box';
const DrawerList = ({ items }) => {
  const [hoveredItem, setHoveredItem] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        top: 335,
        left: 22,
      }}
      className="drawer"
      onMouseEnter={() => setHoveredItem(true)}
      onMouseLeave={() => setHoveredItem(false)}>

      {hoveredItem ? (
        <Box
          sx={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '10px',
            backgroundColor: '#f9f9f9',
            width: 'auto',
          }}
        >
          <ul   style={{
                padding: "3 0 3 17px",
                margin: 0
              }}>
            {items.map((item, index) => (
              <li 
              key={index} className="drawer-item">
                <a href={`#toc_${index}`}>
                  {item}
                </a> 
              </li>
            ))}
          </ul>
        </Box>
      ) : <ul className="drawer-list">
        {items.map((item, index) => (
          <li key={index} className="drawer-item">
            -
          </li>
        ))}
      </ul>}
    </div>
  );
};

 
export default DrawerList;