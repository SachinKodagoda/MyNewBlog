import { config, NextUITheme, useTheme } from '@nextui-org/react';
import styled from 'styled-components';

interface IProject {
  title: {
    text: string;
    githubLink: string | null;
    otherLink: string | null;
  };
  description: string;
  startDate: string;
  endDate: string;
  which: string[];
  techStack: string[] | null;
}

interface ICompany {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  projects: IProject[];
}

function Company({ description, endDate, name, position, startDate }: Omit<ICompany, 'projects'>) {
  const { theme } = useTheme();

  return (
    <CompanyCard data-test_id='wrapper'>
      <h3>{name}</h3>
      <small>
        {startDate} ~ {endDate}
      </small>
      <span>{position}</span>
      <P theme={theme}>{description}</P>
    </CompanyCard>
  );
}

export default Company;

const CompanyCard = styled.div`
  position: sticky;
  top: 2rem;
  padding-right: 2rem;

  display: flex;
  flex-direction: column;
  width: 14.375rem;

  @media ${config.media.xsMax} {
    width: 100%;
    padding-right: 0;
  }
`;

const P = styled.p<{ theme: NextUITheme | undefined }>`
  color: ${({ theme }) => theme.colors.accents6.value};
`;
