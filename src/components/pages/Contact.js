import React from "react";
import Typography from "@mui/material/Typography";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Alert from "@mui/material/Alert";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ContactForm from '../ContactForm';

export default function Contact() {
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
          <h1>Contact</h1>
          <ContactForm />
          <div>
            <Alert
              icon={<ContactMailIcon />}
              severity="success"
              sx={{ fontWeight: "bold", fontSize: "17px" }}
            >
              {" "}
              Additional contact information provided below{" "}
            </Alert>
            <Accordion style={{ borderRadius: "6px" }} sx={{ my: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Phone</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Feel free to call or text:{" "}
                  <IconButton
                    color="info"
                    aria-label="Phone"
                    href={`tel:8582678234`}
                    size="small"
                  >
                    <PhoneIphoneIcon /> (858) 267 - 8234
                  </IconButton>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ borderRadius: "6px" }} sx={{ mt: 1, mb: 5 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Email</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Please send email to:{" "}
                  <IconButton
                    color="info"
                    aria-label="Email"
                    href={`mailto:qdengliao@gmail.com`}
                    size="small"
                  >
                    <AttachEmailIcon /> qdengliao@gmail.com
                  </IconButton>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
