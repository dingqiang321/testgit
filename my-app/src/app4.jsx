import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { thisExpression } from '@babel/types';

export default function Checkboxes() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
    checkedF: true,
  });
  const [list, setList] = React.useState([]);

  const handleChange = event => {
    const value = event.target.value; //获取到控件的value
    // const checked = event.target.checked; //获取到控件是否勾选
    // console.log(checked);
    // console.log(`'value='${value}'___checked='${checked}`)
    // const state1 = state;
    // state1[value] = checked;
    // console.log(state1[value]);
    // setState(state1);
    // console.log(state);
    //等价于
    setState({...state,[value]:event.target.checked});
    console.log(state);
  };



  return (
    <div>
      <Checkbox
        checked={state.checkedA}
        onChange={handleChange}
        value="checkedA"
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
      <Checkbox
        checked={state.checkedB}
        onChange={handleChange}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />
      
    </div>
  );
}