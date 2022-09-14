import { colors } from '@theme/baseTheme';
import { Translations } from '@util/localize';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function ExpressHeader(): JSX.Element {
  const t = Translations();
  const [expressText, setExpressText] = useState(1);
  const statusArr = [
    {
      val1: '',
      val2: 'down',
      val3: 'show',
    },
    {
      val1: 'show',
      val2: '',
      val3: 'down',
    },
    {
      val1: 'down',
      val2: 'show',
      val3: '',
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setExpressText(val => (val < 3 ? val + 1 : 1));
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <Container>
      <div className='box'>
        <div className={`information ${statusArr[expressText - 1].val1}`}>{t.express_seven_days}</div>
        <div className={`information ${statusArr[expressText - 1].val2}`}>{t.express_expert_ratings}</div>
        <div className={`information ${statusArr[expressText - 1].val3}`}>{t.express_satisfaction}</div>
      </div>
    </Container>
  );
}

export default ExpressHeader;

const Container = styled.div`
  background: ${colors.dark_green};
  height: 40px;
  width: 100vw;
  border-bottom: 2px solid ${colors.black};
  box-shadow: inset 0px 2px 10px 3px rgba(0, 0, 0, 0.1);
  color: ${colors.white};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;

  .box {
    position: relative;
    height: 100%;
    width: 100vw;
    overflow: hidden;
  }

  .information {
    position: absolute;
    top: 0;
    opacity: 0;
    height: 100%;
    transform: translateY(-50%);
    transition: opacity 0.5s ease, transform 0.5s ease;
    text-align: center;
    width: 100%;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .show {
    opacity: 1;
    transform: translateY(0);
  }
  .down {
    transform: translateY(50%);
  }
`;
