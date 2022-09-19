import React from 'react';

import { Button, Checkbox, Input, Modal, Row, Text } from '@nextui-org/react';

import { Mail } from '@svg/boxIcons/Mail';
import { Password } from '@svg/boxIcons/Password';

type TProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function LoginModal({ setVisible, visible }: TProps) {
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <Modal closeButton aria-labelledby='modal-title' open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Text id='modal-title' size={18}>
            Welcome to{' '}
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Email'
            contentLeft={<Mail fill='currentColor' />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Password'
            contentLeft={<Password fill='currentColor' />}
          />
          <Row justify='space-between' align='flex-end'>
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color='error' onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
