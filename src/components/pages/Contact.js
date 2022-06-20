import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Contact() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{my: 7}}>
        <Box sx={{ bgcolor: '#ecf0f1', padding: "3px 20px", borderRadius: '16px' }} >
        <h1>Contact</h1>
      <Card
        style={{ maxWidth: 650, padding: "20px 5px", borderRadius: '16px' }}
        sx={{ my: 4, ml: 9 }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact Me
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  color="textSecondary"
                >
                  Name:
                </Typography>
                <TextField
                  // label="Name"
                  placeholder="Enter your name"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  color="textSecondary"
                >
                  Email address:
                </Typography>
                <TextField
                  // label="Email address"
                  placeholder="Enter email"
                  fullWidth
                  required
                  type="email"
                />
              </Grid>
              <Grid xs={12} item>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  color="textSecondary"
                >
                  Message:
                </Typography>
                <TextField
                  // label="Message"
                  placeholder="Type your message here"
                  fullWidth
                  required
                  multiline
                  rows={10}
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Card
        style={{ maxWidth: 650, padding: "20px 5px", borderRadius: '16px' }}
        sx={{ my: 5, ml: 9 }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 18 }}
            color="black"
            gutterBottom
            variant="h6"
          >
            Alternatively, feel free to contact me via phone number or email
            below
          </Typography>
          <IconButton
            color="info"
            aria-label="Phone"
            href={`tel:8582678234`}
            size="small"
            sx={{ mx: 1 }}
          >
            <PhoneIphoneIcon /> Phone: (858) 267 - 8234
          </IconButton>
          <IconButton
            color="info"
            aria-label="Email"
            href={`mailto:qdengliao@gmail.com`}
            size="small"
            sx={{ mx: 1.5 }}
          >
            <AttachEmailIcon /> Email: qdengliao@gmail.com
          </IconButton>
        </CardContent>
      </Card>
      </Box>
      </Container>
    </React.Fragment>
  );
}
