import NoData from '@layouts/menu/NoData';
import { TRoute } from '@ts/common';
import React from 'react';
import styled from 'styled-components';

type TProps = { rType: TRoute };
function Support({ rType }: TProps): JSX.Element {
  return (
    <Container>
      <NoData text='Coming soon' />
    </Container>
  );
}

export default Support;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
