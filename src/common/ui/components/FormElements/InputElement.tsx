import { colors } from '@theme/baseTheme';
import { IHtmlInputElement } from '@ts/interfaces';
import React from 'react';
import styled from 'styled-components';

type TProp = {
  placeholder: string;
  label: string;
  errorMsg?: string;
  onChange: (val: string) => void;
  value: string;
  type: 'text' | 'password' | 'hidden';
  required?: boolean;
  autoComplete?: 'new-password' | 'current-password' | 'username' | 'off' | 'on';
};

function InputElement({
  autoComplete = 'on',
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
        <label htmlFor={placeholder} className='labelElement'>
          {label}
        </label>
      )}
      <div className='inputElementCtr'>
        <input
          className={`${errorMsg ? 'inputElement error' : 'inputElement'}`}
          type={type}
          placeholder={placeholder}
          aria-describedby={placeholder}
          onChange={(e: IHtmlInputElement) => onChange(e.target.value)}
          value={value}
          required={required}
          autoComplete={autoComplete}
        />
        {value && <div className='cross' onClick={() => onChange('')} aria-hidden='true' />}
      </div>

      {errorMsg && <div className={`${errorMsg ? 'errorMsg error' : 'errorMsg'}`}>{errorMsg}</div>}
    </Container>
  );
}

export default InputElement;

const Container = styled.div`
  width: 100%;
  font-weight: normal;
  position: relative;

  .inputElementCtr {
    position: relative;
  }

  .labelElement {
    display: inline-block;
    margin-bottom: 8px;
    font-weight: bold;
  }

  .cross {
    position: absolute;
    top: 50%;
    right: 0px;
    width: 40px;
    height: 40px;
    transform: translateY(-50%);
    user-select: none;
    cursor: pointer;
  }

  .crossImg {
    margin-top: 1px;
    width: 12px;
    height: 12px;
  }

  .inputElement {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    padding-right: 30px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    height: 40px;
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
    line-height: 38px;
    &:focus {
      border-color: ${colors.black};
    }
  }

  .errorInput {
    border: 1px solid ${colors.red1};
    &:focus {
      border-color: ${colors.red1};
    }
  }

  .errorMsg {
    display: none;
    margin-top: 8px;
    font-size: 0.8571rem;
    color: ${colors.red1};
  }

  .error {
    display: block;
  }
`;
