import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive"

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex: 3;
`;
const Book = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const Image = styled.img`
    width: 200px; 
    justify-content: space-between;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin-left: 20%;
`
const BookName = styled.span``
const BookAuthor = styled.span``

const Favorite = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Favorites</Title>
        <Top>
          <TopButton>CONTINUE READING</TopButton>
          <TopTexts>
            <TopText>Your Favorites(2)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Book>
                <Image src="https://www.tamilnovelspdf.com/wp-content/uploads/2022/03/ponniyin-selvan-part-1-to-5-original-imafvm3pdy4zyypr.jpeg"></Image>
                <Details>
                    <h2>Book Details</h2>
                    <BookName><b>Book Name:</b> Ponniyin Selvan</BookName>
                    <BookAuthor><b>Author:</b> Kalki</BookAuthor>
                </Details>
            </Book>
            <br></br>
            <Book>
                <Image src="https://libribook.com/Images/java-for-beginners-guide-to-learn-java-and-java-programming-1st-editio.jpg"></Image>
                <Details>
                    <h2>Book Details</h2>
                    <BookName><b>Book Name:</b> Java</BookName>
                    <BookAuthor><b>Author:</b> Josh Thompsons</BookAuthor>
                </Details>
            </Book>
          </Info>
          
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Favorite;