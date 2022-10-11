import styled from 'styled-components';

function Shapes(): JSX.Element {
  return (
    <Container>
      <Btn className='shape_1'>BTN01</Btn>
      <Btn className='shape_2'>BTN02</Btn>
      <Btn className='shape_3'>BTN03</Btn>
      <Btn className='shape_4'>BTN04</Btn>
      <Btn className='shape_5'>BTN05</Btn>
      <Btn className='shape_6'>BTN06</Btn>
      <Btn className='shape_7'>BTN07</Btn>
      <Btn className='shape_8'>BTN08</Btn>
      <Btn className='shape_9'>BTN09</Btn>
      <Btn className='shape_10'>BTN10</Btn>
      <Btn className='shape_11'>BTN11</Btn>
      <Btn className='shape_12'>BTN12</Btn>
      <Btn className='shape_13'>
        <span>BTN13</span>
      </Btn>
      <Btn className='shape_14'>
        <span>BTN14</span>
      </Btn>
      <Btn className='shape_15'>BTN15</Btn>
      <Btn className='shape_16'>BTN16</Btn>
    </Container>
  );
}

export default Shapes;

const Container = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #000;
  border: 0.1em solid #000;
  padding: 0.4em 1.2em;
  font-weight: 300;
  transition: all 0.2s;
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: uppercase;

  &.shape_2 {
    border-radius: 6px;
  }
  &.shape_3 {
    border-radius: 25%;
  }
  &.shape_4 {
    border-radius: 100em / 100em;
  }
  &.shape_5 {
    border-radius: 100em / 50em;
  }
  &.shape_6 {
    border-radius: 50px 50px 0 0;
  }
  &.shape_7 {
    border-radius: 0 10px 0 10px;
  }
  &.shape_8 {
    border-radius: 10px 0 10px 0;
  }
  &.shape_9 {
    border-radius: 50px 0 0 50px;
  }
  &.shape_10 {
    border-radius: 0 50px 50px 0;
  }
  &.shape_11 {
    border-radius: 0 50px 0 50px;
  }
  &.shape_12 {
    border-radius: 50px 0 50px 0;
  }
  &.shape_13 {
    margin: 0 10px;
    transform: skew(20deg);
    & > span {
      transform: skew(-20deg);
      display: inline-block;
    }
  }
  &.shape_14 {
    margin: 0 10px;
    transform: skew(-20deg);
    & > span {
      transform: skew(20deg);
      display: inline-block;
    }
  }
  &.shape_15 {
    border-radius: 0 0 50px 50px;
  }
  &.shape_16 {
    width: 80px;
    height: 80px;
    line-height: 80px;
    padding: 0;
    border-radius: 100%;
  }
`;
