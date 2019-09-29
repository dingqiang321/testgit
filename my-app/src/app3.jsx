import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const rows = [
    {id: 0, name: "四川成都123", calories: "2019-09-16 22:00", fat: "坐席姓名", carbs: "无效对话"},
    {id: 1, name: "四川成都123", calories: "2019-09-16 22:00", fat: "坐席姓名", carbs: "无效对话"},
    {id: 2, name: "四川成都123", calories: "2019-09-16 22:00", fat: "坐席姓名", carbs: "无效对话"},
    {id: 3, name: "四川成都123", calories: "2019-09-16 22:00", fat: "坐席姓名", carbs: "无效对话"},
  ];

  
 

function App3(){
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
      });
    const handleChange = event => {
        //const check =  event.target.value;
       // setState({ checked0:true })
    };
    return (
        <div>
            <Checkbox
                checked={state.checkedA}
                onChange={handleChange('checkedA')}
                value="checkedA"
                inputProps={{
                'aria-label': 'primary checkbox',
                }}
            />
            <Checkbox
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
                color="primary"
                inputProps={{
                'aria-label': 'secondary checkbox',
                }}
            />
        </div>
    )
}


export default App3;