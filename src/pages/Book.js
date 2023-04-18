import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Favorite } from '@mui/icons-material'
import { mobile } from "../responsive"

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection:"column" })}
`
const ImgContainer = styled.div`
    flex: 1;
    
`
const Image = styled.img`
    width: 60%;
    height: 80vh;
    margin-left: 10%;
    ${mobile({ height: "40vh" })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 400;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`
const Book = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src = "https://i0.wp.com/www.edutechlearners.com/wp-content/uploads/2017/08/The-C-Programming-Language-by-Kernighan-Ritchie-PDF.png?resize=211%2C300&ssl=1"></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>C Programming</Title>
                <Desc>
                The C Programming Language is a computer programming book written by Brian Kernighan and Dennis Ritchie,
                the latter of whom originally designed and implemented the language, 
                as well as co-designed the Unix operating system with which development of the language was closely intertwined. 
                The book was central to the development and popularization of the C programming language and is still widely read and used today.
                </Desc>
                <Icon>
                    <Favorite></Favorite>
                </Icon>
            </InfoContainer>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Book