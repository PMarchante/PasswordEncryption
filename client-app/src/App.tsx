import React, { useState, useEffect } from 'react';
import './App.css';
import IUsers from './models/Users';
import agent from './api/agent';

const App: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    agent.list().then((response) => {
      setUsers(response);
    });
  }, []);

  return <div>App</div>;
};

export default App;
