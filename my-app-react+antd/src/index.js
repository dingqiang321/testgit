import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import './style.css';

import Login from './components/Login/';
import AppHeader from './components/Header/';
import Detail from './containers/Detail/';
import List from './containers/list/';

const { Header, Footer, Content } = Layout;

class App extends Component{
	render(){
		return (
			<BrowserRouter>	
				<Layout style={{height:'100%'}}>
	      			<Header className="header"><AppHeader /><Login /></Header>
				    <Content className="content">				    			    		
				    		<Switch>
				    			<Route path='/Detail/:id' component={Detail} />
					    		<Route path='/:id?' component={List} />
					    	</Switch>
				    	
				    </Content>
				    <Footer className="footer">@copyright Dingqiang 2019</Footer>
				</Layout>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));