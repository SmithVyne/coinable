import React from "react";
import styled from "styled-components";
import Card from "components/Card";

const Wrapper = styled.div`
  margin: 38px auto 33px;
  width: 712px;
  display: grid;
  grid-gap: 55px 38px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 282px;
  @media (max-width: 712px) {
    padding: 0 14px;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 400px;
    width: 100%;
    grid-gap: 17px;
  }
  @media (max-width: 500px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

export default function Cards({ animeList }) {
  return (
    <Wrapper>
      {animeList.map((anime) => (
        <Card key={anime.mal_id} {...anime} />
      ))}
    </Wrapper>
  );
}
