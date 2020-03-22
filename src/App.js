import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// pages
import UserList from './pages/user/UserList';

class App extends React.Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Route path='/users' component={UserList} />
      </Router>
    );
  }
}

export default App;