import React from 'react';
import { action, createStore, useStoreActions,StoreProvider,useStoreState } from 'easy-peasy';


const store = createStore({
  todos: {
    items: ['Create store', 'Wrap application', 'Use store'],
    add: action((state, payload) => {
      state.items.push(payload)
    })
  }
});

export default store;