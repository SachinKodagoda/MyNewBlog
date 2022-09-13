import NoData from '@layouts/menu/NoData';
import React from 'react';
import styled from 'styled-components';

const settings = (): JSX.Element => {
  return (
    <Container>
      <NoData text='Coming soon' />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default settings;
