import styled from "styled-components";
import Nav from "components/Nav";
import Cards from "components/Cards";
import axios from "axios";
import Paginate from "components/Paginate";
import Footer from "components/Footer";
import SearchModal from "components/SearchModal";
import { useState } from "react";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = ({ animeList }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Wrapper>
      {showModal && <SearchModal close={() => setShowModal(false)} />}
      <Nav setShowModal={setShowModal} />
      <Cards animeList={animeList.data} />
      <Paginate page={animeList.pagination.current_page} />
      <Footer />
    </Wrapper>
  );
};
export default Home;

export async function getServerSideProps({ query }) {
  let { page = 1 } = query;
  const animeList = await axios
    .get(`https://api.jikan.moe/v4/top/anime?limit=9&page=${page}`)
    .then((res) => res.data);

  return {
    props: { animeList },
  };
}
