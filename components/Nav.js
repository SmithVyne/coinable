import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { format } from "date-fns";

const Wrapper = styled.nav`
  height: 58px;
  width: 100%;
  padding: 12px 0 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  gap: 42px;
  h1 {
    font-weight: 600;
    font-size: 24px;
  }
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #5a5a5a;
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
    width: 362px;
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
`;

export default function Nav() {
  return (
    <Wrapper>
      <h1>Anime</h1>
      <InputWrapper>
        <AiOutlineSearch />
        <input autoFocus placeholder="Search..." type="text" />
      </InputWrapper>
      <span>Today is the {format(new Date(), "do 'of' LLLL")}</span>
    </Wrapper>
  );
}
