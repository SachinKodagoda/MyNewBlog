import React from 'react';
import styled from 'styled-components';

function Footer(): JSX.Element {
  return (
    <Container>
      <ContainerInner>
        <FBox>
          <FItem>
            <FItemHead>TWIN SHIELD RESORT</FItemHead>
            <FItemBody>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts.
            </FItemBody>
          </FItem>
          <FItem>
            <FItemHead>Opening Hours</FItemHead>
            <FItemBody>
              <FDateItem>
                Monday:<FRangeItem>08-00 - 22:00</FRangeItem>
              </FDateItem>
              <FDateItem>
                Tuesday:<FRangeItem>08-00 - 22:00</FRangeItem>
              </FDateItem>
              <FDateItem>
                Wednesday:<FRangeItem>08-00 - 22:00</FRangeItem>
              </FDateItem>
              <FDateItem>
                Thursday:<FRangeItem>08-00 - 22:00</FRangeItem>
              </FDateItem>
              <FDateItem>
                Friday:<FRangeItem>08-00 - 22:00</FRangeItem>
              </FDateItem>
              <FDateItem>
                Saturday:<FRangeItem>Closed</FRangeItem>
              </FDateItem>
              <FDateItem>
                Sunday:<FRangeItem>Closed</FRangeItem>
              </FDateItem>
            </FItemBody>
          </FItem>
        </FBox>
        <FBox>
          <FItem>
            <FItemHead>Contact Information</FItemHead>
            <FItemBody>
              <FAddressItem>20/19 1/1, St Anne&lsquo;s Garden,</FAddressItem>
              <FAddressItem> St Anne&lsquo;s Road, Wattala</FAddressItem>
              <FAddressItem>+94 765742200</FAddressItem>
              <FAddressItem>info@twin.shield.com</FAddressItem>
              <FAddressItem>twin.shield@email.com</FAddressItem>
            </FItemBody>
          </FItem>
          <FItem>
            <FItemHead>Newsletter</FItemHead>
            <FItemBody>Far far away, behind the word mountains, far from the countries.</FItemBody>
          </FItem>
        </FBox>
      </ContainerInner>
      <Rights>Copyright ©2019 All rights reserved WDA-SOFT.com</Rights>
    </Container>
  );
}

export default Footer;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  height: auto;
  background: #2c2727;
  color: #fff;
  text-align: left;
  font-weight: 900;
`;

const ContainerInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const FBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const FItem = styled.div`
  width: 280px;
  margin: 0 auto;
`;

const FItemHead = styled.div`
  width: 100%;
  font-size: 24px;
  font-family: 'Playfair Display', Georgia, serif;
  margin: 40px auto;
  font-weight: 600;
`;

const FItemBody = styled.div`
  color: #8f8d77;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FDateItem = styled.div`
  width: 100%;
  color: #8f8d77;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const FRangeItem = styled.div`
  color: #fff;
`;

const FAddressItem = styled.div``;

const Rights = styled.div`
  margin-top: 50px;
  text-align: center;
  font-size: 16px;
  height: 60px;
  line-height: 60px;
`;
