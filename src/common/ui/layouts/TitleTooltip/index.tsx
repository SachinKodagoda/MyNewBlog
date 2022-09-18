import { Button, Tooltip, useTheme } from '@nextui-org/react';
import styled from 'styled-components';

import { GithubLine } from '@svg/icons/GithubLine';
import { LinkIcon } from '@svg/icons/LinkIcon';

interface IProps {
  text: string;
  githubLink: string | null;
  otherLink: string | null;
}

function TitleTooltip({ githubLink, otherLink, text }: IProps) {
  return githubLink !== null || otherLink !== null ? (
    <Tooltip placement='topStart' content={<TooltipContent githubLink={githubLink} otherLink={otherLink} />}>
      <StyledButton auto light color='primary' animated={false}>
        <h3>{text}</h3>
      </StyledButton>
    </Tooltip>
  ) : (
    <h3>{text}</h3>
  );
}

export default TitleTooltip;

const StyledButton = styled(Button)`
  padding-left: 0;
  padding-right: 2px;
`;

interface ITooltipProps {
  githubLink: string | null;
  otherLink: string | null;
}

function TooltipContent({ githubLink, otherLink }: ITooltipProps) {
  const { theme } = useTheme();

  return (
    <Div>
      {githubLink && (
        <a href={githubLink} rel='noreferrer' target='_blank'>
          <Button auto light icon={<GithubLine name='GithubLine' fill={theme?.colors.accents4.value} />} />
        </a>
      )}
      {otherLink && (
        <a href={otherLink} rel='noreferrer' target='_blank'>
          <Button auto light icon={<LinkIcon name='Link' fill={theme?.colors.accents4.value} />} />
        </a>
      )}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
`;
