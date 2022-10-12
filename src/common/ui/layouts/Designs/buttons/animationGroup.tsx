import styled, { keyframes } from 'styled-components';

function AnimationGroup(): JSX.Element {
  return (
    <Container>
      <div className='btn btn1'>BTN01</div>
      <div className='btn btn2'>BTN02</div>
      <div className='btn btn3'>BTN03</div>
      <div className='btn btn4'>BTN04</div>
    </Container>
  );
}

export default AnimationGroup;

const bouncy = keyframes`
  0% {
    top: 0;
  }
  40% {
    top: 0;
  }
  43% {
    top: -0.9em;
  }
  46% {
    top: 0;
  }
  48% {
    top: -0.4em;
  }
  50% {
    top: 0;
  }
  100% {
    top: 0;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 8px;
  .btn {
    flex: none;
    padding: 0.4em 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    cursor: pointer;
    font-size: 1.2rem;
    text-transform: uppercase;
    overflow: hidden;
    position: relative;
    user-select: none;
    border: 0.1em solid #120b1e;
    color: #000;
    flex: none;
  }
  .btn1 {
    animation: ${bouncy} 5s infinite linear;
    animation-delay: 0.07s;
    position: relative;
  }
  .btn2 {
    animation: ${bouncy} 5s infinite linear;
    animation-delay: 0.07s;
    position: relative;
  }
  .btn3 {
    animation: ${bouncy} 5s infinite linear;
    animation-delay: 0.14s;
    position: relative;
  }
  .btn4 {
    animation: ${bouncy} 5s infinite linear;
    animation-delay: 0.21s;
    position: relative;
  }
`;
