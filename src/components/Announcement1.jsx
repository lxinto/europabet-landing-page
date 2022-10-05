import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  width:100%;
  padding-top: 10px;
  height: 50px;
  background-color: #ffffff15;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;  
`
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Title = styled.h1`
  color: white;
  font-size: 15px;
`
const Button = styled.button`
  background-color: #FFFFFF20;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  border: none;
  color: white;
  margin-right: 15px;

  transition:all 0.3s ease;
  &:hover{
    background-color: #FFFFFF50;
  }
`


function Announcement1() {
  return (
    <Container>
      <Wrapper>
        
        <Left></Left>
        
        <Center>
          <Title>12 იანვრიდან - 10 მარტამდე</Title>
        </Center>
        
        <Right>
          <Button>X</Button>
        </Right>
      
      </Wrapper>
    </Container>
  )
}

export default Announcement1