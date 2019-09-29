import React,{useState, useEffect} from 'react';

import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';
import { TextField, withStyles } from '@material-ui/core';
import styles from './style';
import axios from 'axios';
import applyConverters from 'axios-case-converter'
import Button from '@material-ui/core/Button';
function App(props){
    
    return (
        <>
            <View props={props}/>            
        </>
    )
}

function RequestService(){
    return (
        console.log("请求服务器")
    )
}

function View(ps){
    console.log("321")
    const { classes } = ps.props
    const [loadPending,setLoadPending] = useState(false);
    const [inputDisabled,setInputDisabled] = useState(true);
    const [entAdminId,setEntAdminId] = useState('');
    const [entName,setEntName] = useState('');
    const [entContact,setEntContact] = useState('');
    const [entEmail,setEntEmail] = useState('');
    const [entContactPhone,setEntContactPhone] = useState('');
    useEffect(()=>{
        const ents = 100;      
        const resolve = '';         
        applyConverters(axios)({
          method: 'GET',          
          url: 'http://hestech.cn:8080/api/v1/ents/100',
          timeout: 300,
          headers: {
            'x-token': 'XTb773ff8e-6207-42ad-bb84-657bfff02a4a'
          }
        })
          .then(function (response) {
            if (response.data.code !== 0) {
               console.log('error');       
               console.log(response)      
            } else {
                console.log(response)      
               setEntName(response.data.body.enterprise.name)    
               setEntAdminId(response.data.body.enterprise.adminId)    
               setEntContact(response.data.body.enterprise.contact)    
               setEntEmail(response.data.body.enterprise.contactEmail)    
               setEntContactPhone(response.data.body.enterprise.contactPhone)    
            }
          })
          .catch(function (error) {
            // exception
          
          })      
        });
    function editContact(){
        if(inputDisabled){
            setInputDisabled(false);
        }else{
            //添加到数据库，明天来完成
        }
    }
    return (
        <>  
            {loadPending && (
            <CircularProgress />
             )}
            <div className={classes.field}>
                <Typography variant="h6"  gutterBottom>
                    企业信息
                </Typography>
            </div>
            <div className={classes.field}>
            <Typography variant="body1" gutterBottom>
                管理员账号
                <span className={classes.field}>{entAdminId}</span>
            </Typography>
            </div>
            
            <div className={classes.field}>
                <TextField   
                    id="outlined-name"
                    disabled={inputDisabled}
                    label="公司或组织名"
                    margin="dense"                
                    required               
                    variant="outlined"
                    value={entName}                    
                    onChange={ e=> setEntName(e.target.value)}                   
                />
           </div>
           <div className={classes.field}>
             <TextField      
                disabled={inputDisabled}
                label="联系人"
                margin="dense"                
                required               
                variant="outlined"
                value={entContact}                    
                onChange={ e=> setEntContact(e.target.value)}
            />
            </div>
            <div className={classes.field}>
                <TextField       
                    disabled={inputDisabled}
                    label="联系人邮箱"
                    margin="dense"                
                    required               
                    variant="outlined"
                    value={entEmail}                    
                    onChange={ e=> setEntEmail(e.target.value)}
                />
             </div>
             <div className={classes.field}>
                <TextField 
                    disabled={inputDisabled}
                    label="联系人电话"
                    margin="dense"                
                    required               
                    variant="outlined"
                    value={entContactPhone}                    
                    onChange={ e=> setEntContactPhone(e.target.value)}
                />
            </div>
            <div className={classes.field}>
            <Button variant="contained" color="primary" onClick={editContact} className={classes.margin}>
                {inputDisabled?'修改信息':'保存'}
            </Button>
            </div>
            
        </>
    )
}
export default withStyles(styles)(App);
