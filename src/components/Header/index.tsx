import React, { useEffect, useState } from 'react'

import Logo from "./../../assets/logo.png";
import ImageCustom from '../ImageCustom'

import * as S from './styles'

const Header: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(true)

  useEffect(() => {
    let lastScrollTop = 3000

    function handleWatchScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (scrollTop > lastScrollTop) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }
      lastScrollTop = scrollTop
    }

    window.addEventListener('scroll', handleWatchScroll)

    return () => {
      window.removeEventListener('scroll', handleWatchScroll)
    }
  }, [])

  return (
    <S.Container className={`${showNav ? 'active' : ''}`}>
      <div className='logo'>
        <ImageCustom alt='Logo site' src={Logo} className='image'/>
      </div>
      Noticias
    </S.Container>
  )
}

export default Header