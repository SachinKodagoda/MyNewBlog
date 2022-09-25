import styled from 'styled-components';

type TProps = { size?: string };
function TopMenu({ size = '60px' }: TProps): JSX.Element {
  return <Container height={size}>TopMenu</Container>;
}

export default TopMenu;

const Container = styled.div<{ height: string }>`
  height: ${({ height }) => height};
  background: var(--xui-colors-navbar);
`;
