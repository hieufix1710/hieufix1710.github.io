import React from "react";
import { Progress, Grid, Button, Spacer } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { INDEX_PATH } from "../../constants/UriPath";

const Loading = () => {
  return (
    <Grid.Container
      style={{
        width: "100%",
        height: window.innerHeight,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        xs
        style={{
          width: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4>It's our fault not yours.</h4>
          <Progress
            indeterminated
            value={50}
            color="gradient"
            status="secondary"
          />
          <Spacer y={1} />
          <Link to={INDEX_PATH}>
            <Button bordered size="sm" color="gradient">
              Back to Home Page{" "}
            </Button>
          </Link>
        </div>
      </Grid>
    </Grid.Container>
  );
};

export default Loading;
