import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

import { sizes } from '@theme/baseTheme';

type TProps = { imgSrc: string | StaticImageData };
function Card({ imgSrc }: TProps): JSX.Element {
  return (
    <Container>
      <Image src={imgSrc} layout='fill' />
      <CardHeader>
        <HeaderFirstTitle>New</HeaderFirstTitle>
        <HeaderSecondTitle>Acme Camera</HeaderSecondTitle>
      </CardHeader>
      <CardFooter>
        {/* <FooterLeft>d</FooterLeft> */}
        <FooterMiddle>
          <FooterFirstTitle>Available Soon.</FooterFirstTitle>
          <FooterSecondTitle>Get Notified.</FooterSecondTitle>
        </FooterMiddle>
        <FooterRightBtn>NOTIFY ME</FooterRightBtn>
      </CardFooter>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  height: 400px;
  aspect-ratio: 4/5;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const CardFooter = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: auto;
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: saturate(180%) blur(10px);
  display: flex;
  padding: 16px;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  color: #000;
`;

const FooterLeft = styled.div``;

const FooterMiddle = styled.div``;

const FooterFirstTitle = styled.div`
  font-weight: 600;
`;

const FooterSecondTitle = styled.div``;

const FooterRightBtn = styled.div`
  border-radius: var(--xui-radii-pill);
  background: var(--xui-colors-secondaryLight);
  color: var(--xui-colors-secondaryLightContrast);
  padding: 8px 16px;
  text-transform: uppercase;
`;

const CardHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  padding: ${sizes.md.px};
`;

const HeaderFirstTitle = styled.div`
  text-transform: uppercase;
  opacity: 0.5;
`;

const HeaderSecondTitle = styled.div``;
