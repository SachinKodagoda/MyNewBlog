import styled from 'styled-components';

import Animated from './animated';
import AnimationGroup from './animationGroup';
import Hover from './hover';
import Shapes from './shapes';
import Special from './special';

function Buttons(): JSX.Element {
  return (
    <Container>
      <Topic>BUTTON SHAPES</Topic>
      <Shapes />
      <Divider />
      <Topic>SPECIAL BUTTONS</Topic>
      <Special />
      <Divider />
      <Topic>HOVER BUTTONS</Topic>
      <Hover />
      <Divider />
      <Topic>ANIMATED BUTTONS</Topic>
      <Animated />
      <Divider />
      <Topic>GROUP ANIMATIONS</Topic>
      <AnimationGroup />
      <Divider />
    </Container>
  );
}

export default Buttons;

const Topic = styled.div`
  color: #000;
`;

const Divider = styled.div`
  border-bottom: 1px solid #000;
  margin: 8px 0;
`;

const Container = styled.div`
  padding: 16px;
  background: #ccc;
  min-height: 100%;
  height: auto;
`;
