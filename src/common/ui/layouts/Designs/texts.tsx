import styled from 'styled-components';

function Texts(): JSX.Element {
  return (
    <Container>
      <First>
        It&apos;s <span>Great.</span>
      </First>
      <Second>
        Beautiful <span>Code.</span>
      </Second>
      <Third>Nice.</Third>
      <Forth>
        It&apos;s <span>Testing.</span>
      </Forth>
      <Green>
        It&apos;s <span>Green.</span>
      </Green>
      <Red>
        It&apos;s <span>Read.</span>
      </Red>
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
  span {
    color: white;
  }
`;

const Third = styled.div`
  font-size: 40px;
  font-weight: 900;
  background-image: linear-gradient(rgb(243, 101, 52) 25%, rgb(246, 159, 39) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Forth = styled.div`
  font-size: 40px;
  font-weight: 900;
  display: flex;
  gap: 10px;
  span {
    background-image: linear-gradient(rgb(94, 162, 239) 25%, rgb(0, 114, 245) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const Green = styled.div`
  font-size: 40px;
  font-weight: 900;
  display: flex;
  gap: 10px;
  span {
    background-image: linear-gradient(rgb(111, 238, 141) 25%, rgb(23, 201, 100) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const Red = styled.div`
  font-size: 40px;
  font-weight: 900;
  display: flex;
  gap: 10px;
  span {
    background-image: linear-gradient(rgb(255, 78, 205) 25%, rgb(242, 19, 97) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;
