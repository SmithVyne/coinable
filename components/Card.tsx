import Image from "next/image";
import Link from "next/link";
import { TAnime } from "types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  :hover {
    cursor: pointer;
  }
`;

const Img = styled(Image)`
  border-radius: 10px;
`;

const Title = styled.span`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  padding: 0 0 11px 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  height: 30%;
  min-height: fit-content;
  max-height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    #d9d9d9 0%,
    rgba(0, 0, 0, 0) 0.01%,
    rgba(0, 0, 0, 0.9) 100%
  );
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
`;

export default function Card({ mal_id, images, title }: TAnime) {
  return (
    <Link href={`/anime/${mal_id}`}>
      <Wrapper>
        <Img
          alt={`image${mal_id}`}
          src={images.jpg["image_url"]}
          layout="fill"
        />
        <Title>{title}</Title>
      </Wrapper>
    </Link>
  );
}
