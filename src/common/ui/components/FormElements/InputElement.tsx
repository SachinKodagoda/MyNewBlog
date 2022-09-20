import XCircle from '@svg/feather/XCircle';
import { colors } from '@theme/baseTheme';
import { IHtmlInputElement } from '@ts/interfaces';
import React from 'react';
import styled from 'styled-components';

type TProp = {
  placeholder: string;
  label: string;
  errorMsg?: string;
  onChange: (val: string) => void;
  value: string | number;
  type: 'text' | 'password' | 'hidden' | 'number';
  required?: boolean;
  autoComplete?: 'new-password' | 'current-password' | 'username' | 'off' | 'on';
};

function InputElement({
  autoComplete = 'off',
  errorMsg,
  label,
  onChange,
  placeholder = '',
  required = false,
  type,
  value,
}: TProp): JSX.Element {
  if (type === 'hidden') {
    return <input type='hidden' />;
  }
  return (
    <Container>
      {label && (
        <Label htmlFor={placeholder}>
          {label}
          {required && <Required>*</Required>}
        </Label>
      )}
      <InputElementCtr>
        <InputElementInner
          type={type}
          placeholder={placeholder}
          aria-describedby={placeholder}
          onChange={(e: IHtmlInputElement) => onChange(e.target.value)}
          value={value}
          required={required}
          autoComplete={autoComplete}
          isError={!!errorMsg && errorMsg.trim().length > 0}
        />
        {!!value && (
          <InputCross
            onClick={() => onChange('')}
            aria-hidden='true'
            isError={!!errorMsg && errorMsg.trim().length > 0}
          >
            <XCircle />
          </InputCross>
        )}
      </InputElementCtr>
      <ErrorMsg isError={!!errorMsg && errorMsg.trim().length > 0}>{errorMsg}</ErrorMsg>
    </Container>
  );
}

export default InputElement;

const Container = styled.div`
  width: 100%;
  font-weight: normal;
  position: relative;
`;

const InputCross = styled.div<{ isError: boolean }>`
  position: absolute;
  top: 50%;
  right: 5px;
  width: auto;
  height: auto;
  transform: translateY(-50%);
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => (p.isError ? `${colors.red9}` : `${colors.black}`)};
  svg {
    stroke-width: 1;
    width: 20px;
    height: 20px;
  }
`;

const InputElementCtr = styled.div`
  position: relative;
`;

const InputElementInner = styled.input<{ isError: boolean }>`
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
`;

const ErrorMsg = styled.div<{ isError: boolean }>`
  display: ${p => (p.isError ? 'block' : 'none')};
  margin-top: 2px;
  margin-left: 2px;
  font-size: 0.8571rem;
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
