import './App.css'
import WelcomePage from './components/welcomePage/WelcomePage'
import { useState } from 'react'
import DriveContext from './Context/DriveContext'

function App() {
  const [driveData, setDriveData] = useState([])

  return (
    <>
    <DriveContext.Provider value={{driveData, setDriveData}}>
      <WelcomePage/>
    </DriveContext.Provider>  
    </>
  )
}

export default App
