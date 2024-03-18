import React from 'react'
import "./GithubCard.css"

function GithubCard({repoName, logo, link}) {
  return (
    <div className='repo-card'>
        <a href={link} target='_blank'>
            <div>
                <h3>{repoName}</h3>
                <img className='project-logo' href={link} src={logo} alt='projectLogo' />
            </div>
        </a>
    </div>
  )
}

export default GithubCard