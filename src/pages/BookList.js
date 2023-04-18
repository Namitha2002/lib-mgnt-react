import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Books from '../components/Books'
import Footer from '../components/Footer'
import { mobile } from "../responsive"

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`
const Option = styled.option`

`
const BookList = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Title>Title</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter:</FilterText>
                <Select>
                    <Option disabled selected>
                        Subject
                    </Option>
                    <Option>Maths</Option>
                    <Option>Physics</Option>
                    <Option>Chemistry</Option>
                    <Option>Computer Science</Option>
                    <Option>Mechanical</Option>
                    <Option>Civil</Option>
                    <Option>IT</Option>
                    <Option>Fashion</Option>
                    <Option>Novels</Option>
                    <Option>Tamil</Option>   
                </Select>
                <Select>
                    <Option disabled selected>
                        Author
                    </Option>
                    <Option>Dennis Ritchie</Option>
                    <Option>James Moore</Option>
                    <Option>Chand</Option>
                    <Option>J K Sharma</Option>
                    <Option>Paul Cardle</Option>
                    <Option>Kalki</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Books/>
        <Footer/>
    </Container>
  )
}

export default BookList