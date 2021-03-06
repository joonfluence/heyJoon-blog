import Link from "next/link";
import React, { FC, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import tw from "twin.macro";
import Category from "../category";

type Props = {};

const Header: FC<Props> = () => {
  const [Open, setOpen] = useState(false);
  const ClickHandler = () => {
    console.log("clicked");
    setOpen(!Open);
  };
  return (
    <Wrapper>
      <h2 className="tracking-tight md:tracking-tighter leading-tight m-5">
        <Link href="/">
          <a className="hover:underline">
            <span className="text-4xl md:text-6xl font-bold mr-2">heyJoon</span>
            <span className="text-xl md:text-2xl">Blog.</span>
          </a>
        </Link>
      </h2>
      <div className="mr-5 md:hidden">
        <GiHamburgerMenu
          onClick={ClickHandler}
          className="text-2xl block md:hidden"
        />
      </div>
      <Category Open={Open} />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  ${tw`sticky md:relative flex justify-between items-center md:block p-5`}
  top: 0;
  height: 100%;
  background-color: white;
  border-bottom: 1px solid black;
  @media screen and (min-width: 768px) {
    height: 100vh;
    border-right: 1px solid black;
    border-bottom: none;
  }
`;

const AvatarBlock = styled.div`
  ${tw`pl-5 pt-10`}
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
