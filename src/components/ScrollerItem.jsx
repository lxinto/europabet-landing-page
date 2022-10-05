import React from 'react'
import styled from "styled-components"


const Container = styled.div``

const Image = styled.img`
    border-radius: 10px;
    margin-left: 20px;
    margin-top: 50px;
    cursor: pointer;
    
    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0.5px 0.5px 15px #91c5b1;
    }
`

function ScrollerItem(item) {
  return (
    <Container>
        <Image src={item.img} />
    </Container>
  )
}

export default ScrollerItem