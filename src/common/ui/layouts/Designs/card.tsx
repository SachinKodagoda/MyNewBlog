import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

import { sizes } from '@theme/baseTheme';

type TTitle = {
  headerFirstTitle?: string;
  headerSecondTitle?: string;
  footerFirstTitle?: string;
  footerSecondTitle?: string;
  footerButtonText?: string;
  type?: string;
};

type TProps = { imgSrc: string | StaticImageData; imgRatio?: string; title?: TTitle | null; imgHeight?: string };

type TText = { color: string; opacity: string; textTransform: string; fontWeight: string };
type TThemeFormat = {
  first: TText;
  second: TText;
  footer: {
    backgroundColor: string;
    borderColor: string;
    color: string;
    btnBackgroundColor: string;
    btnColor: string;
  };
};

function Card({ imgHeight = '400px', imgRatio = '4/5', imgSrc, title = null }: TProps): JSX.Element {
  const typeProps: TThemeFormat = {
    first: {
      color: '#fff',
      fontWeight: '600',
      opacity: '0.5',
      textTransform: 'uppercase',
    },
    footer: {
      backgroundColor: 'rgba(15, 17, 20, 0.4)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      btnBackgroundColor: 'rgba(148, 249, 240, 0.15)',
      btnColor: 'rgb(148, 249, 240)',
      color: '#fff',
    },
    second: {
      color: '#fff',
      fontWeight: '400',
      opacity: '1',
      textTransform: 'none',
    },
  };
  if (title?.type === 'type2') {
    typeProps.first.opacity = '1';
    typeProps.second.color = '#000';
    typeProps.first.fontWeight = '400';
    typeProps.second.fontWeight = '600';
    typeProps.footer.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    typeProps.footer.borderColor = 'rgba(0, 0, 0, 0.1)';
    typeProps.footer.color = '#fff';
    typeProps.footer.btnBackgroundColor = '#10253E';
    typeProps.footer.btnColor = '#B583E7';
  }
  return (
    <Container imgRatio={imgRatio} typeProps={typeProps} imgHeight={imgHeight}>
      <Image src={imgSrc} layout='fill' />
      <CardHeader>
        <HeaderFirstTitle>{title?.headerFirstTitle}</HeaderFirstTitle>
        <HeaderSecondTitle>{title?.headerSecondTitle}</HeaderSecondTitle>
      </CardHeader>
      {(title?.footerFirstTitle || title?.footerSecondTitle || title?.footerButtonText) && (
        <CardFooter>
          {(title?.footerFirstTitle || title?.footerSecondTitle) && (
            <FooterMiddle>
              <FooterFirstTitle>{title?.footerFirstTitle}</FooterFirstTitle>
              <FooterSecondTitle>{title?.footerSecondTitle}</FooterSecondTitle>
            </FooterMiddle>
          )}
          {title?.footerButtonText && <FooterRightBtn>{title?.footerButtonText}</FooterRightBtn>}
        </CardFooter>
      )}
    </Container>
  );
}

export default Card;

const CardFooter = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: auto;
  width: 100%;
  backdrop-filter: saturate(180%) blur(10px);
  display: flex;
  padding: 16px;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;

const FooterMiddle = styled.div``;

const FooterFirstTitle = styled.div`
  font-weight: 600;
`;

const FooterSecondTitle = styled.div``;

const FooterRightBtn = styled.div`
  border-radius: var(--xui-radii-pill);
  padding: 8px 16px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
`;

const CardHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  padding: ${sizes.md.px};
`;

const HeaderFirstTitle = styled.div`
  font-size: 0.9rem;
`;

const HeaderSecondTitle = styled.div`
  font-size: 1.2rem;
`;

const Container = styled.div<{ imgRatio: string; typeProps: TThemeFormat; imgHeight: string }>`
  height: auto;
  aspect-ratio: ${p => p.imgRatio};
  min-height: ${p => p.imgHeight};
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  ${HeaderFirstTitle} {
    color: ${p => p?.typeProps?.first?.color};
    text-transform: ${p => p?.typeProps?.first?.textTransform};
    opacity: ${p => p?.typeProps?.first?.opacity};
    font-weight: ${p => p?.typeProps?.first?.fontWeight};
  }
  ${HeaderSecondTitle} {
    color: ${p => p?.typeProps?.second?.color};
    text-transform: ${p => p?.typeProps?.second?.textTransform};
    opacity: ${p => p?.typeProps?.second?.opacity};
    font-weight: ${p => p?.typeProps?.second?.fontWeight};
  }
  ${CardFooter} {
    color: ${p => p.typeProps?.footer?.color};
    border-top: 1px solid ${p => p.typeProps?.footer?.borderColor};
    background-color: ${p => p.typeProps?.footer?.backgroundColor};
  }
  ${FooterRightBtn} {
    background: ${p => p.typeProps?.footer?.btnBackgroundColor};
    color: ${p => p.typeProps?.footer?.btnColor};
  }
`;
