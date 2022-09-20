import { CheckMark, Cross } from '@svg/common';
import { colors } from '@theme/baseTheme';
import { sentenceCase } from '@util/normalize';
import { FieldProps } from 'formik';
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type TInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type TProp = {
  unique?: boolean;
  uniqueShow?: boolean;
  autoComplete?: 'new-password' | 'current-password' | 'username' | 'off' | 'on';
  errorMsg?: string;
  label: string;
  placeholder: string;
  required?: boolean;
  onValChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  noFixed?: boolean;
  dataCy?: string;
};
function TextInput({
  dataCy = 'not-available',
  unique = false,
  uniqueShow = false,
  autoComplete = 'new-password', // this is to off the suggestions
  label,
  placeholder = '',
  required = false,
  field,
  form: { errors },
  onValChange,
  type = 'text',
  noFixed = true,
}: TProp & FieldProps & TInputProps): JSX.Element {
  return (
    <Container>
      {label && (
        <Label htmlFor={placeholder}>
          <LabelInner>
            {label}
            {required && <Required>*</Required>}
          </LabelInner>
          {uniqueShow && (
            <>
              {unique ? (
                <UniqueCtr>
                  Available
                  <Unique>
                    <CheckMark />
                  </Unique>
                </UniqueCtr>
              ) : (
                <UniqueCtr>
                  Not available
                  <NotUnique>
                    <Cross cls='thinCross' />
                  </NotUnique>
                </UniqueCtr>
              )}
            </>
          )}
        </Label>
      )}
      <InputElementCtr isError={!!errors[`${field.name}`]}>
        <input
          {...field}
          data-cy={dataCy}
          type={type}
          placeholder={placeholder}
          aria-describedby={placeholder}
          autoComplete={autoComplete}
          onChange={e => {
            field.onChange(e);
            if (onValChange) {
              onValChange(e);
            }
          }}
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

export default TextInput;

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

//   white-space: pre-wrap; to break at \n or <br/>

const Label = styled.label`
  margin-bottom: 2px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LabelInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Required = styled.div`
  color: ${colors.red9};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Unique = styled.div`
  background: ${colors.green8};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: 4px;
  justify-self: flex-end;
  flex: none;
  & > .checkmark {
    flex: none;
    width: 6px;
    height: 6px;
    fill: ${colors.white};
  }
`;

const UniqueCtr = styled.div`
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: ${colors.black};
  color: ${colors.white};
  border-radius: 40px;
  padding: 2px 4px 2px 10px;
`;

const NotUnique = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  justify-self: flex-end;
  flex: none;

  & > .thinCross {
    flex: none;
    width: 14px;
    height: 14px;
    fill: ${colors.white};
  }
`;
