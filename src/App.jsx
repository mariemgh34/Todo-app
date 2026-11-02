import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ListTask from './components/ListTask'
import Addtask from './components/Addtask'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <Addtask />
      <ListTask />
    </>
  )
}

export default App
