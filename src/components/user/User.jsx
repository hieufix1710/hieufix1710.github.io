import { Grid } from '@nextui-org/react';
import React, {useState, useEffect} from 'react';
import UserCard from './UserCard';
import { Octokit } from 'octokit';

const User = () => {

  const [info, setInfo] = useState(null);

  useEffect(() => {
    const octokit = new Octokit({ auth: "" });

    async function getGithubUsers() {
      const result = await octokit.request(`GET /users/${"hieufix1710"}`);
      if (result?.data) {
        setInfo(result.data);
      }
    }

    getGithubUsers();
  }, []);


  return (
    <Grid.Container justify='center'>
      <UserCard info={info} />
    </Grid.Container>
  )
}

export default User