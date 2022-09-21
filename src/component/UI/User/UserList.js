import React from "react";
import Card from "../Card/Card";
import classes from './UserList.module.css'
const UserList = props => <Card className={classes.users}>
    <ul>
    {
        props.users.map(user=>{
            return<li key={user.id}>{user.name}</li>
        })
    }
    </ul>
</Card>

export default UserList;