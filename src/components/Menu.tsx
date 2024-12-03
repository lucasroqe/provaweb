import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Menu() {
  return (
    <div>
      <Button>
        <Link to="books">Iniciar</Link>
      </Button>
    </div>
  );
}

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d3bdb;
  color: #fff;
  border-radius: 8px;
  padding: 0.5rem;
  width: 6rem;
  
  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #fff;
      text-decoration: none;
    }

    &:visited,
    &:active {
      color: #fff;
      text-decoration: none;
    }
  }
`;
