import SelectBox from '@components/FormElements/SelectBox';
import { colors } from '@theme/baseTheme';
import { IOptions, TInputValue } from '@ts/common';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  setSelectedVal: (selected: TInputValue) => void;
  selectedVal: TInputValue;
  options: IOptions[];
  label?: string;
  placeholder?: string;
  required?: boolean;
};
function FormSelectBox({
  setSelectedVal,
  selectedVal,
  options,
  label = '',
  placeholder = '',
  required = false,
}: TProps): JSX.Element {
  return (
    <Container>
      {label.trim().length > 0 && (
        <Label htmlFor={placeholder}>
          {label}
          {required && <Required>*</Required>}
        </Label>
      )}
      <SelectBox
        style={{
          color: `${colors.black}`,
          background: 'transparent',
          border: `1px solid ${colors.black}`,
          width: '300px',
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
        separatorSpace={0}
        indicatorSpace={0}
        valueContainerMargin={2}
        separatePlaceHolder={false}
        options={options}
        onChange={selected => {
          setSelectedVal(selected.value || null);
        }}
        selectedValue={selectedVal || null}
        placeholder={placeholder}
        id='language-toggle'
      />
    </Container>
  );
}

export default FormSelectBox;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div``;

const Label = styled.label`
  margin-bottom: 2px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Required = styled.div`
  color: ${colors.red9};
  display: flex;
  align-items: center;
  justify-content: center;
`;
