import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import imageSrc from '../images/img_exmp.jpeg'
import { useState, useEffect } from 'react';
import SinglePostV2 from '../components/SinglePostV2'

export default function PostPreview({ imageURLs, title, shortDescription, longDescription, skillList}) {


    return (
        <React.Fragment>
            <Typography gutterBottom align="left">
            <b>Project Title:</b>
                {title}
            </Typography>
            <Typography gutterBottom align="left">
                <b>Short Description:</b>
                {shortDescription}
            </Typography>
            <Typography gutterBottom  style={{wordWrap: "break-word"}} align="left">
            <b>Long Description:</b>
                {longDescription}
            </Typography>
            <List  align="left" >
            <b>Skills:</b>
                {skillList.map((value) => (
                    // <ListItem 
                    //     key={value}
                    // >
                        <ListItemText primary={`${value}`}  />
                    // </ListItem>
                ))}
            </List>
{/*            <Typography gutterBottom>
                Tags: {skillList.map(skill => <Typography gutterBottom> {skill} </Typography>)}
            </Typography>*/}
            {imageURLs.map(imageSrc => <img src={imageSrc} className="addpostimg" />)}


        </React.Fragment>
    );
}