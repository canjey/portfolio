import * as React from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Image1 from "../../assets/Ellipse 5.png"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    padding:'10px',
    fontFamily: 'Inria',
    marginTop:'40px',
    marginLeft:'20px',
    color: theme.palette.text.secondary,
  }));

export default function Topbar(){
    return (
        <>
        <Grid container>
        <Grid item xs={6}>
        <img src={Image1} width="100px"/>
                </Grid>
            <Grid item xs={1}>
                <Item> About Me </Item>
            </Grid>
            <Grid item xs={1}>
            <Item>   Services </Item>
            </Grid>
            <Grid item xs={1}>
            <Item>   Portfolio </Item>
                
            </Grid>
            <Grid item xs={1}>
            <Item>   Hire Me </Item>
                
            </Grid>
        </Grid>
        
        </>
    )
}