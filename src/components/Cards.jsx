//cards stack
import React from 'react'
import styled from "styled-components"
import { cardInfo } from '../data'
import Card from './Card'
import bannerimg from "../assets/banner.jpg"
//import { mobile } from "../responsive"


const Container = styled.div`
  position: relative;
  margin-bottom: 100px;
`
// const ScrollContainer = styled.div`
//   width: 100%;
//   height: auto;
//   overflow-y: hidden;
  
// `
const CardContainer = styled.div`
  position: absolute;
  top: 76%;
  //top: 390px;
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: row;
  overflow-x:scroll;
  
  &::-webkit-scrollbar {
  display: none;
  }
`

const Image = styled.img`
  width: 100%;
`

function Cards(item) {
  return (
  <Container>
    <Image src={bannerimg}/>
    
      <CardContainer> 
        {cardInfo.map(item=>(
          <Card date={item.date} money={item.money} key={item.id} />
          ))}
      </CardContainer>
     
  </Container>
  )
}

export default Cards