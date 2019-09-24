import React, { useState, useEffect, FormEvent } from 'react';
import IUsers from './models/Users';
import agent from './api/agent';
import { Segment, Grid, Form, Button } from 'semantic-ui-react';
import UserList from './UserList';

const App: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  // const createUser = ()=>{
  //   let newUser ={
  //     ...
  //   }
  //   agent.create(newUser).then(()=>{

  //     setUsers([...users, newUser])
  //   })
  // }

  useEffect(() => {
    agent.list().then(response => {
      setUsers(response);
    });
  }, []);
  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    //setUsers({ ...users, [name]: value });
  };
  return (
    <Grid centered>
      <Grid.Column width='5'>
        <Segment style={{ marginTop: 250 }} clearing>
          <Form>
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

            <Button type='submit' positive content='Submit' floated='right' />
            <Button negative content='Clear form' floated='right' />
          </Form>
        </Segment>
      </Grid.Column>
      <Grid.Column width='2' />
      <Grid.Column width='5'>
        <UserList users={users} />
      </Grid.Column>
    </Grid>
  );
};

export default App;
