import React from "react";
import { Grid } from "@nextui-org/react";

const PublicLayout = () => {
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
          <img src="/github.logo.png" alt="logo" width="100" height="100" />
        </div>
      </Grid>
    </Grid.Container>
  );
};

export default PublicLayout;
