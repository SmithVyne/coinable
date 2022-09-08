import styled from "styled-components";
import Nav from "components/Nav";
import Cards from "components/Cards";
import axios from "axios";
import Paginate from "../components/Paginate";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Home = ({ animeList, page }) => {
  console.log(animeList);
  return (
    <Wrapper>
      <Nav />
      <Cards animeList={animeList} />
      <Paginate page={page} />
    </Wrapper>
  );
};
export default Home;

export async function getServerSideProps({ query }) {
  const { page = 1 } = query;

  const animeList = await axios
    .get(`https://api.jikan.moe/v4/top/anime?limit=9&page=${page}`)
    .then((res) => res.data.data);

  return {
    props: { animeList, page },
  };
}
