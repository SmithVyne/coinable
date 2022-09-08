import React from "react";
import styled from "styled-components";
import leftArrow from "./icons/leftArrow.svg";
import rightArrow from "./icons/rightArrow.svg";
import Image from "next/image";

const Wrapper = styled.div`
  button {
    width: 32px;
    height: 32px;
    background: #ebebeb;
    border-radius: 5px;
    border: none;
  }
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin: 0 auto;
`;

export default function Paginate({ page }) {
  return (
    <Wrapper>
      <button>
        <Image alt="leftArrow" src={leftArrow} />
      </button>
      {page}
      <button>
        <Image alt="rightArrow" src={rightArrow} />
      </button>
    </Wrapper>
  );
}
