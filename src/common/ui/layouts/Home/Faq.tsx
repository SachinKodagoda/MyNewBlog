import AccordionList from '@components/Other/AccordionList';
import { devices } from '@theme/baseTheme';
import { Translations } from '@util/localize';
import styled from 'styled-components';

function Faq(): JSX.Element {
  const t = Translations();
  const accordionData = [
    {
      title: `${t.main_faq_question1}`,
      content: `${t.main_faq_answer1}`,
    },
    {
      title: `${t.main_faq_question2}`,
      content: `${t.main_faq_answer2}`,
    },
    {
      title: `${t.main_faq_question3}`,
      content: `${t.main_faq_answer3}`,
    },
    {
      title: `${t.main_faq_question4}`,
      content: `${t.main_faq_answer4}`,
    },
    {
      title: `${t.main_faq_question5}`,
      content: `${t.main_faq_answer5}`,
    },
  ];
  return (
    <Container>
      <AccordionList accordionData={accordionData} />
    </Container>
  );
}

export default Faq;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  margin: 0 auto;
  width: calc(100vw - 16px);
  padding: 0 8px;

  @media ${devices.minTablet} {
    width: calc(100vw * 0.8);
  }
  @media ${devices.minDesktopLG} {
    width: calc(100vw * 0.5);
  }
`;
