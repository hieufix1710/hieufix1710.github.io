import { Grid, Spacer } from '@nextui-org/react'
import React from 'react'

const Comment = ({author, content}) => {
  return (
    <Grid.Container gap={0.3} style={{
      marginLeft: 10
    }}>
      <Grid xs>
          <span style={{
            fontWeight: 'bold'
          }}>{author}</span>
          <Spacer y={0.5} />
          <span>{content}</span>
      </Grid>
    </Grid.Container>
  )
}

export default Comment