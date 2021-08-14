import Container from './container'
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <CotentBlock>
          <h2 className="tracking-tight md:tracking-tighter leading-tight mb-3">
          <Link href="/">
            <a className="hover:underline">
              <span className="text-2xl md:text-4xl font-bold mr-2">heyJoon</span>
              <span className="md:text-2xl">Blog.</span>
            </a>
          </Link>
          </h2>
          <span className="pt-7">© 2021, All rights reserved by heyJoon.</span>
        </CotentBlock>
      </Container>
    </footer>
  )
}

export default Footer

const CotentBlock = styled.div`
  margin: 0 auto;
  border-top: 1px solid black;
  ${tw`pt-5 pb-10 flex flex-col items-center`}
`