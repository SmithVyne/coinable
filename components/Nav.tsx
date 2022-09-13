import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { format } from "date-fns";
import Link from "next/link";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dddddd;
  position: sticky;
  top: 0;
  z-index: 100;
  nav {
    height: 58px;
    width: 712px;
    padding: 12px 0 11px;
    display: flex;
    align-items: center;
    gap: 42px;
    background-color: #fff;
    @media (max-width: 712px) {
      padding: 15px 14px 14px 14px;
      gap: 14px;
      justify-content: space-between;
    }
    h1 {
      font-weight: 600;
      font-size: 24px;
      cursor: pointer;
    }
    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #5a5a5a;
      min-width: fit-content;
    }
  }
`;

const InputWrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    z-index: 1;
    left: 14px;
    top: 9px;
    color: #bababa;
  }
  input {
    height: 35px;
    outline: none;
    background: #eeeeee;
    border-radius: 30px;
    border: none;
    padding-left: 38px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    ::placeholder {
      color: #bababa;
    }
  }
  &,
  & input {
    width: 100%;
  }
`;

export default function Nav({ onClick }: { onClick: () => void }) {
  const [isMobile, setIsMobile] = useState<null | boolean>(null);
  useEffect(() => {
    const watcher = () => setIsMobile(window.innerWidth < 712);
    window.addEventListener("resize", watcher);
    watcher();
    return () => {
      window.removeEventListener("resize", watcher);
    };
  }, []);

  return (
    <Wrapper>
      <nav>
        <Link href={"/"}>
          <h1>Anime</h1>
        </Link>
        <InputWrapper onClick={onClick}>
          <AiOutlineSearch />
          <input placeholder="Search..." type="text" />
        </InputWrapper>
        <span>
          {isMobile == null
            ? null
            : isMobile
            ? format(new Date(), "MMM do")
            : `Today is the ${format(new Date(), "do 'of' LLLL")}`}
        </span>
      </nav>
    </Wrapper>
  );
}
