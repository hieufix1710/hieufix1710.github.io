import React from "react";
import { Grid, Card, Avatar, Text } from "@nextui-org/react";

const ControlPad = () => {
  return (
    <Grid.Container gap={1} justify="center">
      <Grid sm={12} md={6} xs={12}>
        <Card
          hoverable
          style={{
            minWidth: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text h4>Options</Text>
          <Grid>
            <Avatar
              squared
              icon={<span>CV</span>}
            />
          </Grid>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default ControlPad;
