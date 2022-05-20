import React from "react";
import { Avatar, Button, Spacer } from "@nextui-org/react";
import { Link } from "react-router-dom";
import {USER_PATH} from '../../constants/UriPath';

const HeaderCardAvatar = ({ info }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Link replace to={`${USER_PATH}/${info?.name}`}>
        <Avatar
          size="lg"
          src={info?.avatar_url}
          color="gradient"
          bordered
          // squared
        />
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginLeft: 10,
        }}
      >
        <strong>{info?.name}</strong>
        <Spacer y={0.1} />
        <small>{info?.name}</small>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "flex-start",
          margin: "0 0 19px 25px",
        }}
      >
        <Button bordered size="xs">
          Follow
        </Button>
      </div>
    </div>
  );
};

export default HeaderCardAvatar;
