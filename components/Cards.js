import React from "react";
import styled from "styled-components";
import Card from "components/Card";
import Link from "next/link";

const Wrapper = styled.div`
  margin: 38px auto 33px;
  width: 712px;
  display: grid;
  grid-gap: 55px 38px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 282px;
`;

export default function Cards({ animeList }) {
  // console.log(new Set(animeList.map((e) => e.mal_id)).size == 25);

  return (
    <Wrapper>
      {animeList.map((anime) => (
        <Card key={anime.mal_id} {...anime} />
      ))}
    </Wrapper>
  );
}
