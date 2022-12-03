// IMPORT useState
import React, {useState}from "react";
import './styles.css';
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from './imageData.js';


export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
   // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  const handleClick = (img) => {
    setBigImage(img);
  };



  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
    // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
  const images = imagesArr.map((image, index) => {
    return (
      <img className="thumb"
        key={index}
        src={image.img}
        alt={image.city}
        onClick={() => handleClick(image.img)}
   //or 
  //add a style to the image tag

        style = {{ border: bigImage === image.img ? "8px solid purple" : "" }}
      />
    );
  });

  //things to try for border still
  // if image is selected is equal to true 
  //apply a classname
  // in css give that classname a border 
  // if selected is equal to false 
  // remove classname


  //OR
 // if Big image src is equal to thumbnail img src
  // put a border around the thumbnail

  


 return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {images} 
        </div>
        {<img src={bigImage} /> }
      </div>
    </div>
  );
}
