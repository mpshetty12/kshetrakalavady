import {React, useState, useEffect } from "react"
import {Col, Card} from 'antd'
import ImageDataService from '../../services/images.services'

const {Meta} = Card

const GridCard = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
      getImages();
    }, []);
     
    const getImages = async() => {
      const data = await ImageDataService.getAllImages()
      console.log(data.docs)
      setImages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    return (
      <div>
         {images.map((doc,index) => {
          return(
             <img src={doc.imgurl} width="250" height="250"></img>
          ) 
        })}
      </div>
  )
}

export default GridCard