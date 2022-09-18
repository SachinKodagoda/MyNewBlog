import styled from 'styled-components';

import workExperienceData from '@data/test.json';
import WorkExperienceSection from '@layouts/WorkExperienceSection';

function Home(): JSX.Element {
  return (
    <MainContainer>
      <WorkExperienceSection list={workExperienceData.list} title={workExperienceData.title} />
    </MainContainer>
  );
}

export default Home;

const MainContainer = styled.div``;
