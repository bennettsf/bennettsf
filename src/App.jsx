import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import LatestRepos from './components/latest_repos/LatestRepos'
import Introduction from './components/introduction/Introduction'
import GithubCard from './components/GithubCard/GithubCard'
import discordpy from './assets/discordpy.png'
import wordgame from './assets/wordgame.png'
import personalpage from './assets/personalpage.png'
import Coursework from './components/Coursework/Coursework'

const App = () => {

  const currentTheme = localStorage.getItem('currentTheme')
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light')

  useEffect(() => {
    localStorage.setItem('currentTheme', theme)
  }, [theme])

  return (
    <div>
      <div className='back-image'>
      <div className='container' data-theme={theme == 'light' ? 'light' : 'dark'}>
      
        <Navbar 
          theme={theme} 
          setTheme={setTheme}
        />
        <div className='content'>
          <LatestRepos />
          <Introduction />
          <Coursework />
          <div className='card-content'>
            <h2>Past Projects:</h2>
            <div className="github-cards-container">
            <GithubCard 
                repoName={'PersonalPage'}
                logo={personalpage}
                link={'https://github.com/bennettsf/bennett-react'}
              />  
              <GithubCard 
                repoName={'IronForgedBot'}
                logo={discordpy}
                link={'https://github.com/rmbarron/IronForgedBot'}
              />
              <GithubCard 
                repoName={'WordGame'}
                logo={wordgame}
                link={'https://github.com/bennettsf/WordGame'}
              />          
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App