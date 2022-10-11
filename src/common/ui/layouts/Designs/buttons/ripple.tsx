import { useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components';

type TProps = { text: string; onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void };
function RippleButton({ onClick, text }: TProps): JSX.Element {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);
  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);
  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <Btn
      className='ripple-button'
      onClick={e => {
        const temp = e.target as unknown as HTMLButtonElement;
        const rect = temp.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick?.(e);
      }}>
      {isRippling && (
        <RippleCircle
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      )}
      <Content>{text}</Content>
    </Btn>
  );
}

export default RippleButton;

const ripple = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(10);
    opacity: 0.375;
  }
  100% {
    transform: scale(35);
    opacity: 0;
  }
`;

const Btn = styled.button`
  border-radius: 4px;
  border: none;
  margin: 8px;
  padding: 14px 24px;
  background: #001f3f;
  color: #fff;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const RippleCircle = styled.span`
  width: 20px;
  height: 20px;
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  display: block;
  content: '';
  border-radius: 9999px;
  opacity: 1;
  animation: 0.9s ease 1 forwards ${ripple};
`;

const Content = styled.span`
  position: relative;
  z-index: 2;
`;
