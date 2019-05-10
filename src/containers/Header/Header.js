import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navigation/navbar'
import HeaderTop from '../../components/HeaderTop/headerTop'

const Wrapper = styled.div`
`
class Header extends Component {
render () {
  return (
    <Wrapper>
      <HeaderTop/>
      <Navbar base rightLink/>
    </Wrapper>
   )
  }
 }

export default Header