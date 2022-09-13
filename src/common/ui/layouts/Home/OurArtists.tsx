import avatar from '@images/home/avatar.jpeg';
import mapImage from '@images/home/map.jpeg';
import { colors, devices, misc } from '@theme/baseTheme';
import { Translations } from '@util/localize';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

function OurArtists(): JSX.Element {
  const t = Translations();
  return (
    <OuterCtr>
      <Container>
        <LeftCtr>
          <MainDesc>{t.main_talents_desc}</MainDesc>
          <ArtistMsgCtr>
            <MsgTitle>{t.main_talents_card_salutation}</MsgTitle>
            <MsgDesc>{t.main_talents_card_desc}</MsgDesc>
            <ArtistProfile>
              <ArtistImgCtr>
                <Image src={avatar} alt='map' placeholder='blur' />
              </ArtistImgCtr>
              <ArtistDes>
                <ArtistTitle>{t.main_talents_card_name}</ArtistTitle>
                <ArtistPosition>{t.main_talents_card_position}</ArtistPosition>
              </ArtistDes>
            </ArtistProfile>
          </ArtistMsgCtr>
        </LeftCtr>
        <RightCtr>
          <Image src={mapImage} alt='map' placeholder='blur' />
        </RightCtr>
      </Container>
    </OuterCtr>
  );
}

export default OurArtists;

// Styles 👕🧦👗🧣🧥👔 -->

const OuterCtr = styled.div`
  background: ${colors.light_gray2};
  padding: 64px 8px;
  @media ${devices.minTablet} {
    padding: 64px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: ${misc.fullWidth}px;
  margin: 0 auto;
  flex-wrap: wrap;
  @media ${devices.minDesktopSM} {
    flex-wrap: nowrap;
  }
`;

const LeftCtr = styled.div`
  padding: 16px;
  width: 100%;
  flex: none;
  @media ${devices.minTablet} {
    width: 400px;
    padding: 0;
  }
  @media ${devices.minDesktopLG} {
    width: 420px;
  }
`;

const MainDesc = styled.div`
  color: ${colors.gray4};
`;

const RightCtr = styled.div`
  position: relative;
  flex: auto;
`;

const ArtistMsgCtr = styled.div`
  background: ${colors.white};
  box-shadow: 0px 10px 20px 0px rgb(0, 0, 0, 0.1);
  padding: 32px;
  margin-top: 16px;
`;

const MsgTitle = styled.div``;

const MsgDesc = styled.div``;

const ArtistProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
`;

const ArtistImgCtr = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
`;

const ArtistDes = styled.div``;

const ArtistTitle = styled.div`
  font-weight: 600;
`;

const ArtistPosition = styled.div`
  color: ${colors.gray3};
`;
