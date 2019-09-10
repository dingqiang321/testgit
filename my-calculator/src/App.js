import React,{Component} from 'react';
import './style.css';

class App extends Component{

	constructor(props){
		super(props);
		this.state={
			numBerone:'',
			numBertwo:'',
			sum:'',
			number:1,
			inputValue:''
		}
	}

	numBerAllClick(e){
		if(this.state.number){
			var numBerone = this.addString(this.state.numBerone,e.target.innerHTML)		
			this.setState({
				numBerone:numBerone,
				inputValue:numBerone
			})
		}else{
			var numBertwo = this.addString(this.state.numBertwo,e.target.innerHTML)
			var inputValue = this.addString(this.state.inputValue,e.target.innerHTML)
			this.setState({
				numBertwo:numBertwo,
				inputValue:inputValue
			})
		}	
		console.log(this.state)
	}
	//加法
	add(){
		if(this.state.number){
			var inputValue = this.addString(this.state.inputValue,"+")
			this.setState({
				number:0,
				inputValue:inputValue
			})
		}		
	}
	//求和
	sum(){
		if(this.state.numBerone !== '' && this.state.numBertwo !== ''){
			var sum =  this.addString(Number(this.state.numBerone),Number(this.state.numBertwo))
			this.setState({
				numBerone:'',
				numBertwo:'',
				number:1,
				inputValue:sum
			})
		} 
	}
	//拼接方法
	addString(str,str1){
		return str + str1;
	}
	//封装改变数据的方法，目前还没有想到应该怎么做，暂闲置
	// changeState(str1,str2,str3,str4,str5){
	// 	this.setState({
	// 		numBerone:'',
	// 		numBertwo:'',
	// 		sum:'',
	// 		number:1,
	// 		inputValue:''
	// 	})
	// }
	render(){
		return(
			<table border="1" width="500px" height="500px">
			<tbody>
			<tr>
				<td colSpan="4"><input type="text" id="result" defaultValue={this.state.inputValue}/></td>
			</tr>
			<tr>
				<td><button onClick={this.numBerAllClick.bind(this)}>1</button></td>
				<td><button onClick={this.numBerAllClick.bind(this)}>2</button></td>
				<td><button onClick={this.numBerAllClick.bind(this)}>3</button></td>
				<td rowSpan="2"><button onClick={this.add.bind(this)}>+</button></td>
			</tr>
			<tr>
				<td><button onClick={this.numBerAllClick.bind(this)}>4</button></td>
				<td><button onClick={this.numBerAllClick.bind(this)}>5</button></td>
				<td><button onClick={this.numBerAllClick.bind(this)}>6</button></td>
			</tr>
			<tr>
				<td><button onClick={this.numBerAllClick.bind(this)}>7</button></td>
				<td><button onClick={this.numBerAllClick.bind(this)}>8</button></td>
				<td><button onClick={this.numBerAllClick.bind(this)}>9</button></td>
				<td><button onClick={this.sum.bind(this)}>=</button></td>
			</tr>
			</tbody>
		</table>
		);
	}

}

export default App;