import React,{ Component } from 'react';
import { List, Typography } from 'antd';
import axios from 'axios';
import {Link} from 'react-router-dom';


class PageList extends Component{
	constructor(props){
		super(props);
		this.state = {
			data:[]
		}
	}
	componentWillReceiveProps(nextProps){
		const id = nextProps.match.params.id;
		axios.get("http://www.dell-lee.com/react/api/list.json?id=" + id).then(res => {
			this.setState({
				data:res.data.data
			})			
		});		
	}
	componentDidMount(){
		const id = this.props.match.params.id;
		let url = "http://www.dell-lee.com/react/api/list.json";
		if(id){
			url += '?id=' + id;
		}
		axios.get(url).then(res => {
			this.setState({
				data:res.data.data
			})			
		});		
	}
	render(){		
		return (
			 <List
			 	style={{background:'#fff'}}
      			bordered
      			dataSource={this.state.data}
     			renderItem={item => (
       			<List.Item>
         		<Typography.Text mark></Typography.Text><Link to={`/Detail/${item.id}`}>{item.title}</Link>
        	</List.Item>
      )}
    />
		)
	}
}
export default PageList;