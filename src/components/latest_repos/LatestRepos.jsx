import React from 'react'
import './LatestRepos.css'
import octokit from '../../utils/octokit'
import { useEffect, useState } from 'react';


function LatestRepos() {
  
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await octokit.repos.listForAuthenticatedUser({
          sort: 'updated',
        });

        setRepos(response.data.slice(0, 7));
      } catch (error) {
        console.error('Error fetching GitHub repos:', error.message);
      }
    };

    fetchRepos();
  }, []);


  return (
    <div className='latest-repos'>
        <h2>Latest Repository Updates:</h2>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target='_blank'>
                <span>{repo.name}</span>
              </a>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default LatestRepos