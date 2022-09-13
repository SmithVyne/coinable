import styled from "styled-components";
import Nav from "components/Nav";
import Cards from "components/Cards";
import axios from "axios";
import Paginate from "components/Paginate";
import Footer from "components/Footer";
import SearchModal from "components/SearchModal";
import { useState } from "react";
import { TAnimeResponse } from "types";
import { GetServerSidePropsContext } from "next";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = ({ response }: { response: TAnimeResponse }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Wrapper>
      {showModal && <SearchModal close={() => setShowModal(false)} />}
      <Nav onClick={() => setShowModal(true)} />
      <Cards animeList={response.data} />
      <Paginate page={response.pagination.current_page} />
      <Footer />
    </Wrapper>
  );
};
export default Home;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  let { page = 1 } = ctx.query;
  const response = await axios
    .get(`https://api.jikan.moe/v4/top/anime?limit=9&page=${page}`)
    .then((res) => res.data);

  return {
    props: { response },
  };
}
