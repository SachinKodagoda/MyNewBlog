import styled from 'styled-components';

import BigCross from '@components/Buttons/BigCross';

function Home(): JSX.Element {
  const wow = {
    a: 'dam',
    b: 'hi',
  };
  const { a, b } = wow;
  return (
    <Container>
      {b} {a}
      <BigCross />
    </Container>
  );
}

export default Home;

const Container = styled.div``;
