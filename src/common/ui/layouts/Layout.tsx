import { Content } from './Content';
import { Box } from './Main/Box';

type TProps = {
  children: JSX.Element;
};
export function Layout({ children }: TProps) {
  return (
    <Box
      css={{
        maxW: '100%',
      }}>
      {children}
      <Content />
    </Box>
  );
}
