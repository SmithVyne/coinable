import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import arrowUp from "icons/arrowUp.svg";

const Wrapper = styled.div`
  height: 142px;
  width: 100%;
  border-top: 1px solid #dddddd;
  margin-top: 33px;
  padding: 0 14px;
  & > div {
    width: 720px;
    height: inherit;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 712px) {
      width: 100%;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
  }
  button {
    width: 32px;
    height: 32px;
    background: #ebebeb;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const FootNote = styled.div`
  width: 277px;
`;

export default function Footer() {
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Wrapper>
      <div>
        <FootNote>
          <h3>Smith Nkereuwem</h3>
          <span>
            A few words about how you found Coinable and how did you feel about
            this task :)
          </span>
        </FootNote>
        <button onClick={handleScrollToTop}>
          <Image alt="arrowUp" src={arrowUp} />
        </button>
      </div>
    </Wrapper>
  );
}
