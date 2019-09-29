import React,{useState} from 'react';
import { useStoreActions,useStoreState } from 'easy-peasy';


function TodoList(){
    const isLogin = useStoreState(state => state.todos.isLogin);//获取登录状态
    const stateName = useStoreState(state => state.todos.name); //获取姓名
    const login = useStoreActions(actions => actions.todos.login); //获取方法
    const [name,setName] = useState('');
    return (
        <>
            <span>你当前状态为：{isLogin?'登录':'未登录'}</span><br/>
            <span>您的登录姓名为：{stateName}</span><br/>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} /><br/>
            <button onClick={()=>{login(name);}}>点击我登录</button>
        </>
    )
}
export default TodoList;