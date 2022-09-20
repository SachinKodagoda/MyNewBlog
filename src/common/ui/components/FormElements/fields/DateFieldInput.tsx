import useOnClickOutside from '@hooks/useOnClickOutside';
import { CheckMark, Cross } from '@svg/common';
import Calendar from '@svg/feather/Calendar';
import { colors } from '@theme/baseTheme';
import { sentenceCase } from '@util/normalize';
import { format } from 'date-fns';
import { FieldProps } from 'formik';
import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';
// import {loadStripe} from '@stripe/stripe-js';
// import {Element } from '@stripe/react-stripe-js';

type TInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type TProp = {
  unique?: boolean;
  errorMsg?: string;
  label: string;
  placeholder: string;
  required?: boolean;
  value: Date;
  selectToday: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
  autoComplete?: 'new-password' | 'current-password' | 'username' | 'off' | 'on';
  onValChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  uniqueShow?: boolean;
  noFixed?: boolean;
  alignment?: 'center' | 'left' | 'right';
};
function DateFieldInput({
  unique = false,
  label,
  placeholder = '',
  required = false,
  field,
  setFieldValue,
  form: { errors },
  uniqueShow = false,
  noFixed = true,
  alignment = 'center',
  value,
}: TProp & FieldProps & TInputProps): JSX.Element {
  const [selected, setSelected] = useState<Date>(value);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pickerCtr = useRef<HTMLDivElement>(null);

  useOnClickOutside(pickerCtr, () => {
    setIsMenuOpen(false);
  });

  const needRight = (align: string) => {
    if (align === 'center') {
      return 'right: 50%';
    } else if (align === 'left') {
      return 'left: 0%';
    } else {
      return 'right: 0%';
    }
  };
  const adjustment = (align: string) => {
    if (align === 'center') {
      return 'transform: translate(50%, 100%)';
    } else if (align === 'left') {
      return 'transform: translate(0%, 100%)';
    } else {
      return 'transform: translate(0%, 100%)';
    }
  };

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
                  It&apos;s available
                  <Unique>
                    <CheckMark />
                  </Unique>
                </UniqueCtr>
              ) : (
                <UniqueCtr>
                  It&apos;s taken
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
        <TextReplicate
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          {format(selected, 'PPP')}
        </TextReplicate>
        <CalendarCtr>
          <CalendarBtn>
            <Calendar
              className='calendarItem'
              onClick={() => {
                setIsMenuOpen(true);
              }}
            />
          </CalendarBtn>
          {isMenuOpen && (
            <DayPickerCtr ref={pickerCtr} adjustment={adjustment(alignment)} leftRight={needRight(alignment)}>
              <DayPicker
                initialFocus={isMenuOpen}
                mode='single'
                defaultMonth={selected}
                selected={selected}
                onSelect={date => {
                  setFieldValue(field.name, date);
                  if (date) {
                    setSelected(date);
                  }
                  setIsMenuOpen(false);
                }}
              />
            </DayPickerCtr>
          )}
        </CalendarCtr>
      </InputElementCtr>
      {noFixed && (
        <ErrorMsg isError={!!errors[`${field.name}`]}>
          {!!errors && !!errors[`${field.name}`] ? sentenceCase(errors[`${field.name}`] as string[]) : 'Error'}
        </ErrorMsg>
      )}
    </Container>
  );
}

export default DateFieldInput;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  width: 100%;
  font-weight: normal;
  position: relative;

  .dialog-sheet {
    background: ${colors.white};
  }
`;

const InputElementCtr = styled.div<{ isError: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
  }
`;

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

const CalendarCtr = styled.div`
  position: relative;
`;

const CalendarBtn = styled.div`
  font-size: 2rem;
  cursor: pointer;
  .calendarItem {
    width: 26px;
    height: 26px;
  }
`;

const DayPickerCtr = styled.div<{ leftRight: string; adjustment: string }>`
  background: ${colors.white};
  border: 2px solid ${colors.black};
  border-radius: 8px;
  position: absolute;
  ${p => p.leftRight};
  bottom: 100%;
  ${p => p.adjustment};
  z-index: 2;
`;

const ErrorMsg = styled.div<{ isError: boolean }>`
  opacity: ${p => (p.isError ? 1 : 0)};
  font-size: 12px;
  color: ${colors.red9};
  white-space: pre-wrap;
`;

const TextReplicate = styled.div`
  text-align: center;
  display: block;
  width: 100%;
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
`;
