import { useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components';

type TProps = { text: string; onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void };
function RippleButton({ onClick, text }: TProps): JSX.Element {
  const [coords, setCoords] = useState({ height: 0, width: 0, x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ height: 0, width: 0, x: -1, y: -1 });
  }, [isRippling]);

  return (
    <Btn
      className='ripple-button'
      onClick={e => {
        const temp = e.target as unknown as HTMLButtonElement;
        const rect = temp.getBoundingClientRect();
        const d = Math.max(rect.width, rect.height);
        // eslint-disable-next-line no-console
        console.log('rect.left, rect.right: =-->', e.clientX - rect.left, rect.right - rect.left);
        setCoords({ height: d, width: d, x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick?.(e);
      }}>
      {isRippling && (
        <RippleCircle
          style={{
            // height: `${coords.height}px`,
            left: `${coords.x}px`,
            // top: coords.y,
            // width: `${coords.width}px`,
          }}
        />
      )}
      <Content>{text}</Content>
    </Btn>
  );
}

export default RippleButton;

const ripple = keyframes`
  to {
    transform: scale(2.5);
    opacity: 0;
  }
`;

const Btn = styled.button`
  border: none;
  margin: 8px;
  /* padding: 14px 24px; */
  width: 100px;
  background: #001f3f;
  color: #fff;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 0.1em solid #120b1e;
  box-shadow: 0 12px 16px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%);
`;

const RippleCircle = styled.span`
  position: absolute;
  /* background: rgba(255, 255, 255, 0.7); */
  background: red;
  display: block;
  border-radius: 9999px;

  /* transform: scale(0); */
  /* animation: ${ripple} 0.6s linear; */
  width: 5px;
  height: 5px;
  transform-origin: center;
`;

const Content = styled.span`
  position: relative;
  z-index: 2;
`;
