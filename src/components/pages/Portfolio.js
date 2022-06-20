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
import noteTaker from "../images/note_taker.png";
import jate from "../images/jate.png";
// import GitHubIcon from "@mui/icons-material/GitHub";

export default function Portfolio() {
  const projects = [
    {
      pImg: doggo,
      pName: "Doggo Meet Up",
      pSkills: "JavaScript/Handlebars/CSS",
      pRepo: "https://github.com/qd9069/doggo-meet-up",
      pDeployed: "https://hidden-reaches-52880.herokuapp.com/",
    },
    {
      pImg: weather,
      pName: "Weather Dashboard",
      pSkills: "HTML/CSS/JavaScript/Bootstrap",
      pRepo: "https://github.com/qd9069/weather_dashboard_server_apis_project",
      pDeployed:
        "https://qd9069.github.io/weather_dashboard_server_apis_project/",
    },
    {
      pImg: codeQuiz,
      pName: "Code Quiz",
      pSkills: "HTML/CSS/JavaScript",
      pRepo: "https://github.com/qd9069/code_quiz_api_project",
      pDeployed: "https://qd9069.github.io/code_quiz_api_project/",
    },
    {
      pImg: unblockUnwind,
      pName: "Unblock-Unwind",
      pSkills: "HTML/CSS/JavaScript/jQuery",
      pRepo: "https://github.com/qd9069/unblock-unwind",
      pDeployed: "https://christinaa126.github.io/unblock-unwind/",
    },
    {
      pImg: noteTaker,
      pName: "Note Taker",
      pSkills: "HTML/CSS/JavaScript/Express",
      pRepo: "https://github.com/qd9069/note_taker_express_js_project",
      pDeployed: "https://note-taker-express-js-123.herokuapp.com/",
    },
    {
      pImg: jate,
      pName: "J.A.T.E",
      pSkills: "HTML/CSS/JavaScript/Express",
      pRepo: "https://github.com/qd9069/jate_text_editor_project",
      pDeployed: "https://fathomless-chamber-74811.herokuapp.com/",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ my: 7 }}>
        <Box
          sx={{ bgcolor: "#ecf0f1", padding: "3px 20px", borderRadius: "16px" }}
        >
          <h1>Portfolio</h1>
          {/* for projects */}
          <Container maxWidth="md" sx={{ mb: 5 }}>
            <Grid container spacing={3}>
              {projects.map(({ pImg, pName, pSkills, pRepo, pDeployed }) => (
                <Grid item xs={12} sm={6}>
                  <Project
                    img={pImg}
                    name={pName}
                    skills={pSkills}
                    repo={pRepo}
                    deployed={pDeployed}
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
