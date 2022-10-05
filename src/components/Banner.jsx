import React from 'react'
import styled from "styled-components"
import bannerimg from "../assets/banner.jpg"

const Container = styled.div``
const Image = styled.img`
    width: 100%;
`

function Banner() {
  return (
    <Container>
        <Image src={bannerimg}/>
    </Container>
  )
}

export default Banner