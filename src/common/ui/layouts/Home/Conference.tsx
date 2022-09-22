import styled from 'styled-components';

import ScrollRef from '@components/ScrollRef';
import { colors, fonts, sizes } from '@theme/baseTheme';

function Conference(): JSX.Element {
  return (
    <Container>
      <ScrollRef name='Conference' />
      <ConferenceBg />
      <ConferenceBody>
        <Title>OUR CONFERENCE CENTER</Title>
        <SubTitle>Check it now</SubTitle>
        <ConferenceBodyBtn>View more details</ConferenceBodyBtn>
      </ConferenceBody>
    </Container>
  );
}

export default Conference;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  position: relative;
  width: calc(100% - ${sizes.xl.px});
  height: 400px;
  background: ${colors.themeRed};
  color: ${colors.white};
  text-align: center;
  background: url(images/home/conference.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  margin: 0 ${sizes.md.px};
`;

const ConferenceBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${colors.transparent_black5};
`;

const ConferenceBody = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: ${fonts.size.l3};
  display: flex;
  flex-direction: column;
  gap: ${sizes.md.px};
`;

const ConferenceBodyBtn = styled.div`
  border: 2px solid ${colors.white};
  padding: ${sizes.md.px};
  font-weight: ${fonts.weight.bold};
  margin: auto;
  cursor: pointer;
  width: 300px;
  font-size: ${fonts.size.l2};
`;

const Title = styled.div`
  font-size: ${fonts.size.l3};
`;

const SubTitle = styled.div`
  font-size: ${fonts.size.l2};
`;
