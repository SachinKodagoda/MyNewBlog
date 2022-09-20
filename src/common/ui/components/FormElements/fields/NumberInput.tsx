import ChevronLeft from '@svg/feather/ChevronLeft';
import ChevronRight from '@svg/feather/ChevronRight';
import { colors } from '@theme/baseTheme';
import { sentenceCase } from '@util/normalize';
import { FieldProps } from 'formik';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type TInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type TProp = {
  autoComplete?: 'new-password' | 'current-password' | 'username' | 'off' | 'on';
  errorMsg?: string;
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
function NumberInput({
  autoComplete = 'on',
  errorMsg,
  label,
  placeholder = '',
  required = false,
  setFieldValue,
  value,
  field,
  scale,
  min,
  max,
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
      <InputElementCtr isError={!!errorMsg && errorMsg.trim().length > 0}>
        <input
          {...field}
          type='number'
          placeholder={placeholder}
          aria-describedby={placeholder}
          autoComplete={autoComplete}
        />
        <LeftArrow
          onClick={() => {
            const temp = value || min;
            if (temp - scale >= min) {
              setFieldValue(field.name, temp - scale);
            }
          }}
        >
          <ChevronLeft className='chevronLeft' />
        </LeftArrow>
        <RightArrow
          onClick={() => {
            const temp = value || min;
            if (temp + scale <= max) {
              setFieldValue(field.name, temp + scale);
            }
          }}
        >
          <ChevronRight className='chevronRight' />
        </RightArrow>
      </InputElementCtr>
      {noFixed && (
        <ErrorMsg isError={!!errors[`${field.name}`]}>
          {!!errors && !!errors[`${field.name}`] ? sentenceCase(errors[`${field.name}`] as string[]) : 'Error'}
        </ErrorMsg>
      )}
    </Container>
  );
}

export default NumberInput;

// Styles 👕🧦👗🧣🧥👔 -->

const LeftArrow = styled.div`
  background: ${colors.black};
  color: ${colors.white};
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px 0 0 4px;
`;

const RightArrow = styled.div`
  background: ${colors.black};
  color: ${colors.white};
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 20px;
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
    padding-right: 30px;
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
