import styled from "styled-components";
import books from "../data/books.json";

export default function BookPage() {
  return (
    <WrapperSld>
      {books.map((book, id) => (
        <BookItem>      
          <h2>{id+1} - {book.title}</h2>
          <p>{book.course}</p>
          <p>{book.author}</p>
          <p>{book.year}</p>
        </BookItem>
      ))}
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #b0c4de;
  /* max-width: 500px; */
  border-radius: 5px;
`;


const BookItem = styled.div`
  background-color: white;
  width: 30rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  padding: 1rem;
`;
