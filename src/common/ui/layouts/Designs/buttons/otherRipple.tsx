import { useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components';

type TProps = { text: string; onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void };

function RippleButton({ onClick, text }: TProps): JSX.Element {
  const [coords, setCoords] = useState({ size: 20, x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => {
        setIsRippling(false);
        setCoords({ size: 20, x: -1, y: -1 });
      }, 300);
    } else setIsRippling(false);
  }, [coords]);

  function getClickPosition(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const temp = e.target as unknown as HTMLButtonElement;
    const { height, left, top, width } = temp.getBoundingClientRect();
    const size = Math.min(height, width) / 4;
    const xPosition = e.clientX - left - size / 2;
    const yPosition = e.clientY - top - size / 2;
    setCoords({ size, x: xPosition, y: yPosition });
    onClick?.(e);
  }

  return (
    <Btn className='ripple-button' onClick={e => getClickPosition(e)}>
      {isRippling && (
        <RippleCircle
          style={{
            height: coords.size,
            left: coords.x,
            top: coords.y,
            width: coords.size,
          }}
        />
      )}
      {text}
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
  border: none;
  margin: 8px;
  padding: 14px 24px;
  background: #001f3f;
  width: 100px;
  height: 50px;
  color: #fff;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 0.1em solid #120b1e;
  box-shadow: 0 12px 16px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%);
`;

const RippleCircle = styled.div`
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
