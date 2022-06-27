import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Resume() {
  const fESkills = [
    {
      id: 1,
      skill: "HTML",
    },
    {
      id: 2,
      skill: "CSS",
    },
    {
      id: 3,
      skill: "JavaScript",
    },
    {
      id: 4,
      skill: "jQuery",
    },
    {
      id: 5,
      skill: "Responsive design",
    },
    {
      id: 6,
      skill: "React",
    },
    {
      id: 7,
      skill: "Bootstrap",
    },
  ];

  const bESkills = [
    {
      id: 1,
      skill: "APIs",
    },
    {
      id: 2,
      skill: "Node",
    },
    {
      id: 3,
      skill: "Express",
    },
    {
      id: 4,
      skill: "MySQL, Sequelize",
    },
    {
      id: 5,
      skill: "MongoDB, Mongoose",
    },
    {
      id: 6,
      skill: "REST",
    },
    {
      id: 7,
      skill: "GraphQL",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ my: 7, minHeight: "70vh" }}>
        <Box
          sx={{
            bgcolor: "#DBEFF6",
            padding: "3px 20px",
            borderRadius: "10px",
            opacity: 0.95,
          }}
        >
          <div>
            <h1>Resume</h1>
            <p>
              Download my{" "}
              <a href="https://drive.google.com/file/d/1Sir2cd0KD7yQ5FutvQJmLhx2Sr498duj/view?usp=sharing">
                resume
              </a>
            </p>
            <h2>Front-end Proficiencies</h2>
            <ul>
              {fESkills.map(({ id, skill }) => (
                <li key={id}>{skill}</li>
              ))}
            </ul>
            <h2>Back-end Proficiencies</h2>
            <ul>
              {bESkills.map(({ id, skill }) => (
                <li key={id}>{skill}</li>
              ))}
            </ul>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
