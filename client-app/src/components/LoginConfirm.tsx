import React, { Fragment } from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';

interface IProps {
  login: boolean;
  HandleOpenModal: (input: boolean) => void;
}

const LoginConfirm: React.FC<IProps> = ({ login, HandleOpenModal }) => {
  return (
    <Fragment>
      <Modal size='small' open={login} onClose={() => HandleOpenModal(false)}>
        <Modal.Header>Log in was successful!</Modal.Header>
        <Modal.Actions>
          <Button
            positive
            content='AWSOME!'
            onClick={() => HandleOpenModal(false)}
          />
        </Modal.Actions>
      </Modal>
    </Fragment>
  );
};

export default LoginConfirm;