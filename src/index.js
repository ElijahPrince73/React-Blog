import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route,} from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() {
    return <div> Hello</div>
  }
}
class Goodby extends React.Component {
  render() {
    return <div> Goodby</div>
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/hello' component={Hello}/>
        <Route path='/Goodby' component={Goodby}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
