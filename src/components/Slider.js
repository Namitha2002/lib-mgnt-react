import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { useNavigate } from 'react-router-dom'
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    margin-top: 20px;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props)=> props.direction === "left" && "10px"};
    right: ${(props)=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex * - 100}vw);
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props)=>props.bg};
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    margin-left: 50px;
`
const Title = styled.h1`
    font-size: 40px;
`
const Button = styled.button`
    padding: 5px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`
const Image = styled.img`
    height: 80%;
    margin-left: 150px;
`

const Slider = () => {
    const navigate = useNavigate();
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1: 3);
        }
        else{
            setSlideIndex(slideIndex < 3 ? slideIndex + 1: 0);
        }
    }
    return (
    <Container>
        <Arrow direction = "left" onClick={()=>handleClick("left")}>
            <ArrowBackIos></ArrowBackIos>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map((item) => (
                <Slide bg = {item.bg} key = {item.id}>
                <ImgContainer>
                    <Image src={item.img}></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Button onClick={()=>navigate('pages/Books.js')}>View</Button>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        
        <Arrow direction = "right" onClick={()=>handleClick("right")}>
            <ArrowForwardIos></ArrowForwardIos>
        </Arrow>
    </Container>
  )
}

export default Slider