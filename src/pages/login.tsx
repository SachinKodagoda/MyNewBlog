import Button from '@components/Buttons/Button';
import LinkBtn from '@components/Buttons/LinkBtn';
import TextInput from '@components/FormElements/fields/TextInput';
import { UserContext } from '@ctx/UserContext';
import { initUserLogin, userLoginSchema } from '@schemas/userSchema';
import { colors } from '@theme/baseTheme';
import { Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import styled from 'styled-components';

function Login(): JSX.Element {
  const { loading, signIn } = useContext(UserContext);
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
      <FormTitle data-cy={'login-message'}>Login Here!</FormTitle>
      <Formik
        initialValues={initUserLogin}
        validationSchema={userLoginSchema}
        onSubmit={data => {
          signIn(data);
        }}
      >
        {({ values, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <TwoColumnForm>
              <FormElement>
                <Field
                  dataCy={'login-email'}
                  name='email'
                  component={TextInput}
                  placeholder='Email'
                  label='Enter Your Email : '
                  uniqueShow={false}
                  value={values.email}
                  required
                />
              </FormElement>
              <FormElement>
                <Field
                  dataCy={'login-pass'}
                  name='password'
                  component={TextInput}
                  placeholder='Password'
                  label='Enter Your Password : '
                  value={values.password}
                  required
                  type='password'
                />
              </FormElement>

              <FormElement>
                <FormBtn>
                  <SubmitTxt>Click Here To Login : </SubmitTxt>
                  <Button
                    dataCy={'login-submitBtn'}
                    arrow={{ size: 20 }}
                    type='submit'
                    text={'Login'}
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
        If you don&apos;t have an account? then
        <LinkBtn href='/register' bottom='2px' height='1px'>
          Register
        </LinkBtn>
      </RegisterLogin>
    </Container>
  );
}

export default Login;

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
