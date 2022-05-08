import { Button, Grid } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import { INDEX_PATH } from "../constants/UriPath";

const NotFound = () => {
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
          <h4>Sorry this page is not available. :(</h4>

          <Link to={INDEX_PATH}>
            <Button bordered color="gradient" size='sm'>
              Back to Home Page{" "}
            </Button>
          </Link>
        </div>
      </Grid>
    </Grid.Container>
  );
};

export default NotFound;
