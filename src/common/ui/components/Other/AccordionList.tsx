import ControlledAccordionItem from '@components/Other/ControlledAccordionItem';
import React, { useState } from 'react';
import styled from 'styled-components';

type TAccordion = {
  title: string;
  content: string;
};

type TProps = { accordionData: TAccordion[] };
function AccordionList({ accordionData }: TProps): JSX.Element {
  const [activatedItem, setActivatedItem] = useState(0);
  return (
    <Container>
      {accordionData.map(({ content, title }, i) => (
        <ControlledAccordionItem
          key={`accordion-${i + 1}`}
          title={title}
          content={content}
          isActive={activatedItem === i}
          setIsActive={() => setActivatedItem(i)}
        />
      ))}
    </Container>
  );
}

export default AccordionList;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
