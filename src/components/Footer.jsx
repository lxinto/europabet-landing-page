import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 88px;
    width: 100%;
`
const Line = styled.div`
    height: 2px;
    background-color: #70E0B5;
    margin-top: 40px;
`
const Wrap = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    margin: 20px 50px;
`

const Button = styled.button`
    color: white;
    padding: 0;
    border: none;
    background-color: #141529;
    cursor: pointer;
    font-size: 13px;
`
const ButtonBig = styled.button`
    padding: 15px 35px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #F05A22;
    cursor: pointer;
    font-size: 15px;
`

function Footer() {
  return (
    <Container>
        <Line />
        <Wrap>
            <Button>წინა აქცია</Button>
            <ButtonBig>Place a Bet</ButtonBig>
            <Button>შემდეგი აქცია</Button>
        </Wrap>
    </Container>

  )
}

export default Footer