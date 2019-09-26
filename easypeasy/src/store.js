import { action, createStore } from 'easy-peasy';

const store = createStore({
  todos: {
    isLogin:false,
    name:'',
    login:action((state,payload)=>{
      state.isLogin = !state.isLogin;
      state.name = payload;
      console.log(`payload=${payload}`)
      console.log(`state.name=${state.name}`)
    }
    )
  }
});

export default store;