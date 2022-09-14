import NoData from '@layouts/menu/NoData';
import React from 'react';
import styled from 'styled-components';

function Settings(): JSX.Element {
  return (
    <Container>
      <NoData text='Coming soon' />
    </Container>
  );
}

export default Settings;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
