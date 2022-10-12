import styled from 'styled-components';

function Special(): JSX.Element {
  return (
    <Container>
      <SpecialBtn1>
        <div className='innerfix'>BTN07</div>
      </SpecialBtn1>
      <SpecialBtn2>BTN02</SpecialBtn2>
    </Container>
  );
}

export default Special;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
`;

const SpecialBtn1 = styled.div`
  flex: none;
  border: 0.1em solid #fff;
  background-color: #120b1e;
  color: #fff;
  position: relative;
  padding: 1rem 0;
  width: 15rem;
  border-radius: 3.75rem;
  line-height: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  border: 1px solid #012880;
  background-image: linear-gradient(-180deg, #ff89d6 0%, #c01f9e 100%);
  box-shadow: 0 1rem 1.25rem 0 rgba(22, 75, 195, 0.5), 0 -0.25rem 1.5rem rgba(110, 15, 155, 1) inset,
    0 0.75rem 0.5rem rgba(255, 255, 255, 0.4) inset, 0 0.25rem 0.5rem 0 rgba(180, 70, 207, 1) inset;
  & > .innerfix {
    color: transparent;
    text-align: center;
    background-image: linear-gradient(0deg, #ee82da 0%, #fefafd 100%);
    -webkit-background-clip: text;
    background-clip: text;
    filter: drop-shadow(0 2px 2px hsla(290, 100%, 20%, 1));
  }
  &::before {
    content: '';
    display: block;
    height: 0.25rem;
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 7.5rem);
    background: #fff;
    border-radius: 100%;
    opacity: 0.7;
    background-image: linear-gradient(
      -270deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 20%,
      #ffffff 80%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  &::after {
    content: '';
    display: block;
    height: 0.25rem;
    position: absolute;
    bottom: 0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 7.5rem);
    background: #fff;
    border-radius: 100%;
    filter: blur(1px);
    opacity: 0.05;
    background-image: linear-gradient(
      -270deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 20%,
      #ffffff 80%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const SpecialBtn2 = styled.div`
  flex: none;
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
  padding: 0.7em 1.7em;
  border-radius: 0.2em;
  background-color: #ccc;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17), inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15),
    inset 0 0 0em 0.05em rgba(0, 0, 0, 0.12);
`;
