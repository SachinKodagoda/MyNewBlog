import { colors } from '@theme/baseTheme';
import { sentenceCase } from '@util/normalize';
import { FieldProps } from 'formik';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type TInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type TProp = {
  autoComplete?: 'new-password' | 'current-password' | 'username' | 'off' | 'on';
  label: string;
  placeholder: string;
  required?: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
  value: number;
  scale: number;
  min: number;
  max: number;
  noFixed?: boolean;
};
function PhoneNumberInput({
  autoComplete = 'new-password',
  label,
  placeholder = '',
  required = false,
  field,
  form: { errors },
  noFixed = true,
}: TProp & FieldProps & TInputProps): JSX.Element {
  return (
    <Container>
      {label && (
        <Label htmlFor={placeholder}>
          {label}
          {required && <Required>*</Required>}
        </Label>
      )}
      <InputElementCtr isError={!!errors[`${field.name}`]}>
        <input
          {...field}
          type='number'
          placeholder={placeholder}
          aria-describedby={placeholder}
          autoComplete={autoComplete}
        />
      </InputElementCtr>
      {noFixed && (
        <ErrorMsg isError={!!errors[`${field.name}`]}>
          {!!errors && !!errors[`${field.name}`] ? sentenceCase(errors[`${field.name}`] as string[]) : 'Error'}
        </ErrorMsg>
      )}
    </Container>
  );
}

export default PhoneNumberInput;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  width: 100%;
  font-weight: normal;
  position: relative;
`;

const InputElementCtr = styled.div<{ isError: boolean }>`
  position: relative;
  input {
    text-align: center;
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    /* padding-right: 30px; */
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    height: 38px;
    color: ${colors.black};
    background-color: ${colors.white};
    background-clip: padding-box;
    border: 1px solid ${colors.black};
    appearance: none;
    border-radius: 4px;
    transition: border-color 0.15s ease-in-out;
    outline: none;
    caret-color: ${colors.blue};
    display: block;
    line-height: 34px;
    border: ${p => (p.isError ? `1px solid ${colors.red9}` : `1px solid ${colors.black}`)};
    &:focus {
      border-color: ${p => (p.isError ? `${colors.red9}` : `${colors.black}`)};
    }
  }
`;

const ErrorMsg = styled.div<{ isError: boolean }>`
  opacity: ${p => (p.isError ? 1 : 0)};
  font-size: 12px;
  color: ${colors.red9};
  white-space: pre-wrap;
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
