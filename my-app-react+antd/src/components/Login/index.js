import React,{Component,Fragment} from 'react';
import { Modal, Button,Input,message } from 'antd';
import axios from 'axios';
class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			visible:false,
			user:'admin',
			password:'admin',
			login:false
		}
	}
	showLoginBox = this.showLoginBox.bind(this);
	hiddenLoginBox = this.hiddenLoginBox.bind(this);
	changeUser = this.changeUser.bind(this);
	changePassword = this.changePassword.bind(this);
	checkLogin = this.checkLogin.bind(this);
	checkOut = this.checkOut.bind(this);
	showLoginBox(){
		this.setState({
			visible:true
		})
	}
	hiddenLoginBox(){
		this.setState({
			visible:false
		})
	}
	componentDidMount(){
		const url = "http://www.dell-lee.com/react/api/isLogin.json";
		axios.get(url,{withCredentials:true}).then(res => {
			console.log(res)
			if(res.data.data.login){
				this.setState({
					login:true
				})
			}
		})
	}
	checkLogin(){
		const {user,password} = this.state;
		const url = `http://www.dell-lee.com/react/api/login.json?user=${user}&password=${password}`;
		axios.get(url,{withCredentials:true}).then(res => {
			if(res.data.data.login){
				message.success('登录成功');
				this.hiddenLoginBox();
				this.setState({
					login:true
				})
			}else{
				message.error('登录失败，请检查账号密码');
			}
		})

	}
	checkOut(){
		const url = "http://www.dell-lee.com/react/api/logout.json";
		axios.get(url,{withCredentials:true}).then(res => {			
			if(res.data.data.logout){
				this.setState({
					login:false
				},()=>{
					message.success('退出成功');
				})
			}
		})		
	}

	changeUser(e){
		this.setState({
			user:e.target.value
		})
	}
	changePassword(e){
		this.setState({
			password:e.target.value
		})
	}
	render(){
		const { login } = this.state;
		return (
			<Fragment>
			<div style={{float:'right'}}>				
				{login ?
					<Button type="primary"  onClick={this.checkOut}>退出</Button>:
					<Button type="primary"  onClick={this.showLoginBox}>登录</Button>
					
				}
				    <Modal
	         			 title="请登录"
	         			 visible={this.state.visible}
	         			 onOk={this.checkLogin}
	        			 onCancel={this.hiddenLoginBox}
	       				 >
	          			<Input placeholder="请输入账号" value={this.state.user} onChange={this.changeUser.bind(this)}/>
	          			<Input.Password style={{marginTop:10}} value={this.state.password}  onChange={this.changePassword.bind(this)}  placeholder="请输入密码" />
       				</Modal>
			</div>
			
			</Fragment>
		)
	}
}

export default Login;