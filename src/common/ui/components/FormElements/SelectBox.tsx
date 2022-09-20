import { colors } from '@theme/baseTheme';
import { IOptions, TInputValue } from '@ts/common';
import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

type TStyles = {
  color?: string;
  background?: string;
  border?: string;
  width?: string;
  hoverBackground?: string;
  hoverColor?: string;
  menuBackground?: string;
  menuColor?: string;
  activeBackground?: string;
  activeColor?: string;
  disableColor?: string;
  borderRadius?: string;
  dropDownColor?: string;
  separator?: boolean;
  separatorColor?: string;
  separatorMargin?: number;
  indicatorContainerBackground?: string;
  fontWeight?: string;
  fontFamily?: string;
};

type TProp = {
  menuPlacement?: 'top' | 'bottom' | 'auto';
  placeholder?: string;
  isDisabled?: boolean;
  onChange: (selected: IOptions) => void;
  options: IOptions[];
  selectedValue: TInputValue;
  id: string;
  style?: TStyles;
  separatorSpace?: number;
  indicatorSpace?: number;
  valueContainerMargin?: number;
  separatePlaceHolder?: boolean;
};

function SelectBox({
  id,
  indicatorSpace = 8,
  isDisabled = false,
  onChange,
  options,
  placeholder = '',
  selectedValue,
  separatePlaceHolder = true,
  separatorSpace = 2,
  style,
  valueContainerMargin = 0,
  menuPlacement = 'auto',
}: TProp): JSX.Element {
  const indicatorMarginLeftRight = indicatorSpace;
  const separatorWidth = separatorSpace;
  const indicatorContainerBorder = 0;
  const indicatorWidth = 20;
  const valueContainerMarginRight = valueContainerMargin;
  const space =
    indicatorWidth +
    2 * indicatorMarginLeftRight +
    valueContainerMarginRight +
    separatorWidth +
    indicatorContainerBorder;
  const tempStyles: TStyles = {
    color: colors.black,
    background: colors.white,
    border: `1px solid ${colors.black}`,
    width: `calc(100% - ${space}px)`,
    menuBackground: colors.white,
    menuColor: colors.black,
    hoverBackground: colors.royalGold,
    hoverColor: colors.black,
    activeBackground: colors.royalGold,
    activeColor: colors.black,
    disableColor: '#ebecf0',
    borderRadius: '4px',
    dropDownColor: colors.white,
    separatorColor: colors.black,
    indicatorContainerBackground: colors.black,
    separatorMargin: 0,
    separator: false,
    fontWeight: 'inherit',
    fontFamily: 'inherit',
    ...style,
  };

  return (
    <>
      {separatePlaceHolder && <LabelElement htmlFor={placeholder}>{placeholder} :</LabelElement>}
      <Select
        menuPlacement={menuPlacement}
        isDisabled={isDisabled}
        placeholder={placeholder}
        isSearchable={false}
        styles={{
          control: styles => {
            return {
              ...styles,
              border: tempStyles.border,
              boxShadow: 'none',
              width: 'auto',
              display: 'flex',
              cursor: 'pointer',
              background: tempStyles.background,
              ':hover': {
                ...styles[':hover'],
                border: tempStyles.border,
              },
            };
          },
          indicatorSeparator: styles => ({
            ...styles,
            background: tempStyles.separatorColor,
            display: tempStyles.separator ? 'block' : 'none',
            margin: `${tempStyles.separatorMargin}px 0`,
          }),
          indicatorsContainer: styles => ({
            ...styles,
            background: tempStyles.indicatorContainerBackground,
            border: 'none',
          }),
          valueContainer: styles => ({
            ...styles,
            display: 'flex',
            justifyContent: 'center',
            position: 'static',
            alignItems: 'center',
            lineHeight: 'auto',
            width: tempStyles.width,
            padding: '0',
            margin: '0',
            marginRight: `${valueContainerMarginRight}px`,
            flex: 'none',
          }),
          singleValue: styles => ({
            ...styles,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0',
            padding: '0',
            color: tempStyles.color,
            fontWeight: tempStyles.fontWeight,
            fontFamily: tempStyles.fontFamily,
          }),
          dropdownIndicator: (styles, state) => ({
            ...styles,
            transition: 'all .2s ease',
            padding: '0',
            margin: `0 ${indicatorMarginLeftRight}px`,
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            color: tempStyles.dropDownColor,

            ':hover': {
              ...styles[':hover'],
              color: tempStyles.dropDownColor,
            },
          }),
          menuList: styles => {
            return {
              ...styles,
              margin: '0',
              padding: '0',
            };
          },
          menu: styles => {
            return {
              ...styles,
              marginTop: '2px',
              padding: '0',
              border: tempStyles.border,
            };
          },
          option: (styles, state) => {
            return {
              ...styles,
              backgroundColor: 'transparent',
              color: state.isDisabled ? tempStyles.disableColor : tempStyles.menuColor,
              pointerEvents: state.isDisabled ? 'none' : 'auto',
              textAlign: 'center',
              cursor: 'pointer',
              ':hover': {
                ...styles[':hover'],
                background: tempStyles.hoverBackground,
                color: tempStyles.hoverColor,
                borderRadius: '0',
              },
              ':active': {
                ...styles[':active'],
                background: tempStyles.activeBackground,
                color: tempStyles.activeColor,
                borderRadius: '0',
              },
              ':last-of-type:hover': {
                ...styles[':hover'],
                background: tempStyles.hoverBackground,
                color: tempStyles.hoverColor,
                borderRadius: `0 0 ${tempStyles.borderRadius} ${tempStyles.borderRadius}`,
              },
              ':last-of-type:active': {
                ...styles[':active'],
                background: tempStyles.activeBackground,
                color: tempStyles.activeColor,
                borderRadius: `0 0 ${tempStyles.borderRadius} ${tempStyles.borderRadius}`,
              },
              ':first-of-type:hover': {
                ...styles[':hover'],
                background: tempStyles.hoverBackground,
                color: tempStyles.hoverColor,
                borderRadius: `${tempStyles.borderRadius} ${tempStyles.borderRadius} 0 0`,
              },
              ':first-of-type:active': {
                background: tempStyles.activeBackground,
                color: tempStyles.activeColor,
                borderRadius: `${tempStyles.borderRadius} ${tempStyles.borderRadius} 0 0`,
              },
            };
          },
        }}
        value={
          options.find(option => `${option.value}` === `${selectedValue}`) ||
          (placeholder.trim().length > 0 ? null : options[0])
        }
        onChange={val => onChange(val as IOptions)}
        options={options.filter(option => option.value !== selectedValue)}
        id={`id-${id}`}
        instanceId={`instance-id-${id}`}
        inputId={`input-${id}`}
      />
    </>
  );
}

export default SelectBox;

const LabelElement = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  font-weight: bold;
`;
