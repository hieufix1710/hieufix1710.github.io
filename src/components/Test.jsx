import React, { useEffect, useState } from "react";
import {
  Card,
  Grid,
  Text,
  Avatar,
  Tooltip,
  Button,
  Spacer,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { UserTwitterCard } from "./UserTwitterCard";
import { Octokit } from "octokit";

const Test = () => {
  const [info, setInfo] = useState(null);


  useEffect(() => {
    const octokit = new Octokit({auth: process.env.REACT_APP_PERSONAL_TOKEN});
    const fetchUser = async () => {
      const res = await octokit.request(`GET /users/hieufix1710`);
      
      if (res?.data) {
        setInfo(res.data);
      }
    }

    return () => fetchUser();

  }, [])

  return (
    <Grid.Container
      gap={2}
      justify="center"
      style={{
        marginTop: "10%",
      }}
    >
      <Grid sm={12} md={5} xs={12}>
        <Card
          hoverable
          style={{
            minWidth: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 15,
              borderBottom: "1px solid #eaeaea",
            }}
          >
            <Tooltip placement="top" content={<UserTwitterCard info={info} />}>
              <Avatar
                css={{ size: "$40" }}
                zoomed
                src={info?.avatar_url}
                color="gradient"
                bordered
              />
            </Tooltip>
            <div
              style={{
                width: "50%",
                marginLeft: 25,
                padding: 15,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  textAlign: "center",
                  margin: 1,
                }}
              >
                <Text h2 css={{m: 0}}>{info?.name}</Text>
                <Button
                  auto
                  bordered
                  rounded
                  color="secondary"
                  css={{ ml: 20 }}
                >
                  <Tooltip content={'Contact to me :3'}>
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Notify Me
                    </Text>
                  </Tooltip>
                </Button>
              </div>
              <Spacer y={0.5} />
              <span>
                <strong>Hieu Nguyen</strong>
              </span>
              <Spacer y={0.3} />
              <div
                style={{
                  color: "rgba(var(--f52,142,142,142),1)",
                }}
              >
                Software Developer
              </div>
              <Spacer y={0.3} />
              <div>
                <strong href={info?.blog}>
                  {
                    info?.company
                  }
                </strong>
              </div>
              <Spacer y={0.3} />
              <div>
                <a href={info?.blog}>
                  {
                    info?.blog
                  }
                </a>
              </div>
            </div>
          </div>
          <Card.Footer>
            <Link
              color="primary"
              target="_blank"
              href={`https://github.com/${info?.login}`}
            >
              Visit my profile on GitHub.
            </Link>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default Test;
