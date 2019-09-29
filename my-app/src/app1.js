import React, { useState } from 'react'
import style from './style'
import {
  Button, Checkbox, Snackbar,
  Table, TableHead, TableRow, TableCell, TableBody,
  withStyles,makeStyles 
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper';



const rows = [
	{id: 0, name: "四川成都123", calories: "2019-09-16 22:00", fat: "坐席姓名", carbs: "无效对话"},
	{id: 1, name: "四川成都123", calories: "2019-09-16 22:00", fat: "坐席姓名", carbs: "无效对话"},
	{id: 2, name: "四川成都123", calories: "2019-09-16 22:00", fat: "坐席姓名", carbs: "无效对话"},
	{id: 3, name: "四川成都123", calories: "2019-09-16 22:00", fat: "坐席姓名", carbs: "无效对话"},
];
const HeadRows= [
	{ id: "visitorId", label: "访客" },
	{ id: "createTime", label: "拉黑时间" },
	{ id: "customerName", label: "操作人" },
	{ id: "reason", label: "拉黑原因" },
	{ id: "action", label: "操作" },
]

function deleteVisitor(customer){
	console.log(customer);
}


function blackList(props){
	const { classes } = props;
	return (
	<div className={classes.root}>
	  <div className={classes.actionContainer}>
      <div className={classes.filterContainer}>
        <h3 className={classes.marginRight15}>访客黑名单</h3>
        {/* 后期完成功能
		<Button variant="contained" color="primary" className={classes.marginRight15} onClick={()=>{}}>
          {'批量解禁'}
		</Button>
		*/}       
      </div>     
   	 </div>
		<Paper >	    
	      <Table >
	        <TableHead>
	          <TableRow>
				  {/*后期完成功能
	          	<TableCell style={{width:42,padding:0}}>	
				<Checkbox
					indeterminate={false}
					checked={false}
					onChange={()=>{alert("1")}}            
					/>
				</TableCell>
				  */}
	          {HeadRows.map(row =>(
	          	<TableCell className={classes.tableHead}  key={row.id}>{row.label}</TableCell>
	          ))}			
			  </TableRow>           
	        </TableHead>
	        <TableBody>
	          {rows.map(row => (
	            <TableRow key={row.id}>
					{/* 
			      <TableCell style={{width:42,padding:0}}>
		          
				  <Checkbox 
		            indeterminate={false}
		            checked={false}
		            onChange={()=>{}}
	            
	          		/>
				  </TableCell>
				   */}
	              <TableCell component="th" scope="row">
	                {row.name}
	              </TableCell>
	              <TableCell align="left">{row.calories}</TableCell>
	              <TableCell align="left">{row.fat}</TableCell>
	              <TableCell align="left">{row.carbs}</TableCell>	              
				  <TableCell align="left">
					  <Button color="primary" value={row.id} className={classes.tableButton}  onClick={()=> deleteVisitor(row)} >
                      {'解禁'}
                   	 </Button>
					</TableCell>
	            </TableRow>
			  ))}			  
	        </TableBody>
	    </Table>
	    </Paper>  	 
    </div>
	)
}






export default withStyles(style)(blackList)