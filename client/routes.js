import React from 'react';
import { Route,IndexRoute } from 'react-router'
import App from './components/App';
import SignupPage from './components/signup/SignupPage';
import ChessBoard from './components/Chess/ChessBoard';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={ChessBoard} />
    <Route path="/signup" component={SignupPage} />
  </Route>
)
