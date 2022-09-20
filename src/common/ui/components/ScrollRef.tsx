import React from 'react';
import { Element } from 'react-scroll';

type TProps = { name: string };
function ScrollRef({ name }: TProps): JSX.Element {
  return <Element name={name} className='scrollingLink' />;
}

export default ScrollRef;
