import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'


function App() {
  

  return (
    <UserContextProvider>
      <h1> React with Chai </h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
