import React, { useEffect, useState } from "react";
import { Grid } from "@nextui-org/react";

import { Octokit } from "octokit";
import { useMediaQuery } from "../helpers/useMediaQuery.js";
import InstagramCard from "./user/InstagramCard.jsx";
const Home = ({ theme }) => {
  const [info, setInfo] = useState(null);
  const isMd = useMediaQuery(960);

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

  useEffect(() => {
    if (info) {
      document.title = `${info?.name}`;
    }
  }, [info]);

  return (
    <Grid.Container
      gap={2}
      justify="center"
      style={{
        marginTop: isMd ? 1 : 1,
      }}
    >
      <Grid xs={12} lg={4} xl={4} md={4}>
        <InstagramCard data={info} />
      </Grid>
    </Grid.Container>
  );
};

export default Home;
