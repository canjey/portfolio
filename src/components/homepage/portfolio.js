/* eslint-disable */

import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Event from "../../assets/event.png";

function PortfolioCard(props) {
  return (
    <Grid item xs={4}>
      <Card sx={{ width: "95%" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Event}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.Description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      name: "Kingdom Sacco Mobile App",
      Description:
        "I designed a mobile system for banking agents they would help users deposit, withdraw, buy utilities such as Electricity Tokens, Pay for Services such as DSTV and others.",
      image: "../../assets/event.png"
    },
    {
      id: 2,
      name: "Event Management Application",
      Description: "I designed a system that helps an organization and its people to organize for events. The events are posted to the site and the people choose the event they would like to attend, pay for it and get the ticket. Stacks: Front-end – React.js",
      image: ""
    },
    {
      id: 3,
      name: "Organization Management System",
      Description:
        "I designed a system that helps an organization manage services they provide to other organization. The system would help the service provider monitor the services provided, income generated, Usage of the service and automate functions like renewing services, disabling services and other more. Stacks: Front-end React.js",
      image: ""
    },
    {
      id: 4,
      name: "Visitor Management Application",
      Description: "The panel helps the admin to see transactions taking place across the agents of the bank, the statistics in place including (New Agents joined, pending applications for joining agents, Total agents)",
      image: ""
    }
  ];
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" }
  ];

  return (
    <>
      <Grid container sx={{}}>
        <Typography
          align="center"
          sx={{ marginTop: "30px", marginLeft: "15%", marginRight: "20%" }}
        ></Typography>

        <Grid container sx={{ marginLeft: "5%", marginRight: "5%" }}>
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id}
              name={item.name}
              Description={item.Description}
              image={item.image}
            />
          ))}
        </Grid>
      </Grid>

      <Typography variant="h5" align="center" sx={{ marginTop: "80px" }}>
        {" "}
        Contact Me{" "}
      </Typography>
    </>
  );
}
