import React from 'react';
import { Card, Item, Segment } from 'semantic-ui-react';
import IUsers from '../models/Users';
import faker from 'faker';

interface IProps {
  users: IUsers[];
}

const UserList: React.FC<IProps> = ({ users }) => {
  return (
    <Segment style={{ marginTop: 100, overflow: 'auto', maxHeight: 500 }}>
      <h1 style={{ paddingLeft: 100 }}>User List</h1>
      {users.map((Users) => (
        <Card key={Users.userName} centered>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' src={faker.image.avatar()} />
              <Item.Content verticalAlign='middle'>
                <Item.Header>{Users.userName}</Item.Header>
              </Item.Content>
            </Item>
          </Item.Group>
        </Card>
      ))}
    </Segment>
  );
};

export default UserList;
