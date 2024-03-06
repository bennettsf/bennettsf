import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import LatestRepos from './components/latest_repos/LatestRepos'
import Introduction from './components/introduction/Introduction'

const App = () => {

  const currentTheme = localStorage.getItem('currentTheme')
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light')

  useEffect(() => {
    localStorage.setItem('currentTheme', theme)
  }, [theme])

  return (
    <div className={`container ${theme}`}>
      <Navbar 
        theme={theme} 
        setTheme={setTheme}
      />
      <div className='content' data-theme={theme == 'light' ? 'light' : 'dark'}>
        <LatestRepos 
           
        />
        <Introduction 
          
        />
      </div>
    </div>
  )
}

export default App