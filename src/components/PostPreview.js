import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import imageSrc from '../images/img_exmp.jpeg'
import { useState, useEffect } from 'react';


export default function PostPreview({ imageURLs, title, shortDescription, longDescription, skillList}) {


    return (
        <React.Fragment>
            <Typography gutterBottom variant="h4">
                {title}
            </Typography>
            <Typography gutterBottom variant="h5">
                {shortDescription}
            </Typography>
            <Typography gutterBottom variant="h5" style={{wordWrap: "break-word"}}>
                {longDescription}
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}  >
                <Typography gutterBottom variant="h5">
                    Tags:
                </Typography>
                {skillList.map((value) => (
                    <ListItem 
                        key={value}
                    >
                        <ListItemText primary={`${value}`} align="center" />
                    </ListItem>
                ))}
            </List>
{/*            <Typography gutterBottom>
                Tags: {skillList.map(skill => <Typography gutterBottom> {skill} </Typography>)}
            </Typography>*/}
            {imageURLs.map(imageSrc => <img src={imageSrc} className="addpostimg" />)}


        </React.Fragment>
    );
}