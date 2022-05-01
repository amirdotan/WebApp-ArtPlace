import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import imageSrc from '../images/img_exmp.jpeg'


export default function PostPreview() {

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Preview Post
            </Typography>
            <Typography variant="h6" gutterBottom>
                Title:
            </Typography>
            <Typography gutterBottom>
                YoYo Title
            </Typography>
            <Typography variant="h6" gutterBottom>
                Description:
            </Typography>
            <Typography gutterBottom>
                Short description of post
            </Typography>
            <img src={imageSrc} className="addpostimg" />


        </React.Fragment>
    );
}