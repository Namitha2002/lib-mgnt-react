import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
`
const Image = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`
const Info = styled.div`
    flex: 1;
`
const Title = styled.h1`
    margin-bottom: 20px;
`
const Button = styled.button`
    padding: 5px;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
`
const CategoryItem = ({ item }) => {
  return (
    <Container>
        <Image src={item.img}></Image>
        <Info>
            <Title>{item.title}</Title>
            <Button>View</Button>
        </Info>
        
    </Container>
  )
}

export default CategoryItem