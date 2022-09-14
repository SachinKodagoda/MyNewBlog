import Welcome from '@components/Animated/Welcome';
import Button from '@components/Buttons/Button';
import Modal from '@components/Other/Modal';
import { colors, devices } from '@theme/baseTheme';
import React, { useState } from 'react';
import styled from 'styled-components';

function ComingSoonModal(): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  return (
    <Modal
      onClickOutside={() => {
        setShowModal(false);
      }}
      modalOpen={showModal}
    >
      <ModalContent>
        <Welcome />
        <WelcomeMessage1>Hi</WelcomeMessage1>
        <WelcomeMessage2>Welcome To DAVINCI</WelcomeMessage2>
        <MiddleArea>
          <div>Still working on a prototype</div>
          <div>
            Coming live <b>soon</b>!
          </div>
        </MiddleArea>
        <Button
          type='normal'
          text='OK'
          isDisabled={false}
          onClickHandler={(): void => {
            setShowModal(false);
          }}
          arrow={{ size: 18 }}
          background={colors.accent}
        />
      </ModalContent>
    </Modal>
  );
}

export default ComingSoonModal;

// Styles 👕🧦👗🧣🧥👔 -->

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  @media ${devices.minTablet} {
    min-width: 300px;
  }
`;

const WelcomeMessage1 = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
`;
const WelcomeMessage2 = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
`;

const MiddleArea = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  background: ${colors.light_accent1};
  border-radius: 4px;
  font-size: 1.1rem;
`;
