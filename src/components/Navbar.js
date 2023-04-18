import { Favorite } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive"

const Container = styled.div`
  height: 60px;
  background-color:rgb(90, 179, 40);
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 100px;
  padding: 2px;
`;
const Input = styled.input`
  width: 150px;
  border: 3px solid;
  border-radius: 5px;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  word-spacing: 20px;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  flex: 1;
  font-size: 20px;
  margin-left: 100px;
  justify-content: space-between;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Icon = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>Book World</Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search here..."></Input>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>
            <Link style={{textDecoration: 'none'}} to="BookList">Books </Link>
            <Link style={{textDecoration: 'none'}} to="Register">Register </Link>
            <Link style={{textDecoration: 'none'}} to="Login"> Login</Link>
          </MenuItem>

          <Icon>
            <Link to="Favorite">
              <Favorite></Favorite>
            </Link>
          </Icon>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
