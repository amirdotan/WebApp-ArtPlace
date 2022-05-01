import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Community_img from '../images/Community.jpg'
import Art_img from '../images/Art.jpg'
import Creativity_img from '../images/Creativity.jpg'


const data = [
  {
    src: Community_img,
    title: 'Community',
    channel: 'Our product aims to strengthen the community affiliation and to bring people together',
    views: 'We ',
    createdAt: 'a week ago',
  },
  {
    src: Art_img,
    title: 'Art',
    channel: 'Sharing & consuming quality content made by the community members',
    views: '40 M views',
    createdAt: '3 years ago',
  },
  {
    src: Creativity_img,
    title: 'Creativity',
    channel: 'The platfform encourge everyone to express and discover their creativity',
    views: '130 M views',
    createdAt: '10 months ago',
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: "100%", marginRight: 0.5, my: 5 }}>
          {item ? (
            <img 
              style={{ width: "80%", height: "41%" }}
              alt={item.title}
              src={item.src}
            />
          ) :
           (
            <></>
          )
          }

          {(
            <Box sx={{ pr: 2 }}>
              <Typography gutterBttom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary">
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {/* {`${item.views} • ${item.createdAt}`} */}
              </Typography>
            </Box>
          ) }
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media />
    </Box>
  );
}