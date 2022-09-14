import blogging from '@images/blogging.svg';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  text: string;
  path?: string;
};

function NoData({ text = '', path = blogging }: TProps): JSX.Element {
  return (
    <Container>
      <div className='InnerCtr'>
        <Image src={path} alt='noData' layout='fill' />
      </div>
      {text}
    </Container>
  );
}

export default NoData;

const Container = styled.div`
  font-weight: 700;
  font-size: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  .InnerCtr {
    width: 50%;
    height: 50%;
    position: relative;
  }
`;
