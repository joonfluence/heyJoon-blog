import Link from 'next/link'
import React, { FC, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import styled from 'styled-components'
import tw from 'twin.macro'
import Avatar from '../avatar'
import Category from '../category'

type Props = {}

const Header: FC<Props> = () => {
  const [Open, setOpen] = useState(false);
  const ClickHandler = () => {
    console.log('clicked');
    setOpen(!Open);
  };
  return (
    <Wrapper>
      <h2 className="tracking-tight md:tracking-tighter leading-tight ml-5 mb-3">
        <Link href="/">
          <a className="hover:underline">
            <span className="text-2xl md:text-4xl font-bold mr-2">heyJoon</span>
            <span className="md:text-2xl">Blog.</span>
          </a>
        </Link>
      </h2>
      {/* <AvatarBlock>
        <Avatar name="이준호" picture='/assets/blog/authors/jj.jpeg'/>
      </AvatarBlock> */}
      <div className="mr-5 md:hidden">
        <GiHamburgerMenu onClick={ClickHandler} className="text-2xl block md:hidden"/>
      </div>
      <Category Open={Open}/>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.section`
  border-right: 1px solid black;
  height: 100vh;
  @media screen and (max-width: 768px){
    border-bottom: 1px solid black;
    border-right: none;
    height: 100%;
  }
  ${tw`sticky`}
`;

const AvatarBlock = styled.div`
  ${tw`pt-10`}
  @media screen and (max-width: 768px){
    display: none;
  }
`