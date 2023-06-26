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
import Profile from "../../removed12.png";
import Ko from "../../assets/ko.png";
import Org from "../../assets/org.png";
import Sacco from "../../assets/ksacco.png";





function PortfolioCard(props) {
  return (
    <Grid item xs={12} sm={12} lg={4} xl={4}>
      {console.log(props)}
      <Card sx={{ width: "95%", height:'600px', marginBottom:'20px'}}>
            <CardMedia
                component="img"
                height="300"
                image={props.image}
                alt="green iguana"
              />              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.Description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                {/* <Button size="small">Learn More</Button> */}
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
        "I designed a mobile system for banking agents that would help users deposit, withdraw, buy utilities such as Electricity Tokens, Pay for Services such as DSTV and others.",
      image: `${Sacco}`,
      alt:"Sacco"
    },
    {
      id: 2,
      name: "Event Management Application",
      Description: "I designed a system that helps an organization and its people to organize events. The events are posted to the site and the users choose the event they would like to attend, pay for it and get the ticket. Stacks: Front-end – React.js",
      image: `${Event}`
    },
    {
      id: 3,
      name: "Organization Management System",
      Description:
        "I designed a system that helps an organization manage services they provide to other organization. The system would help the service provider monitor the services provided, income generated, Usage of the service and automate functions like renewing services, disabling services and other more. Stacks: Front-end React.js",
      image: `${Org}`
    },
    {
      id: 4,
      name: "Visitor Management Application",
      Description: "I designed a system to automate the visitors registration process. This made it easy for the organization to track the entry of the vivitors and made commuinication easier",
      image: `${Ko}`
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
      <div id="contacts"></div>
      <Typography variant="h5" align="center" sx={{ marginTop: "80px" }}>
        {" "}
        Contact Me{" "}
      </Typography>
    </>
  );
}
