import { useState } from "react";

const AddAndEditUser = (props) => {
  const [email, setEmail] = useState(props.email ? props.email : '')
  const [first_name, setFirstName] = useState(props.first_name ? props.first_name : '')
  const [last_name, setLastName] = useState(props.last_name ? props.last_name : '')
  const [avatar, setAvatar] = useState(props.avatar ? props.avatar : '')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (props.id) {
      console.log(props.showForm)
      let updatedUser = {id: props.id, first_name, last_name, avatar, email}
      props.updateUser(updatedUser)
      props.setShowForm(false)

    } else {
      let user = { id: Math.random(), first_name, last_name, avatar, email }
      console.log('new user added:', user)
  
      props.addUserCB(user)
      setEmail('')
      setFirstName('')
      setLastName('')
      setAvatar('')
    }
    
  }

  return (
    <div style={{ border: '2px solid blue', margin: '40px', padding: '20px' }}>
      <h1>{props.id ? 'Edit User' : 'Add User'}</h1>
      <form onSubmit={handleSubmit}>
        <p>Email: </p>
        <input value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
        <p>First Name</p>
        <input value={first_name} onChange={(e) => { setFirstName(e.target.value) }}></input>
        <p>Last Name</p>
        <input value={last_name} onChange={(e) => { setLastName(e.target.value) }}></input>
        <p>Avatar</p>
        <input value={avatar} onChange={(e) => { setAvatar(e.target.value) }}></input>
        <br></br>
        <button style={{ margin: '20px' }}>Submit</button>
      </form>
    </div>
  )
}

export default AddAndEditUser