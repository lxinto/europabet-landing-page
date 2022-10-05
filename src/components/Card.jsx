import React from 'react'
import cardimgactive from "../assets/../assets/tab-bg-active.png"
import cardimg from "../assets/tab-bg.png"
import styled from "styled-components"


const Container = styled.div``

const CardWrapper = styled.div`
    margin-top: 15px;
    margin-left: 30px;
    position: relative;
`
const ImageWrapper = styled.div`
    position: relative;
`

const ImageMain = styled.img`
    position: absolute;
    
    transition: all 0.5s ease;
    &:hover {
        opacity: 0;
    }
`
const ImageHover = styled.img`
`
const TextWrapper = styled.div`
    position: relative;
    color: white;
    display: flex;
    flex-direction: column;
    cursor: default;
    z-index: 2;
`

const Date = styled.h3`
    position: absolute;
    top: 25px;
    left: 100px;
    font-size: 15px;       
    pointer-events:none;
`

const Money = styled.h1`
    position: absolute;
    top: 50px;
    left: 60px;
    font-size: 26px;   
    pointer-events:none;
`

function Card(item) {
  return (
    <Container>
        <CardWrapper>
            <TextWrapper>
                <Date>{item.date}</Date>
                <Money>{item.money}</Money>
            </TextWrapper>
            <ImageWrapper>
                <ImageMain src={cardimg} />
                <ImageHover src={cardimgactive} />
            </ImageWrapper>
        </CardWrapper>
    </Container>
  )
}

export default Card