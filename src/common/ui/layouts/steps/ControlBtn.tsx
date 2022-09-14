import { colors } from '@theme/baseTheme';
import { Translations } from '@util/localize';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  onBack: () => void;
  onNext: () => void;
};
function ControlBtn({ onBack, onNext }: TProps): JSX.Element {
  const t = Translations();

  return (
    <Container>
      <div className='backBtn' onClick={onBack} onKeyPress={onBack} role='button' tabIndex={0}>
        {t.express_back}
      </div>
      <div className='nextBtn' onClick={onNext} onKeyPress={onBack} role='button' tabIndex={0}>
        {t.express_next}
      </div>
    </Container>
  );
}

export default ControlBtn;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  margin: 16px 0;
  gap: 16px;

  .backBtn {
    border: 1px solid ${colors.goldenBrown};
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-weight: 600;
    color: ${colors.goldenBrown};
    background: ${colors.white};
    text-transform: uppercase;
    cursor: pointer;
  }

  .nextBtn {
    border: 1px solid ${colors.goldenBrown};
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-weight: 600;
    color: ${colors.white};
    background: ${colors.goldenBrown};
    text-transform: uppercase;
    cursor: pointer;
  }
`;
