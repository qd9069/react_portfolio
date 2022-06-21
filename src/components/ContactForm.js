import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function ContactForm() {
    return (
        <Card
            style={{ maxWidth: 650, padding: "20px 5px", borderRadius: "16px" }}
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
    );
}