import React, { useState, useEffect } from "react";
import { Col, Grid, Row, Spacer } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faHeart,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import Comment from "./Comment";

const BodyCardFeed = ({ info, comments }) => {
  const [heart, setHeart] = useState(false);
  const [likes, setLikes] = useState(10000);
  

  useEffect(() => {
    const timer = setInterval(
      () => setLikes(likes + Math.floor(Math.random() * 23)),
      100
    );

    return () => {
      clearInterval(timer);
    };
  }, [likes]);

  return (
    <Grid.Container
      style={{
        padding: 10,
      }}
    >
      <Row
        style={{
          padding: 5,
        }}
      >
        <Col
          span={6}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {heart ? (
            <svg
              onClick={() => {
                setHeart(!heart);
              }}
              style={{
                marginLeft: 16,
              }}
              aria-label="Unlike"
              class="_8-yf5 "
              color="#ed4956"
              fill="#ed4956"
              height="24"
              role="img"
              viewBox="0 0 48 48"
              width="24"
            >
              <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
            </svg>
          ) : (
            <FontAwesomeIcon
              icon={faHeart}
              size="xl"
              style={{
                marginLeft: 16,
              }}
              onClick={() => {
                setHeart(!heart);
              }}
            />
          )}

          <FontAwesomeIcon
            icon={faComment}
            size="xl"
            style={{
              marginLeft: 16,
            }}
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            size="xl"
            style={{
              marginLeft: 16,
            }}
          />
        </Col>
        <Col
          span={6}
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <FontAwesomeIcon
            icon={faBookmark}
            size="xl"
            style={{
              marginRight: 16,
            }}
          />
        </Col>
      </Row>
      <Spacer y={0.5} />
      <Row>
        <Col span={12}>
          <strong
            style={{
              margin: "0 0 0 16px",
            }}
          >
            {likes} likes
          </strong>
        </Col>
      </Row>
      <Spacer y={0.5} />
      <Row>
        <Col
          span={12}
          style={{
            marginLeft: 16,
          }}
        >
          <span style={{ fontWeight: "bold" }}>{info?.name}</span>&nbsp;&nbsp;
          <span style={{}}>{info?.bio}🔥</span>
        </Col>
      </Row>
      <Row style={{
        marginTop: 5
      }}>
        <Col span={12}>
          {comments?.map((c, i) => (
            <React.Fragment key={i}>
              <Comment author={c?.author} content={c?.content} />
            </React.Fragment>
          ))}
        </Col>
      </Row>
    </Grid.Container>
  );
};

export default BodyCardFeed;
