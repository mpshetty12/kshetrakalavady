import {React, useState, useEffect } from "react"
import {Col, Card} from 'antd'
import VideoDataService from '../../services/videos.services'

const {Meta} = Card

const VideoCard = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
      getVideos();
    }, []);
     
    const getVideos = async() => {
      const data = await VideoDataService.getAllVideos()
      console.log(data.docs)
      setVideos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    return (
      <div>
         {videos.map((doc,index) => {
          return(
            <video width="640" height="360" controls>
                <source src={doc.videourl} type="video/mp4"></source>
            </video>
          ) 
        })}
      </div>
  )
}

export default VideoCard