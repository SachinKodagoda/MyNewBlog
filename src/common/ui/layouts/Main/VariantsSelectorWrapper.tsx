import { styled } from '@nextui-org/react';
// used as a wrapper for the navbar variants radio buttons
export const VariantsSelectorWrapper = styled('div', {
  '& .nextui-radio-group-items': {
    display: 'grid',
    gridColumnGap: '$8',
    gridRowGap: '$2',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '1fr',
  },
  bottom: '10px',
  dflex: 'center',
  position: 'fixed',
  width: '100%',
});
