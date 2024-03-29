import React from "react";
import {Avatar,Row,Col,Text,Button,Spacer,Grid} from "@nextui-org/react";

export const UserTwitterCard = ({
  info,
  avatarUrl,
  avatarProps,
  css,
  onClick,
  ...props
}) => {
  const [following, setFollowing] = React.useState(false);

  return (
    <Grid.Container
      className="user-twitter-card__container"
      css={{
        mw: "260px",
        borderRadius: "$lg",
        padding: "$sm",
        ...css
      }}
      onClick={onClick}
      {...props}
    >
      <Row justify="space-between" align="center">
        <Col span={3}>
          <Avatar
            size="lg"
            src={info?.avatar_url}
            color="gradient"
            bordered
            // squared
            {...avatarProps}
          />
        </Col>
        <Col span={9}>
          <Row>
            <Grid xs={12} direction="column">
              <Text className="user-twitter-card__text" b size={15} style={{marginBottom: 6}}>
                {info?.name}
              </Text>
              <Text
                className="user-twitter-card__text"
                size={14}
                css={{ mt: "-$3" }}
                color="#888888"
              >
                {info?.twitter_username}
              </Text>
            </Grid>
            <Button
              auto
              rounded
              onClick={() => setFollowing(!following)}
              css={{
                maxHeight: "$space$12",
                fs: "$tiny",
                fontWeight: "$semibold",
                borderColor: following ? "$foreground" : "$primary",
                color: following ? "$foreground" : "$white"
              }}
              color="primary"
              bordered={following}
            >
              {following ? "Unfollow" : "Follow"}
            </Button>
          </Row>
        </Col>
      </Row>
      <Spacer y={0.3} />
      <Grid.Container className="user-twitter-card__username-container">
        <Grid xs={12}>
          <Text
            className="user-twitter-card__text"
            size={14}
            css={{ mt: "$1" }}
            color="#888888"
          >
            {`${info?.bio} 🎉`} 
          </Text>
        </Grid>
      </Grid.Container>
      <Spacer y={0.5} />
      <Grid.Container
        className="user-twitter-card__metrics-container"
        justify="flex-start"
        alignContent="center"
      >
        <Text className="user-twitter-card__text" size={14} color="#888888">
          <Text
            b
            color="foreground"
            className="user-twitter-card__text"
            size={14}
          >
            {
              info?.following
            }
          </Text>
          &nbsp;Following
        </Text>
        <Spacer inline x={0.5} />
        <Text className="user-twitter-card__text" size={14} color="#888888">
          <Text
            b
            color="foreground"
            className="user-twitter-card__text"
            size={14}
          >
            {info?.followers}
          </Text>
          &nbsp;Followers
        </Text>
      </Grid.Container>
    </Grid.Container>
  );
};
