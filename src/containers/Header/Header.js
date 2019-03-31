import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navigation/navbar'
import HeaderTop from '../../components/HeaderTop/headerTop'
import { headerRight } from './headerConfig'

const Wrapper = styled.div`
`
class Header extends Component {
render () {
  return (
    <Wrapper>
      <HeaderTop title={headerRight.title} logoRight={headerRight.logo} rightContent/>
      <Navbar company rightLink/>
    </Wrapper>
   )
  }
 }

export default Header