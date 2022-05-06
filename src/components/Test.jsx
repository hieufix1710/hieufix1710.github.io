import React, { useState } from "react";
import { Card, Grid, Text, Avatar, Tooltip, Button, Spacer } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { UserTwitterCard } from "./UserTwitterCard";

const Test = () => {
  const [info, setInfo] = useState({
    avatar: "https://avatars.githubusercontent.com/u/64394298?v=4",
    fullName: "Hiu Nguyen",
    username: "@_hiu.1710",
    description:
      "Don’t run away from your mistakes. Fix them, learn from them and understand what you need to do so that you never repeat them.",
  });

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
                src={info?.avatar}
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
                <h2
                  style={{
                    margin: 0,
                  }}
                >
                  _hiu.1710
                </h2>
                <Button  auto bordered rounded color="secondary" css={{ ml: 20 }}>
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Notify Me
                  </Text>
                </Button>
              </div>
              <Spacer y={0.5} />
              <span>
                <strong>Hieu Nguyen</strong>
              </span>
              <Spacer y={0.3}/>
              <div
                style={{
                  color: "rgba(var(--f52,142,142,142),1)",
                }}
              >
                Software Developer
              </div>
              <Spacer y={0.3}/>
              <div>
                <a href="https://www.facebook.com/hiu.1710/">https://www.facebook.com/hiu.1710/</a>
              </div>
            </div>
          </div>
          <Card.Footer>
            <Link
              color="primary"
              target="_blank"
              href="https://github.com/hieufix1710"
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
