import styled from 'styled-components';

function Ripple(): JSX.Element {
  return (
    <Container>
      <Title>Ripple Effect</Title>
    </Container>
  );
}

export default Ripple;

const Container = styled.div`
  background: #046699;
  color: #fff;
  width: 100vw;
  aspect-ratio: 9/16;
`;

const Title = styled.div`
  font-weight: 900;
  width: 100%;
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
