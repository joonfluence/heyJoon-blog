import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

type Props = {
  Open: boolean;
};

const Component: FC<Props> = ({ Open }) => {
  return (
    <IconMenu isOpen={Open}>
      <MenuItems>
        <Link href="/category/HTML">
          <li>HTML</li>
        </Link>
        <Link href="/category/CSS">
          <li>CSS</li>
        </Link>
        <Link href="/category/Javascript">
          <li>JavaScript</li>
        </Link>
        <Link href="/category/Nodejs">
          <li>Node.js</li>
        </Link>
      </MenuItems>
    </IconMenu>
  );
};

export default Component;

const IconMenu = styled.div<{ isOpen: boolean }>`
  ${tw`absolute md:block mt-5`}
  width: 300px;
  height: 700px;
  z-index: 5;
  background-color: white;
  border: 1px solid black;
  border-right: none;
  top: 100%;
  right: 0%;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100vh;
    border: none;
    top: 20%;
    left: 0%;
  }
`;

const MenuItems = styled.div`
  && {
    & > li {
      ${tw`text-2xl lg:text-2xl`}
      padding: 20px;
    }
  }
  ${tw`absolute flex flex-col m-5`}
`;
