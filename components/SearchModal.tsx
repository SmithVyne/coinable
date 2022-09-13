import axios from "axios";
import debounce from "lodash/debounce";
import Image from "next/image";
import Link from "next/link";
import { TAnime } from "types";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import arrowRight from "icons/arrowRight.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 120;
  display: flex;
  justify-content: center;
  padding: 0 14px;
`;
const InputWrapper = styled.div`
  margin-top: 238px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 100%;
  @media (max-width: 400px) {
    margin-top: 148px;
  }
  input {
    max-width: 100%;
    width: 618px;
    height: 64px;
    outline: none;
    border-radius: 30px;
    border: none;
    padding-left: 35px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    padding: 0 25px 0 35px;
    ::placeholder {
      font-weight: 400;
      color: #bababa;
    }
  }
`;
const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
  padding: 36px 35px;
  width: 100%;
  background-color: #fff;
  margin-top: 19px;
  border-radius: 32px;
  @media (max-width: 400px) {
    padding: 33px 28px;
  }
`;

const Result = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  div.imgWrapper {
    width: 50px;
    height: 50px;
    position: relative;
    min-width: 50px;
  }
  span.arrowRight {
    @media (max-width: 400px) {
      display: none;
    }
  }
`;

const TitleAndSub = styled.div`
  margin-left: 17px;
  margin-right: auto;
  > span {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  div.info {
    font-weight: 500;
    color: #757575;
    display: flex;
    gap: 3px;
    align-items: center;
    font-size: 14px;
    line-height: 17px;
    span.separator {
      margin-bottom: 7px;
    }
  }
`;

const Close = styled(IoCloseSharp)`
  position: absolute;
  right: 10px;
  top: -25px;
  cursor: pointer;
`;

function SearchResult({ anime }: { anime: TAnime }) {
  return (
    <Link href={`/anime/${anime.mal_id}`}>
      <Result>
        <div className="imgWrapper">
          <Image
            alt={`Image of the anime ${anime.title}`}
            src={anime.images.jpg.small_image_url}
            style={{ borderRadius: "10px" }}
            layout="fill"
          />
        </div>
        <TitleAndSub>
          <span>{anime.title}</span>
          <div className="info">
            <span>{anime.type}</span>
            <span className="separator">.</span>
            <span>{anime.episodes} Episodes</span>
            <span className="separator">.</span>
            <span>
              {anime.status === "Finished Airing" ? "Complete" : "Incomplete"}
            </span>
          </div>
        </TitleAndSub>
        <span className="arrowRight">
          <Image alt="arrowRight" src={arrowRight} />
        </span>
      </Result>
    </Link>
  );
}

type SearchProps = {
  close: () => void;
};

export default function SearchModal({ close }: SearchProps) {
  const [results, setResults] = useState<TAnime[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInput = useMemo(
    () =>
      debounce(({ target }: { target: HTMLInputElement }) => {
        console.log("hey", target.value);
        axios
          .get(
            `https://api.jikan.moe/v4/anime?q=${target.value.toLowerCase()}&limit=5`
          )
          .then((res) => setResults(res.data.data));
      }, 300),
    []
  );

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keyup", listener);
    return () => window.removeEventListener("keyup", listener);
  }, [close]);

  return (
    <Wrapper onClick={close}>
      <InputWrapper onClick={(e) => e.stopPropagation()}>
        <Close onClick={close} size={14} color="white" />
        <input
          placeholder="You can search for ‘Kyoukai no Kanata’ for example"
          type="text"
          onChange={handleInput}
          ref={inputRef}
          autoFocus
        />
        {inputRef?.current?.value && (
          <SearchResults>
            {results.length ? (
              results.map((anime) => (
                <SearchResult key={anime.mal_id} anime={anime} />
              ))
            ) : (
              <span>
                Oops it seems there is nothing for ‘{inputRef?.current?.value}’
              </span>
            )}
          </SearchResults>
        )}
      </InputWrapper>
    </Wrapper>
  );
}
