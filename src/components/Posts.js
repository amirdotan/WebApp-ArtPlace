import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SinglePost from './SinglePost'

import Modal from './Modal'

import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import { motion } from 'framer-motion';
import { OverlayTrigger } from 'react-bootstrap';
import { borderRadius } from '@mui/system';


export default function MasonryImageList() {
{/*
    const [posts, setHome] = React.useState([])

    React.useEffect(() => {
        // you can watch this vid https://www.youtube.com/watch?v=MnIEJMgvuvc&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=9
        // this is a request to the server for the data in db.json
        fetch( 'http://localhost:8000/posts')
        // then take the response object and parse it to js arrat
        .then(response => response.json())
        // data is the array outputed from response.json(), we send that array to setHome
        .then(data => setHome(data))
    }, [])
*/}
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false)
    const open = (title, img) => {setModalOpen(true);
                             settit(title);
                             setimg(img);
    };
    var [tit, settit] = useState('');
    var [img, setimg] = useState('');


    // const mylog = () => console.log('fml'); 

  return (
        <Box  sx={{ width: '100%', height: '88%', overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={3} gap={8} >
                {posts.map((item) => (
                    <ImageListItem key={item.id} >
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            onClick= {() => (modalOpen ? close() : open(item.title, item.img))}
                        /> 
                    </ImageListItem>

                ))}
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} title={tit} img={img} />}
            </ImageList>
        </Box>
  );
}

// {() => (modalOpen ? close() : open())}



