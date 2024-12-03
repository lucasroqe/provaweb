import styled from "styled-components";

export default function HomePage() {
  
  return (
    <WrapperSld>
      Bibliografia
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
`;
