import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Nav from "../components/Nav";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Home = () => {
  return (
    <Wrapper>
      <Nav />
    </Wrapper>
  );
};

export default Home;
