import React, { useEffect, useState } from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import DescriptionDataService from '../../services/descriptions.services'


const HeroSection = () => {

    const [descriptions, setDescriptions] = useState([]);

    useEffect(() => {
        getDescriptions();
    }, []);
   
    const getDescriptions = async() => {
        const data = await DescriptionDataService.getAllDescriptions();
        console.log(data.docs)
        setDescriptions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>{Bio.name}</Title>
                        <TextLoop>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.loopname, 
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        {
                            descriptions.map((doc,index) => {
                            return(
                                <SubTitle key={doc.id}>
                                {doc.description}
                                </SubTitle>
                            ) 
                        })}
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection