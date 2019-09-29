import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';


import TodoList from './easyPeasy/';
import store from './easyPeasy/store';
import { CircularProgress } from '@material-ui/core';
import AdminApp from './admin/index'

function App(){
  const [login,setLogin] = useState(true);
  console.log(login);
  return (
  	 <span>{login&&<CircularProgress />}</span>
   
  )
}

ReactDOM.render(<AdminApp />,document.getElementById('root'));
