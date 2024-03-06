const githubApiToken = import.meta.env.VITE_APP_GITHUB_TOKEN
const apiUrl = 'https://api.github.com/users/bennettsf/repos?sort=updated';

const fetchRecentRepos = async () => {
    try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${githubApiToken}`,
          },
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        

      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
}

export default fetchRecentRepos
