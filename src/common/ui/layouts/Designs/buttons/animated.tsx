import styled, { keyframes } from 'styled-components';

import Ripple2 from './otherRipple';
import Ripple from './ripple';

function Animated(): JSX.Element {
  return (
    <Container>
      <BtnType1 className='btn'>BTN01</BtnType1>
      <BtnType2 className='btn'>BTN02</BtnType2>
      <BtnType3 className='btn'>BTN03</BtnType3>
      <BtnType4 className='btn'>BTN04</BtnType4>
      <Ripple text='BTN05' />
      <Ripple2 text='BTN05' />
    </Container>
  );
}

export default Animated;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  padding: 16px;
  .btn {
    flex: none;
    padding: 0.4em 1.2em;
    text-align: center;
    transition: all 0.2s;
    cursor: pointer;
    font-size: 1.2rem;
    text-transform: uppercase;
    overflow: hidden;
    position: relative;
    user-select: none;
  }
`;

const BtnType1 = styled.div`
  color: #000;
  border: 0.1em solid #000;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    background: #fff;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -30px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
  &:hover {
    color: #fff;
    background-color: #000;
  }
`;

const BtnType2 = styled.div`
  color: #fff;
  background-color: green;
  border-radius: 10px;
  box-shadow: 0 9px #092d0b;
  &:active {
    box-shadow: 0 5px #092d0b;
    transform: translateY(4px);
  }
  &:hover {
    color: #000;
    background-color: #06c71c;
  }
`;

const BtnType3 = styled.div`
  color: #fff;
  background-color: teal;
  border-radius: 15px;
  line-height: 2;
  height: 60px;
  box-shadow: inset 0 -0.9em 0 -0.35em rgba(0, 0, 0, 0.17);
  &:active {
    transform: translateY(-8px);
  }
`;

const BtnType4 = styled.div`
  color: #fff;
  background-color: #ff4136;
  border: 4px solid #ff851b;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.6);
  &:after {
    content: '';
    background: #f1f1f1;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -100px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
    transform: rotate(45deg);
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
  &:hover {
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.6), 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
const ripple = keyframes`
 to {
    transform: scale(2.5);
    opacity: 0;
  }
`;

const BtnType5 = styled.div`
  color: #fff;
  border: 0.1em solid #120b1e;
  background-color: #001f3f;
  position: relative;
  overflow: hidden;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  &.ripple {
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    transform: scale(0);
    animation: ${ripple} 0.6s linear;
  }
`;
