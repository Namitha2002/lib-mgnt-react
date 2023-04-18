import styled from "styled-components";
import { popularProducts } from "../data";
import Book from "./Book";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Books = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Book item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Books;