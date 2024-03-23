import { Octokit } from '@octokit/rest';

const authToken = import.meta.env.VITE_GITHUB_TOKEN

const octokit = new Octokit({
  auth: authToken,
});

export default octokit;