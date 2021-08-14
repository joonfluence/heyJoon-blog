import Link from 'next/link'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

type Props = {
  Open: boolean
}

const Component:FC<Props> = ({Open}) => {
  return (
    <div>
      <IconMenu isOpen={Open}>
        <MenuItems>
          <Link href="/posts/news">
            <li>New</li>
          </Link>
          <Link href="/category/html">
            <li>HTML</li>
          </Link>
          <Link href="/category/css">
            <li>CSS</li>
          </Link>
          <Link href="/category/javascript">
            <li>JavaScript</li>
          </Link>
          <Link href="/category/nodejs">
            <li>Node.js</li>
          </Link>
          <Link href="/category/webpack">
            <li>Webpack</li>
          </Link>
          <Link href="/category/barbel">
            <li>Barbel</li>
          </Link>
        </MenuItems>
      </IconMenu>
    </div>
    )
  }

export default Component

const IconMenu = styled.div<{isOpen : boolean}>`
  position: absolute;
  background-color: #fff;
  width: 300px;
  border: 1px solid black;
  border-right: none;
  top: 9.8%;
  right: 0%;
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  @media screen and (min-width: 768px){
    position: relative;
    display: block;
    border: none;
  }
`;

const MenuItems = styled.div`
  && {
    & > li {
      ${tw`text-xl`}
      margin: 15px;
    }
  }
  ${tw`flex flex-col justify-evenly m-5`}
`;