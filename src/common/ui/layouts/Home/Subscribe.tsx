import styled from 'styled-components';

import ScrollRef from '@components/ScrollRef';
import { colors, fonts, sizes } from '@theme/baseTheme';

function Subscribe(): JSX.Element {
  return (
    <Container>
      <ScrollRef name='Offers' />
      <InnerContainer>
        <Title>Get the best offers first!</Title>
        <Form>
          <FromGroup>
            <TextInput
              type='text'
              placeholder='Your Email Address'
              onChange={() => {
                // eslint-disable-next-line no-console
                console.log('test=-->');
              }}
            />
          </FromGroup>
        </Form>
        <SubscribeBtn>Subscribe</SubscribeBtn>
      </InnerContainer>
    </Container>
  );
}

export default Subscribe;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  position: relative;
  padding: ${sizes.xs.px} ${sizes.md.px};
`;

const InnerContainer = styled.div`
  background-color: ${colors.themeGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${sizes.md.px};
  padding: ${sizes.md.px};
`;

const Title = styled.div`
  color: ${colors.white};
  font-size: ${fonts.size.l2};
`;

const Form = styled.div`
  width: 100%;
`;

const FromGroup = styled.div``;

const TextInput = styled.input`
  padding: ${sizes.md.px};
  width: 50%;
  display: block;
  margin: 0 auto;
`;

const SubscribeBtn = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.themeRed};
  color: ${colors.white};
  border-radius: ${sizes.xs.px};
  padding: ${sizes.sm.px} ${sizes.l4.px};
`;
