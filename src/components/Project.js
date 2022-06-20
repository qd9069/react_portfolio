import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import GitHubIcon from "@mui/icons-material/GitHub";
// import { makeStyles } from "@mui/material";


// const useStyles = makeStyles({
//   card: {
//     opacity: 1 ,
//     '&:hover': {
//       opacity: 0.5,
//       backgroundColor: "#333"
//     }

//   }
// })


export default function Project(props) {

  // const classes = useStyles();

  return (
    <Card className="card">
    {/* // <Card className={classes.card}> */}
      <CardMedia
        component="img"
        height="140"
        image={props.img}
        alt={props.name}
      />
      <CardActions>
        <Button size="large" href={props.deployed} sx={{textTransform: "capitalize"}}>{props.name}</Button>
        <IconButton color="primary" aria-label="Repo" href={props.repo}>
          <GitHubIcon />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.skills}
        </Typography>
      </CardContent>
    </Card>
  );
}
