import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Resume() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{my: 7}}>
        <Box sx={{ bgcolor: '#DBEFF6', padding: "3px 20px", borderRadius: '10px', opacity: 0.95 }} >
        <div>
           <h1>Resume</h1>
           <p>Download my <a href="https://drive.google.com/file/d/1x1ZnnYs4oQoSCHDXF8Zw15VyTKrJOAXI/view?usp=sharing">resume</a></p>
          <h2>Front-end Proficiencies</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <h2>Back-end Proficiencies</h2>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
