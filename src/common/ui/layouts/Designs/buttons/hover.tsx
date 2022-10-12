import styled from 'styled-components';

function Hover(): JSX.Element {
  return (
    <Container>
      <Btn1>BTN01</Btn1>
      <Btn2>BTN02</Btn2>
      <Btn3>BTN03</Btn3>
      <Btn4>BTN04</Btn4>
      <Btn5>BTN05</Btn5>
      <Btn6>BTN06</Btn6>
      <Btn7>
        <div className='innerfix'>BTN07</div>
      </Btn7>
      <Btn8>BTN08</Btn8>
      <Btn9>BTN09</Btn9>
      <Btn10>BTN10</Btn10>
      <Btn11>BTN11</Btn11>
      <Btn12>BTN12</Btn12>
      <Btn13>BTN13</Btn13>
      <Btn14>BTN14</Btn14>
      <Btn15>BTN15</Btn15>
      <Btn16>
        <span>OK</span>
        <span>BUTTON11</span>
      </Btn16>
    </Container>
  );
}

export default Hover;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 8px;
`;

const Btn1 = styled.div`
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
  position: relative;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: '';
    width: 0;
    left: 0;
    bottom: 0;
    height: 0.1em;
    background-color: #000;
  }
  &:hover {
    &:after {
      width: 100%;
    }
  }
`;
const Btn2 = styled.div`
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
  position: relative;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: '';
    width: 0;
    left: 50%;
    bottom: 0;
    height: 0.1em;
    background-color: #000;
  }
  &:hover {
    &:after {
      width: 100%;
      left: 0;
    }
  }
`;
const Btn3 = styled.div`
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
  position: relative;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: '';
    width: 0;
    right: 0;
    bottom: 0;
    height: 0.1em;
    background-color: #000;
  }
  &:hover {
    &::after {
      right: auto;
      left: 0;
      width: 100%;
    }
  }
`;
const Btn4 = styled.div`
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
  position: relative;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: '';
    width: 100%;
    left: 0;
    top: 0;
    height: 0.1em;
    background-color: #000;
  }
  &:hover {
    &:after {
      bottom: auto;
      top: 100%;
    }
  }
`;
const Btn5 = styled.div`
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
  position: relative;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: '';
    width: 100%;
    left: 0;
    bottom: 0;
    height: 0.1em;
    background-color: #000;
  }
  &:hover {
    &:after {
      bottom: 100%;
      top: auto;
    }
  }
`;
const Btn6 = styled.div`
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
  position: relative;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: '';
    width: 100%;
    left: 0;
    top: -0.5em;
    height: 0.1em;
    background-color: #000;
  }
  &:hover {
    &:after {
      top: 100%;
      bottom: auto;
    }
  }
`;
const Btn7 = styled.div`
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
  position: relative;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: '';
    width: 0;
    left: -12%;
    bottom: -12%;
    background-color: #0093ff;
    height: 140%;
  }
  &:hover {
    &:after {
      transform: skewX(15deg);
      width: 120%;
      right: auto;
    }
    & > .innerfix {
      position: relative;
      z-index: 1;
      color: #fff;
    }
  }
`;
const Btn8 = styled.div`
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
  position: relative;
  transition: 0.5s;
  &:hover {
    border-radius: 100em / 100em;
  }
`;
const Btn9 = styled.div`
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
  position: relative;
  &:hover {
    transform: scale(1.1);
  }
`;
const Btn10 = styled.div`
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
  position: relative;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: '';
    width: 0.1em;
    height: 100%;
    top: 0;
    background-color: #000;
    left: -0.5em;
    transform: skewX(15deg);
  }
  &:hover {
    &:after {
      left: 105%;
      right: auto;
    }
  }
`;
const Btn11 = styled.div`
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
  position: relative;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: '';
    width: 0.1em;
    height: 100%;
    top: 0;
    background-color: #000;
    left: -0.5em;
  }
  &:hover {
    &:after {
      left: 100%;
      right: auto;
    }
  }
`;
const Btn12 = styled.div`
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
  position: relative;
  &:hover {
    box-shadow: inset 0px 0px 0px 3px #000;
  }
`;
const Btn13 = styled.div`
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
  position: relative;
  &:hover {
    box-shadow: 0px 0px 0px 3px #000;
  }
`;
const Btn14 = styled.div`
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
  position: relative;
  &:hover {
    border: 0.1em dashed #000;
  }
`;
const Btn15 = styled.div`
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
  position: relative;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Btn16 = styled.div`
  border: none;
  width: 100px;
  padding: 0.35em 1.2em;
  margin: 0.5em 0.5em;
  font-weight: 300;
  text-align: center;
  cursor: pointer;
  font-size: 15px;
  position: relative;
  width: 100%;
  max-width: 200px;
  height: 40px;
  background: #120b1e;
  transform: translate3d(0px, 0%, 0px);
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition-delay: 0.6s;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0093ff;
    border-radius: 50% 50% 0 0;
    transform: translateY(100%) scaleY(0.5);
    transition: all 0.6s ease;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #120b1e;
    border-radius: 0;
    transform: translateY(0) scaleY(1);
    transition: all 0.6s ease;
    text-transform: uppercase;
  }
  & > span {
    position: absolute;
    z-index: 1;
    width: 100%;
    text-align: center;
    left: 0;
    top: 0;
    transition: transform 0.5s ease;
    &:first-child {
      color: #fff;
      transform: translateY(40px);
    }
    &:last-child {
      color: #fff;
      transform: translateY(6px);
    }
  }
  &:hover {
    background: #0093ff;
    transition: background 0.2s linear;
    transition-delay: 0.6s;
    &:after {
      border-radius: 0 0 50% 50%;
      transform: translateY(-100%) scaleY(0.5);
      transition-delay: 0;
    }
    &:before {
      border-radius: 0;
      transform: translateY(0) scaleY(1);
      transition-delay: 0;
    }
    & > span {
      &:first-child {
        transform: translateY(6px);
      }
      &:last-child {
        transform: translateY(-24px);
      }
    }
  }
`;
