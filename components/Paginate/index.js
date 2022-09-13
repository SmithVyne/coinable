import React from "react";
import styled from "styled-components";
import leftArrow from "icons/leftArrow.svg";
import rightArrow from "icons/rightArrow.svg";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled.div`
  a {
    width: 32px;
    height: 32px;
    background: #ebebeb;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export default function Paginate({ page }) {
  return (
    <Wrapper>
      <Link passHref href={`/?page=${+page - 1}`}>
        <a>
          <Image alt="leftArrow" src={leftArrow} />
        </a>
      </Link>
      {page}
      <Link href={`/?page=${+page + 1}`}>
        <a>
          <Image alt="rightArrow" src={rightArrow} />
        </a>
      </Link>
    </Wrapper>
  );
}
