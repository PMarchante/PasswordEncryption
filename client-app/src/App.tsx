import React, { useState, useEffect } from 'react';
import IUsers from './models/Users';
import agent from './api/agent';
import {
  Container,
  Segment,
  Grid,
  Form,
  Checkbox,
  Button
} from 'semantic-ui-react';
import UserList from './UserList';

const App: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    agent.list().then(response => {
      setUsers(response);
    });
  }, []);

  return (
    <Grid centered>
      <Grid.Column width='5'>
        <Segment style={{ marginTop: 250 }}>
          <Form>
            <Form.Field>
              <label>User Name</label>
              <input placeholder='User Name' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password' type='password' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Segment>
      </Grid.Column>

      <Grid.Column width='5'>
        <UserList users={users} />
      </Grid.Column>
    </Grid>
  );
};

export default App;
