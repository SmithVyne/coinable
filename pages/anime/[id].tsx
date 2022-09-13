import React from "react";
import axios from "axios";
import styled from "styled-components";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";
import { TAnime } from "types";
import backIcon from "./icons/backIcon.svg";
import verified from "./icons/verified.svg";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 712px;
  margin: 100px auto;
  @media (max-width: 712px) {
    padding: 0 14px;
    width: 100%;
    margin: 23px auto;
  }
`;

const BackToMain = styled.div`
  display: flex;
  gap: 14.59px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  width: fit-content;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const MainInfo = styled.article`
  display: flex;
  gap: 19px;
  margin-top: 48px;
  div.imageWrapper {
    min-width: 270px;
    width: 270px;
    height: 330px;
    position: relative;
    @media (max-width: 450px) {
      min-width: 100%;
      width: 100%;
      height: 330px;
    }
  }
  @media (max-width: 450px) {
    flex-direction: column;
    gap: 0;
    margin-top: 23px;
  }
`;

const RightSide = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 450px) {
    justify-content: center;
    gap: 31px;
  }
`;

const Title = styled.h2`
  display: flex;
  gap: 11px;
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  div {
    display: flex;
    gap: 13px;
    align-items: center;
    width: 100%;
    span:nth-child(1) {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #a7a7a7;
    }
    span:nth-child(3) {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
      min-width: fit-content;
    }
  }
`;
const Line = styled.span`
  border-top: 1px solid #d9d9d9;
  width: 100%;
`;

const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: right;
    color: #000000;
    span.title {
      color: #b9b9b9;
      display: block;
    }
  }
`;

const Description = styled.article`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-top: 34px;
  p.title {
    font-weight: 600;
  }
`;

export default function Anime({ anime }: { anime: TAnime }) {
  const router = useRouter();
  return (
    <Wrapper>
      <BackToMain onClick={router.back}>
        <Image alt="" src={backIcon} />
        Go back to Main
      </BackToMain>
      <MainInfo>
        <div className="imageWrapper">
          <Image
            alt={`image/${anime.title_english}`}
            src={anime.images.jpg.image_url}
            style={{ borderRadius: "10px" }}
            priority={true}
            layout="fill"
          />
        </div>
        <RightSide>
          <Title>
            {anime.title}
            {anime.approved && <Image alt="verifiedSVG" src={verified} />}
          </Title>
          <Categories>
            <div>
              <span>Type</span>
              <Line />
              <span>{anime.type}</span>
            </div>
            <div>
              <span>Source</span>
              <Line />
              <span>{anime.source}</span>
            </div>
            <div>
              <span>Episodes</span>
              <Line />
              <span>{anime.episodes}</span>
            </div>
            <div>
              <span>Status</span>
              <Line />
              <span>{anime.status}</span>
            </div>
          </Categories>
          <Rating>
            <div>
              {anime.score ?? "-"}
              <span className="title">Score</span>
            </div>
            <div>
              {anime.rank ?? "-"}
              <span className="title">Rank</span>
            </div>
            <div>
              {anime.popularity ?? "-"}
              <span className="title">Popularity</span>
            </div>
          </Rating>
        </RightSide>
      </MainInfo>
      <Description>
        <p className="title">Description</p>
        <p>{anime.synopsis}</p>
      </Description>
    </Wrapper>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const id = ctx.params?.id;
  const anime = await axios
    .get(`https://api.jikan.moe/v4/anime/${id}/full`)
    .then((res) => res.data.data);

  return {
    props: { anime },
  };
}
