import FacebookIcon from '@svg/feather/FacebookIcon';
import InstagramIcon from '@svg/feather/InstagramIcon';
import YoutubeIcon from '@svg/feather/YoutubeIcon';
import { colors, misc } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

function Footer(): JSX.Element {
  return (
    <Container>
      {/* <FooterItemCtr>
        <AboutArea>
          <FooterMiniItemTitle>About DAVINCI</FooterMiniItemTitle>
          <FooterMiniItem>Galleries</FooterMiniItem>
          <FooterMiniItem>Request</FooterMiniItem>
          <FooterMiniItem>Prices</FooterMiniItem>
          <FooterMiniItem>How It Works</FooterMiniItem>
          <FooterMiniItem>About Us</FooterMiniItem>
        </AboutArea>
        <MoreInformation>
          <FooterMiniItemTitle>About DAVINCI</FooterMiniItemTitle>
          <FooterMiniItem>Galleries</FooterMiniItem>
          <FooterMiniItem>Request</FooterMiniItem>
          <FooterMiniItem>Prices</FooterMiniItem>
          <FooterMiniItem>How It Works</FooterMiniItem>
          <FooterMiniItem>About Us</FooterMiniItem>
        </MoreInformation>
      </FooterItemCtr> */}
      <SocialMedia>
        <SocialCtr>
          <FacebookIcon className='socialIcon' />
        </SocialCtr>
        <SocialCtr>
          <YoutubeIcon className='socialIcon' />
        </SocialCtr>
        <SocialCtr>
          <InstagramIcon className='socialIcon' />
        </SocialCtr>
      </SocialMedia>
      <CopyRight>Copyright &copy; 2022 Wizard Of Digital Arts</CopyRight>
    </Container>
  );
}

export default Footer;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  background: ${colors.light_gray2};
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// const FooterItemCtr = styled.div`
//   display: flex;
//   gap: 32px;
//   padding: 32px 0;
// `;

// const AboutArea = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
// `;

// const MoreInformation = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
// `;

// const FooterMiniItemTitle = styled.div`
//   color: ${colors.dark_red};
// `;

// const FooterMiniItem = styled.div``;

const SocialMedia = styled.div`
  max-width: ${misc.fullWidth}px;
  margin: 0 auto;
  display: flex;
  gap: 10px;
`;

const SocialCtr = styled.div`
  border-radius: 50%;
  background: ${colors.white};
  border: 1px solid ${colors.black};
  width: 40px;
  height: 40px;
  color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  .socialIcon {
    width: 75%;
    height: 75%;
  }
`;

const CopyRight = styled.div`
  padding: 8px 0 0;
  max-width: ${misc.fullWidth}px;
  margin: 0 auto;
  text-align: center;
`;
