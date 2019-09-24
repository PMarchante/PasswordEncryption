import React, { useState, FormEvent } from 'react';
import { Form, Button } from 'semantic-ui-react';
import IUsers from '../models/Users';
interface IProps {
  HandleCreateUser: (user: IUsers) => void;
}

const UserForm: React.FC<IProps> = ({ HandleCreateUser }) => {
  const initializeForm = () => {
    return {
      id: 0,
      userName: '',
      password: ''
    };
  };
  const [user, setUser] = useState<IUsers>(initializeForm);

  const handleSubmit = () => {
    HandleCreateUser(user);
  };

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setUser({ ...user, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        name='userName'
        placeholder='Username'
        onChange={handleInputChange}
      />

      <Form.Input
        name='password'
        placeholder='Password'
        onChange={handleInputChange}
      />

      <Button type='submit' positive content='Create' floated='right' />
      <Button negative content='Cancel' floated='right' />
    </Form>
  );
};

export default UserForm;
