import React, { useState, useEffect } from 'react';
import IUsers from './models/Users';
import agent from './api/agent';
import { Segment, Grid, Menu } from 'semantic-ui-react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Userlogin from './components/Userlogin';
import LoginConfirm from './components/LoginConfirm';

const App: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [activeTab, setActiveTab] = useState<string>('create user');
  const [login, setLogin] = useState(false);

  useEffect(() => {
    agent.list().then((response) => {
      setUsers(response);
    });
  }, []);

  const HandleCreateUser = (user: IUsers) => {
    agent.create(user).then(() => {
      setUsers([...users, user]);
    });
  };

  const HandlerLogin = (user: IUsers) => {
    agent.login(user).then((value) => {
      if (user.userName === value.data.userName) {
        setLogin(true);
      }
    });
  };

  const HandleOpenModal = (input: boolean) => {
    setLogin(input);
  };

  if (login)
    return <LoginConfirm login={login} HandleOpenModal={HandleOpenModal} />;
  return (
    <Grid centered>
      <Grid.Column width='7'>
        <Segment style={{ marginTop: 250 }} clearing padded='very'>
          <Menu tabular attached='top'>
            <Menu.Item
              name='create user'
              active={activeTab === 'create user'}
              onClick={() => setActiveTab('create user')}
            />
            <Menu.Item
              name='login user'
              active={activeTab === 'login user'}
              onClick={() => setActiveTab('login user')}
            />
          </Menu>

          <Segment clearing>
            {activeTab === 'create user' && (
              <UserForm HandleCreateUser={HandleCreateUser} />
            )}
            {activeTab === 'login user' && (
              <Userlogin HandlerLogin={HandlerLogin} />
            )}
          </Segment>
        </Segment>
      </Grid.Column>

      <Grid.Column width='1' />
      <Grid.Column width='5'>
        <UserList users={users} />
      </Grid.Column>
    </Grid>
  );
};

export default App;
