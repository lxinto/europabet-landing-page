import React from 'react'
import styled from "styled-components"
import ScrollerItem from './ScrollerItem'
import { scrollerImages } from '../data'


const Container = styled.div`
  margin-left: 20px;
`
const TextWrapper = styled.div`
  color: white;
  margin-left: 20px;
`

const Title = styled.h1`
  font-size: 24px;
`
const Info = styled.p`
  font-size: 13px;
`
const Wrapper = styled.div`
  
`

const Scroll = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  height: 360px;
  white-space:nowrap;
  display: flex;  
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #70E0B5;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #FFFFFF05;
    
  }
`

function Scroller() {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Title>დაატრიალე რჩეული სლოტები:</Title>
          <Info>სპინზე ფსონის მინ. რაოდენობა - 2₾</Info>
        </TextWrapper>
        <Scroll>
          {scrollerImages.map(item=>(
            <ScrollerItem img={item.img} key={item.id} />
          ))}          
        </Scroll>
      </Wrapper>
    </Container>
  )
}

export default Scroller