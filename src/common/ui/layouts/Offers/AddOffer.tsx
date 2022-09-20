import Button from '@components/Buttons/Button';
import DateField from '@components/FormElements/fields/DateField';
import NumberInput from '@components/FormElements/fields/NumberInput';
import SelectBoxInput from '@components/FormElements/fields/SelectBoxInput';
import TextInput from '@components/FormElements/fields/TextInput';
import { statusOpt, typeOpt } from '@lib/optionLib';
import { offerSchema, TOfferSchema } from '@schemas/offerSchema';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';

type TProps = {
  onModalSubmitHandler: (data: TOfferSchema, formState: 'edit' | 'insert') => void;
  initialData: TOfferSchema;
  formState: 'edit' | 'insert';
};

function AddOffer({ onModalSubmitHandler, initialData, formState }: TProps): JSX.Element {
  return (
    <ModalFormInner>
      <ModalInner>
        <Formik
          initialValues={initialData}
          validationSchema={offerSchema}
          onSubmit={data => {
            onModalSubmitHandler(data, formState);
          }}
        >
          {({ values, handleSubmit, setFieldValue, errors }) => (
            <Form onSubmit={handleSubmit}>
              {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
              <TwoColumnForm>
                <FormElement>
                  <FormColumn>
                    <Field
                      name='startDate'
                      component={DateField}
                      label='Start Date :'
                      placeholder='Please Pick Start Date.'
                      value={values.startDate}
                      setFieldValue={setFieldValue}
                      required
                    />
                  </FormColumn>
                </FormElement>
                <FormElement>
                  <FormColumn>
                    <Field
                      name='endDate'
                      component={DateField}
                      label='End Date :'
                      placeholder='Please Pick End Date.'
                      value={values.endDate}
                      setFieldValue={setFieldValue}
                      required
                    />
                  </FormColumn>
                </FormElement>
                <FormElement>
                  <Field
                    name='type'
                    component={SelectBoxInput}
                    label='Type :'
                    placeholder='Type'
                    value={values.type}
                    selectFirst={false}
                    options={typeOpt}
                    setFieldValue={setFieldValue}
                    required
                  />
                </FormElement>

                <FormElement>
                  <Field
                    name='status'
                    component={SelectBoxInput}
                    placeholder='Status'
                    label='Status :'
                    value={values.status}
                    selectFirst
                    options={statusOpt}
                    setFieldValue={setFieldValue}
                    required
                  />
                </FormElement>
                <FormElement>
                  <Field
                    name='offerCode'
                    component={TextInput}
                    placeholder='Offer Code'
                    label='Offer Code :'
                    value={values.offerCode}
                    required
                  />
                </FormElement>
                <FormElement>
                  <Field
                    name='desc'
                    component={TextInput}
                    placeholder='Description'
                    label='Description :'
                    value={values.desc}
                    required
                  />
                </FormElement>
                <FormElement>
                  <Field
                    name='discount'
                    component={NumberInput}
                    placeholder='Discount'
                    label='Discount : (%)'
                    value={values.discount}
                    setFieldValue={setFieldValue}
                    required
                    scale={10}
                    min={0}
                    max={100}
                  />
                </FormElement>
                <FormElement>
                  <FormBtn>
                    <SubmitTxt>Click Here!</SubmitTxt>
                    <Button
                      arrow={{ size: 20 }}
                      type='normal'
                      text={formState === 'insert' ? 'Insert Offer Data' : `Update Offer : ${values.id}`}
                      isDisabled={false}
                      height='38px'
                      onClickHandler={() => {
                        handleSubmit();
                      }}
                    />
                    <ErrorGap>Error</ErrorGap>
                  </FormBtn>
                </FormElement>
              </TwoColumnForm>
            </Form>
          )}
        </Formik>
      </ModalInner>
    </ModalFormInner>
  );
}

export default AddOffer;

// Styles 👕🧦👗🧣🧥👔 -->

const ModalFormInner = styled.div``;

const ModalInner = styled.div``;

const TwoColumnForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 5px;
`;

const FormElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormBtn = styled.div`
  width: 100%;
`;

const SubmitTxt = styled.div`
  font-weight: bold;
`;
const ErrorGap = styled.div`
  opacity: 0;
  font-size: 12px;
`;

const FormColumn = styled.div``;
