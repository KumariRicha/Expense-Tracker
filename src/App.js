import React from 'react';
// import AddUser from './component/UI/User/AddUser';
// import UserList from './component/UI/User/UserList';
import ExpenseItem from './component/ExpenseItem';

function App() {
  // const [userList,setUserList] = useState([])
  // function onAddingUser(uName){
  //   console.log("In App.js: ", uName)
  //   return setUserList((prevState)=> [...prevState,{name: uName, id: Math.random().toString()}])
  // }
  return (
    <div>
      <ExpenseItem/>
    </div>
  );
}

export default App;
{/* <AddUser onAddUser={onAddingUser}/>
<UserList users={userList}/> */}