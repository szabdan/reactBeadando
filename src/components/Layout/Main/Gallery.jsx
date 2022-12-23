import React, { useState } from 'react';
//import image from "../../../assets/images/restaurant2.jpg";
import classes from "./Gallery.module.css";


const Gallery = () => {
    const [imgIndex, setImgIndex] = useState(2);

    const IndexIncreseHandler = () =>{
       setImgIndex( (imgIndex % 8)+1);
    }
    const IndexDecreaseHandler = () =>{
        setImgIndex (imgIndex === 1 ? 8 : imgIndex -1);
     }

    return (
        <div className={classes.center}>


            <div className={classes.left} onClick={IndexIncreseHandler}> &lt; </div>

            <div className={classes.right} onClick={IndexDecreaseHandler}> &gt;</div>
            
            <img className={classes.img} src={require("./../../../assets/images/restaurant"+imgIndex+".jpg")} alt="restaurant" />

        </div>
    );
}

export default Gallery;