import styled from "styled-components";
import books from "../data/books.json";
import Menu from "../components/Menu";

export default function HomePage() {
  
  const totalDisciplinas = Array.from(new Set(books.map(book => book.course))).length;

  const totalLivros = books.length
  const years = books.map((book) => book.year);

  const livroVelho = Math.min(...years);
  const tituloLivroVelho = books.find((book) => book.year === livroVelho);

  const livroNovo = Math.max(...years);
  const tituloLivroNovo = books.find((book) => book.year === livroNovo);
  
  return (
    <WrapperSld>
      <h2>Bibliografia</h2>
      <Box>
        <h3>Total de disciplinas: {totalDisciplinas}</h3>
        <h3>Total de livros: {totalLivros}</h3>
        <h3>Livro mais velho: {tituloLivroVelho?.title} {livroVelho}</h3>
        <h3>Livro mais novo: {tituloLivroNovo?.title} {livroNovo}</h3>
      </Box>
      <Menu/>
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
  max-width: 500px;
  border-radius: 5px;
  gap: 3rem;
`;

const Box = styled.div`
  background-color: white;
  color: black;
  border-radius: 1rem;
  padding: 1rem;
`
