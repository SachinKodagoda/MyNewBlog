import Button from '@components/Buttons/Button';
import Input from '@components/FormElements/InputElement';
import { UserContext } from '@ctx/UserContext';
import useDebounce from '@hooks/useDebounce';
import ErrorPages from '@layouts/common/ErrorPages';
import { checkUserName } from '@lib/firebase';
import { colors } from '@theme/baseTheme';
import { isEmpty, passwordValidator, userNameValidator, userNameValidatorBoolean } from '@util/normalize';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

type TAvailability = 'checking' | 'available' | 'already_taken' | 'error' | 'initial';

function Register(): JSX.Element | null {
  const { registerGoogleUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const debouncedUsername = useDebounce(username, 250) as string;
  const [usernameError, setUserNameError] = useState('');
  const [cookies] = useCookies(['uData']);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [usernameAvailability, setUsernameAvailability] = useState<TAvailability>('checking');

  const isInValid =
    isEmpty(username) ||
    isEmpty(password) ||
    !isEmpty(usernameError) ||
    !isEmpty(passwordError) ||
    usernameAvailability !== 'available';

  useEffect(() => {
    setUserNameError(userNameValidator(username));
    setPasswordError(passwordValidator(password));
  }, [username, password]);

  const checkUsername = useCallback(async () => {
    if (userNameValidatorBoolean(debouncedUsername)) {
      const status = await checkUserName(debouncedUsername);
      if (status === 'yes') {
        setUsernameAvailability('already_taken');
      } else if (status === 'no') {
        setUsernameAvailability('available');
      } else {
        setUsernameAvailability('error');
      }
    } else {
      setUsernameAvailability('initial');
    }
  }, [debouncedUsername]);

  useEffect(() => {
    checkUsername();
  }, [checkUsername]);

  useEffect(() => {
    if (cookies?.uData?.username) {
      setUsername(cookies?.uData?.username || '');
    }
  }, [cookies]);

  let availability = '';
  let availability_color = colors.red1;
  if (usernameAvailability === 'already_taken') {
    availability = `${debouncedUsername} is already taken!`;
    availability_color = colors.red1;
  } else if (usernameAvailability === 'available') {
    availability = `${debouncedUsername} is available`;
    availability_color = colors.dark_green;
  } else if (usernameAvailability === 'checking') {
    availability = 'checking...';
    availability_color = colors.black;
  } else if (usernameAvailability === 'error') {
    availability = 'System error type agin!';
    availability_color = colors.red1;
  } else {
    availability = '';
    availability_color = colors.black;
  }

  if (!cookies?.uData?.uid)
    return <ErrorPages btnTxt='Login' message='Authentication Failed. Try to sign in' url='/login' />;

  return (
    <Container>
      <form className='containerInner'>
        <Input
          placeholder='username'
          label='User name :'
          errorMsg={usernameError}
          value={username}
          onChange={(val: string) => setUsername(val)}
          type='text'
          autoComplete='username'
          required
        />
        <Input
          placeholder='Username'
          label=''
          errorMsg=''
          value={username}
          onChange={() => {
            // eslint-disable-next-line no-console
            console.log('keepIt=-->');
          }}
          type='hidden'
          autoComplete='username'
          required
        />
        <Input
          placeholder='Password'
          label='Password :'
          errorMsg={passwordError}
          value={password}
          onChange={(val: string) => setPassword(val)}
          type='password'
          autoComplete='new-password'
          required
        />
        <div className='buttonCvr'>
          <Button
            type='submit'
            text='Register'
            isDisabled={isInValid}
            onClickHandler={(): void => {
              if (!isInValid) {
                registerGoogleUser(debouncedUsername, password);
              }
            }}
          />
        </div>
        <div style={{ color: availability_color }}>{availability}</div>
      </form>
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
  .containerInner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 1 auto;
    width: 250px;
    flex-direction: column;
    gap: 16px;
  }

  .buttonCvr {
    margin-top: 10px;
    width: 100%;
  }
`;
