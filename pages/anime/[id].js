import React from "react";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`

`;

export default function Anime({ anime }) {
  return <Wrapper>{anime["title"]}</Wrapper>;
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const anime = await axios
    .get(`https://api.jikan.moe/v4/anime/${id}/full`)
    .then((res) => res.data.data);

  return {
    props: { anime },
  };
}
