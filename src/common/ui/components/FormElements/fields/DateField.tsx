import { colors } from '@theme/baseTheme';
import { sentenceCase } from '@util/normalize';
import { format } from 'date-fns';
import { FieldProps } from 'formik';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';

type TInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type TProp = {
  errorMsg?: string;
  label: string;
  placeholder: string;
  required?: boolean;
  value: Date;
  selectToday: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
};
function DateField({
  label,
  placeholder = '',
  required = false,
  field,
  value,
  setFieldValue,
  form: { errors },
}: TProp & FieldProps & TInputProps): JSX.Element {
  return (
    <Container>
      {label && (
        <Label htmlFor={placeholder}>
          {label}
          {required && <Required>*</Required>}
        </Label>
      )}
      <DatePickerCtr>
        <DayPicker
          defaultMonth={new Date()}
          disabled={[]}
          mode='single'
          selected={value}
          onSelect={val => {
            setFieldValue(field.name, val);
          }}
          footer={value ? <DateFooter>{format(value, 'PP')}</DateFooter> : <DateFooter>{placeholder}</DateFooter>}
        />
      </DatePickerCtr>
      <ErrorMsg isError={!!errors[`${field.name}`]}>
        {!!errors && !!errors[`${field.name}`] ? sentenceCase(errors[`${field.name}`] as string[]) : 'Error'}
      </ErrorMsg>
    </Container>
  );
}

export default DateField;

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

const DateFooter = styled.div`
  background: ${colors.black};
  color: ${colors.white};
  display: flex;
  font-weight: 900;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 4px;
  margin-top: 10px;
`;

const DatePickerCtr = styled.div`
  border: 1px solid ${colors.black};
  border-radius: 4px;
`;
