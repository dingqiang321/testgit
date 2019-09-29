import React,{useState} from 'react';
import { action, createStore, useStoreActions,StoreProvider,useStoreState } from 'easy-peasy';
import store from './app2.1'


function App() {
  return (
    <StoreProvider store={store}>
      <TodoList />
    </StoreProvider>
  );
}


function TodoList() {
  const [count,setCount] = useState(0);

  const todos = useStoreState(state => state.todos.items);
  const add = useStoreActions(actions => actions.todos.add);
  console.log(count);
  
  return (
    <div>
      {todos.map((todo, idx) => <div key={idx}>{todo}</div>)}
      <input type="text" onChange={ e => setCount(e.target.value) } />
      <button onClick={()=>{add(count) }}>测试</button>
    </div>
  )
}
export default App;