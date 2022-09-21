import React,{useState} from 'react';
import Card from '../Card/Card';
import classes from './AddUser.module.css';
import Button  from '../Button/Button';

const AddUser = props => {
    const [name,setName] = useState('');
    function addUser(event){
        // preventDefault prevents reloading the ptime when this function is executed
        event.preventDefault();
        if(name.trim().length === 0 )
        return;
        
        props.onAddUser(name)
        setName('')
        
    }
    function nameChangeHandler(event){
        setName(event.target.value)
    }
    
    return(
        <Card className={classes.input}>
            <form onSubmit={addUser}>
            <label htmlFor='name'>Add Task:</label>
            <input id='name' type="text" onChange={nameChangeHandler} value={name}></input>
            <Button text= "Add" type="submit"/>
            </form>
        </Card>
        
    );
};
export default AddUser;