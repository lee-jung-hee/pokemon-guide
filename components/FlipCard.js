"use client";

import { useState } from "react";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

const FlipImageContainer = styled.div`
  transform-style: preserve-3d;
  width: 200px;
  height: 200px;
  position: relative;
  transform: ${(props) => (props.flipped ? "rotateY(180deg)" : "rotateY(0)")};
  transition: 0.5s;
`;

const FrontImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
`;
const BackImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  position: absolute;
`;

export default function FilpCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <>
      <FlipImageContainer flipped={flipped ? "flip" : ""}>
        <FrontImage src={front} />
        <BackImage src={back} />
      </FlipImageContainer>
      <button onClick={() => setFlipped((prev) => !prev)}>뒤집기</button>
    </>
  );
}
