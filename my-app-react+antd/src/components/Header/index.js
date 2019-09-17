import React,{Component,Fragment} from 'react';
import logo from './logo.png'
import './style.css'
import { Menu, Icon } from 'antd';
import axios from 'axios';
import {Link} from 'react-router-dom';

//页面导航
class AppHeader extends Component {
	constructor(props){
		super(props);
		this.state = {
			list:[]
		}
	}
	//请求接口获取数据，然后填充到state中
	componentDidMount(){
		axios.get('http://www.dell-lee.com/react/api/header.json').then((res) => {
			this.setState({
				list:res.data.data
			})
		});
	}
	//获取到this.state中的数据显示到页面中
	getMenuItems(){
		return  this.state.list.map(item => {
			return (
				<Menu.Item key={item.id}>
					<Link to={`/${item.id}`}> 
						<Icon type={item.icon} />{item.title}
					</Link>
				</Menu.Item>
			)
		})
	}

	render(){
		return (
			<Fragment>
				<Link to='/'>
					<img src={logo} className="app-header-logo" alt="logo"/>
				</Link>
				<Menu  mode="horizontal" className="app-header-menu">
		       		{this.getMenuItems()}
	        	</Menu>
        	</Fragment>
		)
	}
}
export default AppHeader;