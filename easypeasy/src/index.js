import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';

import TodoList from './App';
import store from './store';

function App(){
  return (
    <StoreProvider store={store}>
      <TodoList />
    </StoreProvider>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
