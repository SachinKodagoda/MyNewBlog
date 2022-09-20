import SelectBox from '@components/FormElements/SelectBox';
import { colors } from '@theme/baseTheme';
import { IOptions, TInputValue } from '@ts/common';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  limit: TInputValue;
  setLimit: (item: TInputValue) => void;
  options: IOptions[];
};
function PerPageCtr({ setLimit, limit, options }: TProps): JSX.Element {
  return (
    <Container>
      <SelectBox
        style={{
          color: `${colors.black}`,
          background: 'transparent',
          border: `1px solid ${colors.black}`,
          width: '40px',
          menuBackground: `${colors.black}`,
          menuColor: `${colors.black}`,
          hoverBackground: `${colors.gray4}`,
          hoverColor: `${colors.black}`,
          activeBackground: `${colors.white}`,
          activeColor: `${colors.black}`,
          disableColor: '#ebecf0',
          borderRadius: '4px',
          dropDownColor: `${colors.white}`,
          separator: false,
          separatorMargin: 8,
          separatorColor: `${colors.gray2}`,
        }}
        menuPlacement='top'
        separatorSpace={0}
        indicatorSpace={0}
        valueContainerMargin={2}
        separatePlaceHolder={false}
        options={options}
        onChange={selected => {
          setLimit(selected.value || null);
        }}
        selectedValue={limit || null}
        placeholder={''}
        id='language-toggle'
      />
    </Container>
  );
}

export default PerPageCtr;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div``;
