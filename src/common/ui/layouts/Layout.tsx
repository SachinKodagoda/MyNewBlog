import { Box } from './Box';
import { Content } from './Content';

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
