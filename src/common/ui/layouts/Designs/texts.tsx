import styled from 'styled-components';

function Texts(): JSX.Element {
  return (
    <Container>
      <First>
        It&apos;s <span>Great.</span>
      </First>
      <Second>Beautiful.</Second>
      <Third>Nice.</Third>
    </Container>
  );
}

export default Texts;

const Container = styled.div`
  padding: 30px;
`;

const First = styled.div`
  font-size: 40px;
  font-weight: 900;
  display: flex;
  gap: 10px;
  span {
    background-image: linear-gradient(rgb(0, 183, 250) 25%, rgb(1, 207, 234) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const Second = styled.h1`
  font-size: 40px;
  font-weight: 900;
  background-image: linear-gradient(rgb(255, 28, 247) 25%, rgb(178, 73, 248) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Third = styled.div`
  font-size: 40px;
  font-weight: 900;
  background-image: linear-gradient(rgb(243, 101, 52) 25%, rgb(246, 159, 39) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
