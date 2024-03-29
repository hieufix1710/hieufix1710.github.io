import React, {useEffect} from 'react';
import {
  Card,
  Grid,
  Text,
  Avatar,
  Tooltip,
  Button,
  Spacer,
} from "@nextui-org/react";
import { useMediaQuery } from "../../helpers/useMediaQuery";
import { Link } from "@nextui-org/react";
import { UserTwitterCard } from "../UserTwitterCard";

const UserCard = ({info}) => {

  const isMd = useMediaQuery(960);

  useEffect(() => {
    if (info) {
      document.title = `${info?.name}`;
    }
  }, [info]);

  return (
    <Grid xs={12} sm={8} md={7} lg={6} xl={5} css={{marginTop: 100}}>
        <Card
          hoverable
          style={{
            minWidth: "100%",
            display: "flex",
            flexDirection: "column",
            height: isMd ? 450 : "",
          }}
        >
          <Card.Body
            style={{
              position: isMd ? "" : "relative",
            }}
          >
            {isMd ? (
              ""
            ) : (
              <Card.Image
                crossOrigin="anonymous"
                src={"/github.logo.png"}
                height="200px"
                width="100%"
                alt="Card background"
                style={{
                  opacity: 0.1,
                }}
              />
            )}
            <div
              style={{
                width: isMd ? "97%" : "",
                display: "flex",
                flexDirection: isMd ? "column" : "row",
                padding: isMd ? "0" : 15,
                alignItems: isMd ? "center" : "",
                borderBottom: "1px solid #eaeaea",
                position: isMd ? "" : "absolute",
                // width: isMd ? "" : "100%",
              }}
            >
              <Grid>
                <Tooltip
                  placement={isMd ? "bottomStart" : "leftStart"}
                  content={<UserTwitterCard info={info} />}
                >
                  <Avatar
                    css={{ size: "$40" }}
                    zoomed
                    src={info?.avatar_url}
                    color="gradient"
                    bordered
                  />
                </Tooltip>
              </Grid>
              {info ? (
                <Grid
                  style={{
                    // width: "80%",
                    marginLeft: isMd ? 10 : 30,
                    padding: 10,
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
                    {isMd ? (
                      <Text h2 css={{ m: 0 }}>
                        {info?.name}
                      </Text>
                    ) : (
                      <Text h1 css={{ m: 0 }}>
                        {info?.name}
                      </Text>
                    )}
                    <Link href="/">
                      <Button
                        auto
                        bordered
                        rounded
                        color="secondary"
                        css={{ ml: 100 }}
                      >
                        <Tooltip content={"Contact to me"}>
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
                    </Link>
                  </div>
                  <Spacer y={0.5} />
                  <div
                    style={{
                      color: "rgba(var(--f52,142,142,142),1)",
                      backgroundImage: `url("/github.logo.png")`
                    }}
                  >
                    {info ? "Software Developer" : ""}
                  </div>
                  <Spacer y={0.3} />
                  <span>
                    <small>{info?.location}</small>
                  </span>
                  <Spacer y={0.3} />
                  <div>
                    <strong href={info?.blog}>{info?.company}</strong>
                  </div>
                  <Spacer y={0.3} />
                  <div>
                    <a href={info?.blog}>{info?.blog}</a>
                  </div>
                </Grid>
              ) : (
                ""
              )}
            </div>
          </Card.Body>

          {info ? (
            <Card.Footer>
              <Link color="primary" target="_blank" href={info?.html_url}>
                Visit my profile on GitHub.
              </Link>
            </Card.Footer>
          ) : (
            ""
          )}
        </Card>
      </Grid>
  )
}

export default UserCard