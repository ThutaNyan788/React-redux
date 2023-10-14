import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT } from './actions/counter';
import { LOGGED, NOT_LOGGED } from './actions/isLogged';

const App = () => {
  const count = useSelector((state)=> state.counter);
  const isLogged = useSelector((state)=> state.isLogged);
  const dispatch = useDispatch();
  return (
    <>
      <div>Count : {count}</div>
      <div>
        <button onClick={()=> dispatch(INCREMENT())}>INCREMENT</button>
        <button onClick={()=> dispatch(DECREMENT())}>DECREMENT</button>
      </div>

      <div>
          <h3>Login or not</h3>
          <div>
          {isLogged ? <h1>Yes , This user is login</h1> : <h1>NO, Please Login</h1>}
        <button onClick={()=> dispatch(LOGGED())}>Login</button>
        <button onClick={()=> dispatch(NOT_LOGGED())}>Logout</button>
      </div>
      </div>
    </>
  )
}

export default App