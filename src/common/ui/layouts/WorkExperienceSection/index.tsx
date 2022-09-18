/* eslint-disable react/jsx-props-no-spreading */
import { config, NextUITheme, useTheme } from '@nextui-org/react';
import styled from 'styled-components';

import Company from './Company';
import Project from './Project';

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

interface IWorkExperience {
  title: string;
  list: ICompany[];
}

function WorkExperienceSection({ list, title }: IWorkExperience) {
  const { theme } = useTheme();
  return (
    <Section>
      <h2>{title}</h2>
      {list.map((company, i) => (
        <CompanyWrapper key={`wrapper-${i + 1}`}>
          <div>
            <Company
              name={company.name}
              position={company.position}
              startDate={company.startDate}
              endDate={company.endDate}
              description={company.description}
            />
          </div>

          <ProjectWrapper theme={theme}>
            {company.projects.map((project, k) => (
              <Project key={`project-${k + 1}`} {...project} />
            ))}
          </ProjectWrapper>
        </CompanyWrapper>
      ))}
    </Section>
  );
}

export default WorkExperienceSection;

const CompanyWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;

  & > div:first-of-type {
    height: auto;
  }

  @media ${config.media.xsMax} {
    flex-direction: column;
  }
`;

const ProjectWrapper = styled.div<{ theme: NextUITheme | undefined }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;

  @media ${config.media.xsMax} {
    padding-left: 1rem;
    border-left: solid 3px ${({ theme }) => theme.colors.primary.value};
  }
`;

const Section = styled.section`
  margin-top: 3rem;
  & > div:first-of-type {
    margin-top: 2rem;
  }
`;
