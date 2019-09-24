import React from 'react';
import { List, Image, Card, Item } from 'semantic-ui-react';
import IUsers from './models/Users';
import faker from 'faker';

interface IProps {
  users: IUsers[];
}

const UserList: React.FC<IProps> = ({ users }) => {
  return (
    <Card style={{ marginTop: 100 }}>
      <Card.Content>
        <Card.Header>User List</Card.Header>
      </Card.Content>
      {users.map(Users => (
        <Card key={Users.userName}>
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
    </Card>
  );
};

export default UserList;
