import { useState } from 'react';
import axios from 'axios';
import User from './User';
import './App.css';
import AddAndEditUser from './AddAndEditUser';

function App() {

  const [users, setUsers] = useState ([])
  const [loading, setLoading] = useState (false)
  const [error, setError] = useState (null)
  const [showForm, setShowForm] = useState (false)


  const getUsers = () => {
    setLoading(true)
    setUsers([])
    setError(null)

    axios
      .get('https://reqres.in/api/users?delay=1')
      .then((res) => {
        console.log('Data from site:', res.data.data)
        setUsers(res.data.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log('error:', err)
        setError('Uh oh! You done goofed!')
        setLoading(false)
      })
  }

  const renderUsers = () => {
    return users.map((u) => {
      return <User key={u.id} {...u} updateUser={updateUser} deleteUser={()=> deleteUser(u.id)} />
    })
  }

  const addUser = (user) => {
    console.log('User added:', user)
    return setUsers([user, ...users])
  }

  const deleteUser = (id) => {
    console.log('User deleted ID:', id)
    setUsers(users.filter(u => u.id !== id))
  }

  const updateUser = (user) => {
    console.log('User updated:', user)
    let updatedUsers = users.map((u) => {
      if (u.id === user.id) {
        return user
      }
      return u
    })
    setUsers(updatedUsers)
  }

  return (
    <div className="App" style={{border: '2px solid black', margin: '10px', padding: '10px'}}>
      <h1>API Call</h1>
      <button onClick={() => setShowForm(!showForm)}>{showForm ? 'Hide' : 'Add User'}</button>
      {showForm && <AddAndEditUser addUserCB={addUser} />}
      <button disabled={loading} onClick={getUsers}>{loading ? 'Loading' : 'Get Users'}</button>
      <div>{renderUsers()}</div>
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;
