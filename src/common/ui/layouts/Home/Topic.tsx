import styled from 'styled-components';

import { colors, fonts, sizes } from '@theme/baseTheme';

type TProps = { title: string; subTitle: string };
function Topic({ subTitle, title }: TProps): JSX.Element {
  return (
    <Container>
      <Head>{title}</Head>
      <SubHead>{subTitle}</SubHead>
    </Container>
  );
}

export default Topic;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs.px};
`;

const Head = styled.div`
  color: ${colors.transparent_black5};
  text-align: center;
  font-size: ${fonts.size.l2};
  text-transform: uppercase;
`;

const SubHead = styled.div`
  font-family: ${fonts.family.secondary};
  text-align: center;
  font-size: ${fonts.size.l4};
  font-weight: ${fonts.weight.medium};
`;
