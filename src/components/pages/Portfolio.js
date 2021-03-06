import React from "react";
import Project from "../Project";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import doggo from "../images/doggo-meet-up.png";
import weather from "../images/weather-dashboard.png";
import codeQuiz from "../images/code-quiz.png";
import unblockUnwind from "../images/unblock-unwind.png";
import jate from "../images/jate.png";
import bowel  from "../images/the-bowel-mvmt.png";
// import noteTaker from "../images/note_taker.png";
// import GitHubIcon from "@mui/icons-material/GitHub";

export default function Portfolio() {
  const projects = [
    {
      pImg: bowel,
      pName: "The Bowel Mvmt",
      pSkills: "React/JavaScript/Material UI",
      pRepo: "https://github.com/qd9069/the-bowel-mvmt",
      pDeployed: "https://the-bowel-mvmt.herokuapp.com/",
      pId: 1,
      pDescription: "An application for users who like to know about all public restrooms that are readily available nearby.",
    },
    {
      pImg: doggo,
      pName: "Doggo Meet Up",
      pSkills: "JavaScript/Handlebars/CSS",
      pRepo: "https://github.com/qd9069/doggo-meet-up",
      pDeployed: "https://hidden-reaches-52880.herokuapp.com/",
      pId: 2,
      pDescription: "A website for dog owners to use when looking for nearby dogs to play with.",
    },
    {
      pImg: unblockUnwind,
      pName: "Unblock-Unwind",
      pSkills: "HTML/CSS/JavaScript/jQuery",
      pRepo: "https://github.com/qd9069/unblock-unwind",
      pDeployed: "https://christinaa126.github.io/unblock-unwind/",
      pId: 3,
      pDescription: "An application that encourages software developers to take a break to cure their creative block and/or unwind from their current task.",
    },
    {
      pImg: weather,
      pName: "Weather Dashboard",
      pSkills: "HTML/CSS/JavaScript/Bootstrap",
      pRepo: "https://github.com/qd9069/weather_dashboard_server_apis_project",
      pDeployed:
        "https://qd9069.github.io/weather_dashboard_server_apis_project/",
      pId: 4,
      pDescription: "A simple Weather Dashboard that helps you to see the current weather outlook as well as the weather forecast.",
    },
    {
      pImg: codeQuiz,
      pName: "Code Quiz",
      pSkills: "HTML/CSS/JavaScript",
      pRepo: "https://github.com/qd9069/code_quiz_api_project",
      pDeployed: "https://qd9069.github.io/code_quiz_api_project/",
      pId: 5,
      pDescription: "A fun quiz for anyone who likes coding. There are total of five questions in the quiz and you will need to complete all the questions before the timer reaches zero.",
    },
    {
      pImg: jate,
      pName: "J.A.T.E",
      pSkills: "HTML/CSS/JavaScript/Express",
      pRepo: "https://github.com/qd9069/jate_text_editor_project",
      pDeployed: "https://fathomless-chamber-74811.herokuapp.com/",
      pId: 6,
      pDescription: "The Just Another Text Editor, shorten as J.A.T.E, is a downloadable application that helps users to create and save notes or code snippets.",
    },
    // {
    //   pImg: noteTaker,
    //   pName: "Note Taker",
    //   pSkills: "HTML/CSS/JavaScript/Express",
    //   pRepo: "https://github.com/qd9069/note_taker_express_js_project",
    //   pDeployed: "https://note-taker-express-js-123.herokuapp.com/",
    //   pId: 7,
    //   pDescription:"",
    // },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ my: 7, minHeight: "70vh" }}>
        <Box
          sx={{ bgcolor: "#DBEFF6", padding: "3px 20px", borderRadius: "10px", opacity: 0.95 }}
        >
          <h1>Portfolio</h1>
          {/* for projects */}
          <Container maxWidth="md" sx={{ mb: 5 }}>
            <Grid container spacing={3}>
              {projects.map(({ pImg, pName, pSkills, pRepo, pDeployed, pId, pDescription }) => (
                <Grid item xs={12} sm={6} key={pId}>
                  <Project
                    img={pImg}
                    name={pName}
                    skills={pSkills}
                    repo={pRepo}
                    deployed={pDeployed}
                    description={pDescription}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Container>
    </React.Fragment>
  );
}
