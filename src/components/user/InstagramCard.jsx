import React, {useRef, useState} from 'react'
import HeaderCardAvatar from './HeaderCardAvatar';
import { Divider, Card, Input, Avatar, Grid } from "@nextui-org/react";
import BodyCardFeed from "./BodyCardFeed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceLaughSquint,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

const InstagramCard = ({data}) => {

  const [comments, setComments] = useState([
    {
      author: "an1002",
      content: "Nice bro :>",
    },
    {
      author: "huy002",
      content: "Have good day",
    },
    {
      author: "teo1002",
      content: "Good !!!",
    },
  ]);

  const comment = useRef('');

  const postComment = () => {
    setComments([...comments, {author: 'hei3000', content: comment.current.value}]);
    comment.current.value = '';
  }


  return (
    <Card
      bordered
      shadow={false}
      cover
      style={{
        width: "100%",
        borderRadius: 0,
        borderCollapse: "collapse",
        borderWidth: 1,
      }}
    >
      <Card.Header>
        <HeaderCardAvatar info={data} />
      </Card.Header>
      <Divider />
      <Card.Body css={{ borderRadius: '0px !important' }}>
        <Card.Image
          src={data?.avatar_url}
          width="100%"
          height="auto"
          alt={`${data?.name} image`}
          autoResize={true}
          css={{borderRadius: '0px !important', border: 0}}
          showSkeleton={true}
        />
        <BodyCardFeed info={data} comments={comments} />
      </Card.Body>
      <Divider />
      <Card.Footer>
        <Grid.Container style={{
            display: "flex",
            alignItems: "center",
          }}>
          <Grid xs={2} sm={2} style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
          <FontAwesomeIcon icon={faFaceLaughSquint} size="xl" />
          </Grid>
          <Grid lg={8} xl={8} md={8} xs={8}>
          <Input
              size="lg"
              aria-label="input"
              placeholder="Type you comment"
              fullWidth={true}
              clearable
              ref={comment}
              onKeyUp={(e) => {
                if (e.key === 'ENTER') postComment();
              }}
            />
          </Grid>
          <Grid xs={2} sm={2} style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
          <Avatar icon={<FontAwesomeIcon icon={faPaperPlane} size="lg" />} onClick={() => postComment()} />
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  )
}

export default InstagramCard