const posts = [
    {
      id: 1, 
        img: 'https://i.pinimg.com/736x/b6/a1/93/b6a1934df13830ec2dee6c9f0a087d46.jpg',
      title: 'Bed',
    },
    {
      id: 2, 
        img:'https://i.pinimg.com/564x/27/65/1d/27651ddc98184e98db54f0273d153992.jpg',
      title: 'Books',
    },
    {
      id: 3,
        img: 'https://i.pinimg.com/originals/29/77/d0/2977d04df921522e5991b2953cfb11c1.jpg',
      title: 'Sink',
    },
    {
      id: 4,
        img: 'https://i.pinimg.com/564x/3d/9a/4c/3d9a4c1d4f020b51124fe525355820fc.jpg',
      title: 'Kitchen',
    },
    {
      id: 5,
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/life-changes-quotes-arms-around-each-other-1543619239.jpg',
      title: 'Blinds',
    },
    {
      id:  6, 
        img: 'https://community.spotify.com/t5/image/serverpage/image-id/81892i5E5E5DF5B4B3EAB5/image-size/large?v=v2&px=999',
      title: 'Chairs',
    },
    {
      id: 7,
        img: 'https://i.pinimg.com/564x/3d/9a/4c/3d9a4c1d4f020b51124fe525355820fc.jpg',
      title: 'Laptop',
    },
    {
      id: 8,
        img: 'https://i.ytimg.com/vi/GYktdGIGbDo/maxresdefault.jpg',
      title: 'Doors',
    },
    {
        id: 9,
        img: 'https://images-na.ssl-images-amazon.com/images/I/912OuPoIjLL.png',
      title: 'Coffee',
    },
    {
      id: 10, 
        img: 'https://i.pinimg.com/236x/08/95/96/089596a5a7bc7b74d637e1937caed24a.jpg',
      title: 'Storage',
    },
    {
      id: 11,
        img: 'https://beautifuldawndesigns.net/wp-content/uploads/2020/09/pencial-drawing-ideas-8.jpg',
      title: 'Candle',
    },
    {
      id: 12,
        img: 'https://i.ytimg.com/vi/GYktdGIGbDo/maxresdefault.jpg',
      title: 'Coffee table',
    },
    {
      id: 13,
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/life-changes-quotes-arms-around-each-other-1543619239.jpg',
      title: 'Bed',
    },
    {
      id: 14, 
        img: 'https://quotestime.net/wp-content/uploads/2019/12/1576001862_Inspirational-And-Motivational-Quotes-23-Deep-and-Inspiring-Quotes.jpg',
      title: 'Books',
    },
    {
      id: 15,
        img: 'https://static.wixstatic.com/media/72c0b2_4704c5328f4343ac8f9fe424501f953d~mv2.png/v1/fill/w_924,h_520,al_c/72c0b2_4704c5328f4343ac8f9fe424501f953d~mv2.png',
      title: 'Sink',
    },
    {
      id: 16,
        img: 'https://img.gadgethacks.com/img/79/61/63684369286277/0/disable-those-annoying-looping-videos-when-playing-songs-spotify.w1456.jpg',
      title: 'Kitchen',
    },
    {
      id: 17, 
        img: 'https://quotestime.net/wp-content/uploads/2019/12/1576001862_Inspirational-And-Motivational-Quotes-23-Deep-and-Inspiring-Quotes.jpg',
      title: 'Blinds',
    },
    {
      id: 18,
        img: 'https://www.andbeyond.com/wp-content/uploads/sites/5/Lama-and-Machu-Picchu-in-Peru-in-South-America.jpg',
      title: 'Chairs',
    },
    {
      id: 19,  
        img: 'https://images-na.ssl-images-amazon.com/images/I/912OuPoIjLL.png',
      title: 'Laptop',
    },
    {
      id: 20,
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/life-changes-quotes-arms-around-each-other-1543619239.jpg',
      title: 'Doors',
    },
    {
      id:21 ,  
        img: 'https://quotestime.net/wp-content/uploads/2019/12/1576001862_Inspirational-And-Motivational-Quotes-23-Deep-and-Inspiring-Quotes.jpg',
      title: 'Coffee',
    },
    {
      id: 22,
        img: 'https://img.gadgethacks.com/img/21/41/63679791575947/0/use-siri-play-spotify-music-start-playlists-ios-12-shortcut.w1456.jpg',
      title: 'Storage',
    },
    {
      id: 23,
        img: 'https://images-na.ssl-images-amazon.com/images/I/912OuPoIjLL.png',
      title: 'Candle',
    },
    {
      id: 24,  
        img: 'https://quotestime.net/wp-content/uploads/2019/12/1576001862_Inspirational-And-Motivational-Quotes-23-Deep-and-Inspiring-Quotes.jpg',
      title: 'Coffee table',
    },
  
    {
      id: 25,  
        img: 'https://i.pinimg.com/474x/9d/57/ac/9d57ac42b21b58d35370911d6701fda4.jpg',
      title: 'Kitchen',
    },
    {
      id: 26,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1piMRoFWe_5-TWkPeDl9pE-OyDl1D7foFQ&usqp=CAU',
      title: 'Blinds',
    },
    {
      id: 27,  
        img: 'https://images-na.ssl-images-amazon.com/images/I/912OuPoIjLL.png',
      title: 'Chairs',
    },
    {
      id: 28,  
        img: 'https://img.gadgethacks.com/img/79/61/63684369286277/0/disable-those-annoying-looping-videos-when-playing-songs-spotify.w1456.jpg',
      title: 'Laptop',
    },
    {
      id: 29,  
        img: 'https://static.wixstatic.com/media/72c0b2_4704c5328f4343ac8f9fe424501f953d~mv2.png/v1/fill/w_924,h_520,al_c/72c0b2_4704c5328f4343ac8f9fe424501f953d~mv2.png',
      title: 'Doors',
    },
    {
      id: 30,  
        img: 'https://img.gadgethacks.com/img/21/41/63679791575947/0/use-siri-play-spotify-music-start-playlists-ios-12-shortcut.w1456.jpg',
      title: 'Coffee',
    },
    {
      id: 31,  
        img: 'https://qph.fs.quoracdn.net/main-qimg-aaaa7c17bd43d8814d7458fa375381a5',
      title: 'Storage',
    },
    {
      id: 32,  
        img: 'https://cdn.ponly.com/wp-content/uploads/Love-Quotes-35.jpg',
      title: 'Candle',
    },
    {
      id: 33,  
        img: 'https://static.wixstatic.com/media/72c0b2_4704c5328f4343ac8f9fe424501f953d~mv2.png/v1/fill/w_924,h_520,al_c/72c0b2_4704c5328f4343ac8f9fe424501f953d~mv2.png',
      title: 'Coffee table',
    },
    {
      id: 34,  
        img: 'https://i.ytimg.com/vi/GYktdGIGbDo/maxresdefault.jpg',
      title: 'Bed',
    },
    {
      id: 35,  
        img: 'https://img.gadgethacks.com/img/79/61/63684369286277/0/disable-those-annoying-looping-videos-when-playing-songs-spotify.w1456.jpg',
      title: 'Books',
    },
    {
      id: 36,  
        img: 'https://i.pinimg.com/564x/27/65/1d/27651ddc98184e98db54f0273d153992.jpg',
      title: 'Sink',
    },
    {
      id: 37,  
        img: 'https://img.gadgethacks.com/img/21/41/63679791575947/0/use-siri-play-spotify-music-start-playlists-ios-12-shortcut.w1456.jpg',
      title: 'Kitchen',
    },
    {
      id: 38,  
        img: 'https://instagramcircus.com/wp-content/uploads/2020/05/funny-generic7.jpg',
      title: 'Blinds',
    },
    {
      id: 39,  
        img: 'https://i.pinimg.com/originals/3e/a0/55/3ea055ce673d632aaadbd79330228e33.jpg',
      title: 'Chairs',
    },
    {
      id: 40,  
        img: 'https://images-na.ssl-images-amazon.com/images/I/912OuPoIjLL.png',
      title: 'Laptop',
    },
    {
      id: 41,  
      img: 'https://i.ytimg.com/vi/GYktdGIGbDo/maxresdefault.jpg',
      title: 'Doors',
    },
    {
      id: 42,  
        img: 'https://img.gadgethacks.com/img/21/41/63679791575947/0/use-siri-play-spotify-music-start-playlists-ios-12-shortcut.w1456.jpg',
      title: 'Coffee',
    },
    {
      id: 43,
        img: 'https://i.pinimg.com/564x/27/65/1d/27651ddc98184e98db54f0273d153992.jpg',
      title: 'Storage',
    },
    {
      id: 44,  
        img: 'https://static.wixstatic.com/media/72c0b2_4704c5328f4343ac8f9fe424501f953d~mv2.png/v1/fill/w_924,h_520,al_c/72c0b2_4704c5328f4343ac8f9fe424501f953d~mv2.png',
      title: 'Candle',
    },
    {
      id: 45,  
        img: 'https://images-na.ssl-images-amazon.com/images/I/912OuPoIjLL.png',
      title: 'Coffee table',
    },
  ];