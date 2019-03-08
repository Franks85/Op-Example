import React, { Component } from 'react'
import styled from 'styled-components'
import ContentSummary from './ContentSummary/ContentSummary'

const Wrapper = styled.div`
`
class Home extends Component {
render () {
  return (
    <Wrapper>
        <ContentSummary />
    </Wrapper>
   )
  }
 }

export default Home