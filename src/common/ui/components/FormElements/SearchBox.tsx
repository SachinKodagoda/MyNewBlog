import SelectBox from '@components/FormElements/SelectBox';
import { colors } from '@theme/baseTheme';
import { IOptions } from '@ts/common';
import React, { Dispatch } from 'react';
import styled from 'styled-components';
type TProp = {
  options: IOptions[];
  value: string;
  setValue: (value: string) => void;
  setSearchVal: Dispatch<React.SetStateAction<string>>;
  searchVal: string;
};
function SearchBox({ options, value, setValue, searchVal, setSearchVal }: TProp): JSX.Element {
  return (
    <Container>
      <InputElementInner type='text' value={searchVal} onChange={e => setSearchVal(e.target.value)} />
      <SelectBox
        style={{
          color: `${colors.black}`,
          background: 'transparent',
          border: `1px solid ${colors.black}`,
          width: '180px',
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
          setValue(selected.value as string);
        }}
        selectedValue={value || (options[0].value as string)}
        placeholder={'Search Key'}
        id='Searching'
      />
    </Container>
  );
}

export default SearchBox;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
`;

const InputElementInner = styled.input`
  text-align: center;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  padding-right: 30px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  height: 38px;
  color: ${colors.black};
  background-color: ${colors.white};
  background-clip: padding-box;
  border: 2px solid ${colors.black};
  appearance: none;
  border-radius: 60px;
  transition: border-color 0.15s ease-in-out;
  outline: none;
  caret-color: ${colors.blue};
  display: block;
  line-height: 34px;
`;
