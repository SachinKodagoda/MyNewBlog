import styled from 'styled-components';

function Home(): JSX.Element {
  return <Container>test</Container>;
}

export default Home;

const Container = styled.div`
  width: 100%;
  margin: auto;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
`;
