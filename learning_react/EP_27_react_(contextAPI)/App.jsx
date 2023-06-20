
import Header from './components/Header';
import './App.css'
import { Outlet } from "react-router-dom";
// import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
  
return (
      <ThemeProvider>
        <Header/>
        <Outlet/>
      </ThemeProvider>
  )
}
