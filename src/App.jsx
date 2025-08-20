import { useState } from 'react'
import './App.css'
import LoginPage from './pages/loginPage.jsx'
import SignUpPage from './pages/signUpPage.jsx'
import HomePage from './pages/homePage.jsx'
import AdminHomePage from './pages/adminHomePage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/admin/*" element={<AdminHomePage />} />
        <Route path="/*" element={<HomePage />} />  
     </Routes>
    </BrowserRouter>

    

    
  

  


    
      


    </>
  )
}

export default App
