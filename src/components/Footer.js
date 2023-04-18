import styled from "styled-components";
import { Facebook, Instagram, Pinterest, Twitter, Room, Mail, Phone } from "@mui/icons-material";
import { mobile } from "../responsive"

const Container = styled.div`
  display: flex;
  background-color: black;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
    color: white;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: white;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: white;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  color: white;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: white;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Book World</Logo>
        <Desc>
          As book reading is good practice, you can use our site for it.  
          Here we provide a wide range og books, Novel, Magzines etc.
          written by various Authors and Publication.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter/>
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Favorite</ListItem>
          <ListItem>Books</ListItem>
          <ListItem>Authors</ListItem>
          <ListItem>Novels</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 62 Mullai Nagar, Salem 636005
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +91 9442470773
        </ContactItem>
        <ContactItem>
          <Mail style={{marginRight:"10px"}} /> bookWorld@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;