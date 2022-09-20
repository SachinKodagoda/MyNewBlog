import Button from '@components/Buttons/Button';
import LinkBtn from '@components/Buttons/LinkBtn';
import TextInput from '@components/FormElements/fields/TextInput';
import useDebounce from '@hooks/useDebounce';
import { TUserRegisterSchema, userRegisterSchema } from '@schemas/userSchema';
import { colors } from '@theme/baseTheme';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';

function Register(): JSX.Element | null {
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const debouncedUserEmail = useDebounce(userEmail, 250) as string;
  const [uniqueEmail, setUniqueEmail] = useState(false);
  const router = useRouter();
  const initialValues: TUserRegisterSchema = {
    fName: '',
    lName: '',
    email: '',
    password: '',
    rePassword: '',
  };

  const onAddEmail = (email: string) => {
    fetch(`/api/dashboard?type=user_test_email&email=${email}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `${process.env.JWT}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          toast.error(res?.message || 'Something Went Wrong. Try again!');
          setUniqueEmail(false);
        } else {
          if (res.success === 1) {
            setUniqueEmail(false);
          } else {
            setUniqueEmail(true);
          }
        }
      })
      .catch(res => {
        toast.error(res?.message || 'Something Went Wrong. Try again!');
        setUniqueEmail(false);
      });
  };
  const onModalSubmitHandler = (data: TUserRegisterSchema) => {
    setLoading(true);
    fetch(`/api/dashboard?type=user_create`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `${process.env.JWT}`,
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          toast.error(res?.message || 'Something Went Wrong. Try again!');
        } else {
          toast.success(res.message);
          router.push('/login');
        }
        setLoading(false);
      })
      .catch(res => {
        toast.error(res?.message || 'Something Went Wrong. Try again!');
        setLoading(false);
      });
  };
  useEffect(() => {
    if (debouncedUserEmail.trim().length > 0) {
      onAddEmail(debouncedUserEmail);
    }
  }, [debouncedUserEmail]);
  return (
    <Container>
      <WaveArea>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#0099ff'
            fillOpacity='1'
            d='M0,192L48,208C96,224,192,256,288,266.7C384,277,480,267,576,266.7C672,267,768,277,864,277.3C960,277,1056,267,1152,240C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </WaveArea>
      <FormTitle>Register Here!</FormTitle>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={userRegisterSchema}
        onSubmit={data => {
          onModalSubmitHandler(data);
        }}
      >
        {({ values, handleSubmit, setFieldValue, errors }) => (
          <Form onSubmit={handleSubmit}>
            <TwoColumnForm>
              <FormElement>
                <Field
                  name='fName'
                  component={TextInput}
                  placeholder='First Name'
                  label='Enter Your First Name : '
                  value={values.fName}
                  required
                />
              </FormElement>
              <FormElement>
                <Field
                  name='lName'
                  component={TextInput}
                  placeholder='Last Name'
                  label='Enter Your Last Name : '
                  value={values.lName}
                  required
                />
              </FormElement>
              <FormElement>
                <Field
                  name='email'
                  component={TextInput}
                  placeholder='Email'
                  label='Enter Your Email : '
                  unique={uniqueEmail}
                  uniqueShow={
                    debouncedUserEmail.trim().length > 0 && !(errors.email || `${errors.email || ''}`.trim().length > 0)
                  }
                  value={values.email}
                  required
                  onValChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setUserEmail(e.target.value);
                  }}
                />
              </FormElement>
              <FormElement>
                <Field
                  name='password'
                  component={TextInput}
                  placeholder='Password'
                  label='Enter A Password : '
                  value={values.password}
                  required
                  type='password'
                />
              </FormElement>
              <FormElement>
                <Field
                  name='rePassword'
                  component={TextInput}
                  placeholder='Repeat Password'
                  label='Enter The Password Again : '
                  value={values.rePassword}
                  required
                  type='password'
                />
              </FormElement>

              <FormElement>
                <FormBtn>
                  <SubmitTxt>Click Here To Register : </SubmitTxt>
                  <Button
                    arrow={{ size: 20 }}
                    type='normal'
                    text={'Register'}
                    isDisabled={false}
                    height='38px'
                    loading={loading}
                    loaderSize='20px'
                    loaderBorder='2px'
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
      <RegisterLogin>
        Do you already have an account? then
        <LinkBtn href='/login' bottom='2px' height='1px'>
          Login
        </LinkBtn>
      </RegisterLogin>
    </Container>
  );
}

export default Register;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

const TwoColumnForm = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 20px;
  row-gap: 5px;
  min-width: 300px;
  position: relative;
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

const RegisterLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25em;
`;

const FormTitle = styled.div`
  font-weight: bolder;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${colors.blue9};
`;

const WaveArea = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
