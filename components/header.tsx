import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-5 mt-5">
      <h2 className="tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">
            <span className="text-2xl md:text-4xl font-bold mr-2">heyJoon</span>
            <span className="md:text-2xl">Blog</span>
          </a>
        </Link>
        .
      </h2>
      <div className="tracking-tight md:tracking-tighter leading-tight">
        <GiHamburgerMenu className="text-2xl"/>
      </div>
    </div>
  )
}

export default Header
