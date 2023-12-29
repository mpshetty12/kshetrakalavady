import {React, useState, useEffect } from "react"
import {Col, Card} from 'antd'
import SongsDataService from '../../services/songs.services'

const {Meta} = Card

const SongCard = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
      getSongs();
    }, []);
     
    const getSongs = async() => {
      const data = await SongsDataService.getAllSongs()
      console.log(data.docs)
      setSongs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    return (
      <div>
         {songs.map((doc,index) => {
          return(
            <audio controls>
                <source src={doc.songurl} type="audio/mp3"></source>
            </audio>
          ) 
        })}
      </div>
  )
}

export default SongCard