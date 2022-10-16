import styled, { createGlobalStyle } from 'styled-components';

function Parallax(): JSX.Element {
  return (
    <>
      <GlobalCss />
      <Container>
        <img src='/images/parallax/parallax0.png' alt='img' className='img1' />
        <img src='/images/parallax/parallax1.png' alt='img' className='img2' />
        <img src='/images/parallax/parallax2.png' alt='img' className='img2' />
        <img src='/images/parallax/parallax3.png' alt='img' className='img2' />
        <img src='/images/parallax/parallax4.png' alt='img' className='img2' />
        <img src='/images/parallax/parallax5.png' alt='img' className='img2' />
        <img src='/images/parallax/parallax6.png' alt='img' className='img2' />
        <img src='/images/parallax/parallax7.png' alt='img' className='img2' />
        <img src='/images/parallax/parallax8.png' alt='img' className='img2' />
      </Container>
    </>
  );
}

export default Parallax;

const GlobalCss = createGlobalStyle`
  html,body,#root{
    background: #210002;
    height: 100%;
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: #210002;
  overflow: hidden;
  img {
    display: block;
    width: auto;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  /* .img2 {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
  } */
`;
