import React from 'react'
import styled from "styled-components"
import AccordionBeta from './AccordionBeta'

const Container = styled.div`
  margin: 80px 20px 50px 20px;
`

const Title = styled.h1`
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 40px;
`

function Terms() {
  return (
    <Container>
        <Title>წესები და პირობები</Title>
        <AccordionBeta />
    </Container>
  )
}

export default Terms