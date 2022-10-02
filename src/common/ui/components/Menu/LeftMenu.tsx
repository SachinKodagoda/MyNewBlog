import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export type TData = {
  subtitles: {
    name: string;
    value: string;
    queries?: { name: string; value: string }[];
  }[];
  title: string;
}[];
type TProps = { data: TData };

function LeftMenu({ data }: TProps): JSX.Element {
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const tempTheme = theme || 'light';
  return (
    <Container>
      <ThemeTitle
        onClick={() => {
          if (tempTheme === 'dark') {
            setTheme('light');
          } else {
            setTheme('dark');
          }
        }}>
        tempTheme
      </ThemeTitle>
      {data.map((a, i) => (
        <ContainerInner key={`titles-${i + 1}`}>
          <Title>{a.title}</Title>
          <SubtitleCtr>
            {a.subtitles.map(subtitle => (
              <SubtitleInner key={`sub-${i + 1}`}>
                <IconCtr />
                <Subtitle
                  onClick={() => {
                    const queryItems = subtitle?.queries
                      ? subtitle?.queries.map(query => `&${query.name}=${query.value}`).join('&')
                      : '';
                    router.push(`?menu=${subtitle.value}${queryItems}`, undefined, { shallow: true });
                  }}>
                  {subtitle.name}
                </Subtitle>
              </SubtitleInner>
            ))}
          </SubtitleCtr>
        </ContainerInner>
      ))}
    </Container>
  );
}

export default LeftMenu;

const Container = styled.div`
  padding: 20px;
  height: 100vh;
  width: 250px;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
`;

const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div``;

const SubtitleCtr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Subtitle = styled.div`
  cursor: pointer;
`;

const IconCtr = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--xui-colors-bullet);
`;

const SubtitleInner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ThemeTitle = styled.div``;
