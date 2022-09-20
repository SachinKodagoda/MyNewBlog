import SelectBox from '@components/FormElements/SelectBox';
import { colors } from '@theme/baseTheme';
import { IOptions } from '@ts/common';
import { sentenceCase } from '@util/normalize';
import { FieldProps } from 'formik';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type TInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type TProp = {
  errorMsg?: string;
  label: string;
  placeholder: string;
  required?: boolean;
  options: IOptions[];
  value: number;
  selectFirst: boolean;
  width?: string;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
  noFixed?: boolean;
};
function SelectBoxInput({
  label,
  placeholder = '',
  required = false,
  field,
  value,
  options,
  setFieldValue,
  selectFirst,
  form: { errors },
  width = 'calc(100% - 22px)',
  noFixed = true,
}: TProp & FieldProps & TInputProps): JSX.Element {
  const initVal = selectFirst ? options[0].value : null;
  return (
    <Container>
      {label && (
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
          width: width,
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
          setFieldValue(field.name, selected.value || initVal);
        }}
        selectedValue={value || (initVal as string)}
        placeholder={placeholder}
        id={field.name}
      />
      {noFixed && (
        <ErrorMsg isError={!!errors[`${field.name}`]}>
          {!!errors && !!errors[`${field.name}`] ? sentenceCase(errors[`${field.name}`] as string[]) : 'Error'}
        </ErrorMsg>
      )}
    </Container>
  );
}

export default SelectBoxInput;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  width: 100%;
  font-weight: normal;
  position: relative;
`;

const ErrorMsg = styled.div<{ isError: boolean }>`
  opacity: ${p => (p.isError ? 1 : 0)};
  font-size: 12px;
  color: ${colors.red9};
`;

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
