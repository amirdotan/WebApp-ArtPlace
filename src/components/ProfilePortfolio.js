import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import portfolio1 from "../images/portfolio1.jpg" // relative path to image 

var img = document.createElement("img");  
img.src = "../images/portfolio1.jpg"; 

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: '100%', height: '100%' }} cols={2} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://www.artmajeur.com/medias/hd/b/u/bunner/artwork/11062765_grafitti-1.jpg"
  },
  {
    img: 'https://static.wixstatic.com/media/029590_f913efa3afe7489794796d67143842f0~mv2.jpg/v1/fill/w_292,h_709,al_c,q_80,enc_auto/029590_f913efa3afe7489794796d67143842f0~mv2.jpg',
    title: 'Burger',
  },
  {
    img: 'https://i.ytimg.com/vi/LXjukR09HrI/maxresdefault.jpg',
    title: 'Camera',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Selfie_art.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXT9ilQCW7ac42tK1dgaAc_BeN1rP5pIscyQ&usqp=CAU',
    title: 'Hats',
  },
  {
    img: 'https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg',
    title: 'Honey',
  },
];
