import React from 'react'
import {useEffect, useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import GridCard from './GridCard'
import { Row } from 'antd';
import ImageDataService from '../../services/images.services'


const Clicks = ({openModal,setOpenModal}) => {

 

  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>TEMPLE CLICKS</Title>
        <Desc>
          All images, videos and songs will be here.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'images' ?
            <ToggleButton active value="images" onClick={() => setToggle('images')}>IMAGES</ToggleButton>
            :
            <ToggleButton value="images" onClick={() => setToggle('images')}>IMAGES</ToggleButton>
          }
          <Divider />
          {toggle === 'videos' ?
            <ToggleButton active value="videos" onClick={() => setToggle('videos')}>VIDEOS</ToggleButton>
            :
            <ToggleButton value="videos" onClick={() => setToggle('videos')}>VIDEOS</ToggleButton>
          }
          <Divider />
          {toggle === 'songs' ?
            <ToggleButton active value="songs" onClick={() => setToggle('songs')}>SONGS</ToggleButton>
            :
            <ToggleButton value="songs" onClick={() => setToggle('songs')}>SONGS</ToggleButton>
          }
        </ToggleButtonGroup>

          <Row gutter={[20, 20]}>
         
            <GridCard></GridCard>
        
          </Row>
     
      </Wrapper>
    </Container>
  )
}

export default Clicks