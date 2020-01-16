import React, {useState, useEffect} from 'react';
import './App.css';
import Disabled from './disable'

export const context = React.createContext();

const App =() => {

  const [disabled, setDisable] = useState(false)
  const [count, setCount] = useState(0);
  const [users,setUsers] = useState([])
  
  useEffect(() => {    
    placeHolder()
  },[])

  const placeHolder = async () => {
    const place = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await place.json()
    setUsers(data)
    console.log(data)
  }

  const renderUsers = () =>{
    return users.map(user => {

      return <div>{user.name}{user.id} {user.email}</div>
    })
  }

  return (
    <>
      {/* <button disabled={disabled} onClick={() => setDisable(true)}>click</button>    */}
      <p>You clicked {count} times</p>
      <button disabled={disabled} onClick={() => {
        setCount(count + 1)
        setDisable(true)
      }
    }>count</button>
    {renderUsers()}
    <context.Provider value={true}>
    <Disabled />
    </context.Provider>
    
    </>
  );
}

export default App;
