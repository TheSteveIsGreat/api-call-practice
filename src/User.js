import { useState } from "react";
import AddAndEditUser from "./AddAndEditUser";

const User = (props) => {
  const [showForm, setShowForm] = useState (false)
  
  const renderUser = () => {

    return (
      <>
      <h1>{props.first_name} {props.last_name}</h1>
      <p>Email: {props.email}</p>
      <p>ID: {props.id}</p>
      <img src={props.avatar}></img>
      <br></br>
      <button style={{margin: '10px'}} onClick={() => props.deleteUser(props.id)}>Delete User</button>
      </>
    )
  }

  return (
    <div style={{border: '2px solid green', margin: '20px'}}>
      <button onClick={()=> setShowForm(!showForm)} style={{margin: '10px'}}>{showForm ? 'Cancel' : 'Edit User'}</button>
      {showForm ? <AddAndEditUser {...props} setShowForm={setShowForm}/> : renderUser()}
    </div>
  )
}

export default User